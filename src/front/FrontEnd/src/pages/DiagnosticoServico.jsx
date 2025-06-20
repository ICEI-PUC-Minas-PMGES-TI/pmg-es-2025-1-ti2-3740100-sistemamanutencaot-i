import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/DiagnosticoServico.css";
import BarraLateral from "../components/BarraLateral.jsx";
import notebook from "../assets/images/notebook-icon.png";
import SolicitarPecas from "../components/DetalhesServico/SolicitarPecas.jsx";
import ManutencaoConcluida from "../components/DetalhesServico/ManutencaoConcluida";
import AdicionarPecas from "../components/DetalhesServico/AdicionarPecas.jsx";

export default function DiagnosticoServico() {
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [solucaoEditada, setSolucaoEditada] = useState("");
  const [servicoData, setServicoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAdicionarPecas, setShowAdicionarPecas] = useState(false);
  const [showSolicitarPecas, setShowSolicitarPecas] = useState(false);
  const [showManutencaoConcluida, setShowManutencaoConcluida] = useState(false);
  const [pecas, setPecas] = useState([]); // Estado para armazenar as peças

  useEffect(() => {
    setLoading(true);

    const fetchServico = axios.get(`http://localhost:8080/ordem-servicos/${id}`);
    const fetchPecasUtilizadas = axios.get(`http://localhost:8080/pecas-utilizadas/ordem/${id}`);

    Promise.all([fetchServico, fetchPecasUtilizadas])
      .then(([resServico, resPecas]) => {
        let data = null;
        if (Array.isArray(resServico.data)) {
          data = resServico.data.length > 0 ? resServico.data[0] : null;
        } else if (resServico.data && typeof resServico.data === "object") {
          data = resServico.data;
        }

        setServicoData(data);
        if (data) {
          setSolucaoEditada(data.solucaoOs);
        }

        setPecas(resPecas.data || []);
      })
      .catch((error) => {
        console.error("Erro ao carregar dados:", error);
        setServicoData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleAdicionarPecas = (novasPecas) => {
    // Atualizar o estado local com as novas peças
    setPecas([...pecas, ...novasPecas]);
    
    // Aqui você faria a chamada para salvar no backend
    // axios.post(`http://localhost:8080/ordem-servicos/${id}/pecas`, novasPecas)
    //   .then(() => {
    //     // Recarregar dados do servidor se necessário
    //   });
  };

  if (loading) {
    return (
      <div className="layout-principal">
        <BarraLateral />
        <div className="container-diagnostico">
          <div className="conteudo-bloco">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Carregando...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!servicoData) {
    return (
      <div className="layout-principal">
        <BarraLateral />
        <div className="container-diagnostico">
          <div className="conteudo-bloco">
            <p>Ordem de serviço não encontrada.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="layout-principal">
      <BarraLateral />
      <div className="container-diagnostico">

        {showSolicitarPecas && (
          <SolicitarPecas 
            onClose={() => setShowSolicitarPecas(false)} 
            ordemId={id}
          />
        )}
        {showManutencaoConcluida && (
          <ManutencaoConcluida onClose={() => setShowManutencaoConcluida(false)} />
        )}
        {showAdicionarPecas && (
          <AdicionarPecas
            ordemId={servicoData.id}
            onClose={() => setShowAdicionarPecas(false)}
            onPeçasAdicionadas={handleAdicionarPecas}
          />
        )}

        <div className="header-servico">
          <div className="info-servico">
            <div className="logo-notebook">
              <img src={notebook} alt="Notebook" />
            </div>
            <div>
              <div className="servico-numero">Serviço #{servicoData.id}</div>
              <div className="cliente-nome">
                Cliente: <strong>{servicoData.computador.cliente.pessoa.nome}</strong>
              </div>
            </div>
          </div>
          <div className="status-bolinha"></div>
        </div>

        <div className="conteudo-bloco">
          <div className="detalhes-superiores">
            <div className="detalhes-esquerda">
              Técnico: <strong>{servicoData?.tecnico?.nome || "Nenhum técnico selecionou essa O.S"}</strong>
              <br />
              Status: <strong>{servicoData.status}</strong>
            </div>
            <div className="detalhes-direita">
              Marca: <strong>{servicoData.computador.marca}</strong>
              <br />
              Modelo: <strong>{servicoData.computador.modelo}</strong>
            </div>
            <div className="detalhes-direita">
              Data da Solicitação: <strong>{servicoData.dataEntrada}</strong>
              <br />
              Prazo atual: <strong>{servicoData.prazo}</strong>
            </div>
          </div>

          <div className="area-principal">
            <div className="coluna-esquerda">
              <div className="card-padrao">
                <div className="titulo-secao">Descrição do Problema</div>
                <textarea
                  className="textarea-custom"
                  placeholder="Descreva o problema..."
                  value={servicoData.descricaoOs}
                  readOnly
                ></textarea>
              </div>

              <div className="card-padrao">
                <div className="titulo-secao">Diagnóstico Técnico</div>
                <textarea
                  className="textarea-custom"
                  placeholder="Descreva o diagnóstico completo do problema..."
                  value={solucaoEditada}
                  onChange={(e) => setSolucaoEditada(e.target.value)}
                  readOnly={!isEditing}
                ></textarea>
                <div className="botoes-diagnostico">
                  {!isEditing ? (
                    <button className="btn-editar" onClick={() => setIsEditing(true)}>
                      Editar
                    </button>
                  ) : (
                    <>
                      <button
                        className="btn-salvar"
                        onClick={() => {
                          axios
                            .put(`http://localhost:8080/ordem-servicos/${servicoData.id}`, {
                              solucaoOs: solucaoEditada,
                              status: "Diagnostico feito"
                            })
                            .then((res) => {
                              setServicoData(res.data);
                              setIsEditing(false);
                            })
                            .catch((err) => {
                              alert("Erro ao salvar as alterações");
                              console.error(err);
                            });
                        }}
                      >
                        Salvar
                      </button>
                      <button
                        className="btn-editar"
                        onClick={() => {
                          setSolucaoEditada(servicoData.solucaoOs);
                          setIsEditing(false);
                        }}
                      >
                        Cancelar
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="coluna-direita">
              <div className="card-padrao">
                <div className="titulo-secao">Peças Necessárias</div>
                <table className="table-custom">
                  <thead>
                    <tr>
                      <th>Componente</th>
                      <th>Quantidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pecas.map((peca) => (
                      <tr key={peca.id || Math.random()}>
                        <td>
                          {peca.peca
                            ? `${peca.peca.nome} ${peca.peca.marca} ${peca.peca.modelo}`
                            : "Peça não encontrada"}
                        </td>
                        <td>{peca.quantidade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div
                  className="botoes-pecas"
                  style={{ display: "flex", gap: "10px", justifyContent: "center" }}
                >
                  <button
                    className="btn-adicionar"
                    onClick={() => setShowAdicionarPecas(true)}
                    style={{
                      background: "#f1c40f",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                  >
                    Adicionar peças
                  </button>
                  <button
                    className="btn-solicitar"
                    onClick={() => setShowSolicitarPecas(true)}
                    style={{
                      background: "#A21919",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                  >
                    Solicitar peças
                  </button>
                </div>
              </div>
              <div className="botao-concluir-container">
                <button
                  className="btn-concluir"
                  onClick={() => setShowManutencaoConcluida(true)}
                >
                  Concluir Manutenção
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}