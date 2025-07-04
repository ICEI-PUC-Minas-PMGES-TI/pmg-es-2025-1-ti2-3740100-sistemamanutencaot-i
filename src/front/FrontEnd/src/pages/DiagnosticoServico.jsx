import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/css/DiagnosticoServico.css";
import BarraLateral from "../components/BarraLateral.jsx";
import notebook from "../assets/images/notebook-icon.png";
import SolicitarPecas from "../components/DetalhesServico/SolicitarPecas.jsx";
import ManutencaoConcluida from "../components/DetalhesServico/ManutencaoConcluida";
import AdicionarPecas from "../components/DetalhesServico/AdicionarPecas.jsx";
import ModalMaoDeObra from "../components/DetalhesServico/MaoDeObra.jsx";


export default function DiagnosticoServico() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [solucaoEditada, setSolucaoEditada] = useState("");
  const [servicoData, setServicoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAdicionarPecas, setShowAdicionarPecas] = useState(false);
  const [showSolicitarPecas, setShowSolicitarPecas] = useState(false);
  const [showManutencaoConcluida, setShowManutencaoConcluida] = useState(false);
  const [pecas, setPecas] = useState([]);

  // Pegando dados do usuário logado
  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const tecnicoIdLogado = localStorage.getItem("id_tecnico");

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

  // Função para verificar permissão de edição/modificação
  const podeEditar = () => {
    if (tipoUsuario === "gerente") return true;

    const tecnicoResponsavelId =
      servicoData?.tecnico?.id?.toString() ||
      servicoData?.tecnicoId?.toString(); // fallback caso venha só o id

    return tipoUsuario === "tecnico" && tecnicoResponsavelId === tecnicoIdLogado;
  };

  // Funções de bloqueio para ações se não tiver permissão
  const handleEditarClick = () => {
    if (!podeEditar()) {
      alert("Você não pode editar esta ordem de serviço pois não é o técnico responsável.");
      return;
    }
    setIsEditing(true);
  };

  const handleSalvarClick = () => {
    if (!podeEditar()) {
      alert("Você não pode salvar alterações nesta ordem de serviço pois não é o técnico responsável.");
      return;
    }
    axios
      .put(`http://localhost:8080/ordem-servicos/${servicoData.id}`, {
        solucaoOs: solucaoEditada,
        status: "Diagnóstico",
      })
      .then((res) => {
        setServicoData(res.data);
        setIsEditing(false);
      })
      .catch((err) => {
        alert("Erro ao salvar as alterações");
        console.error(err);
      });
  };

  const handleCancelarClick = () => {
    setSolucaoEditada(servicoData.solucaoOs);
    setIsEditing(false);
  };

  const handleAdicionarPecasClick = () => {
    if (!podeEditar()) {
      alert("Você não pode adicionar peças nesta ordem de serviço pois não é o técnico responsável.");
      return;
    }
    setShowAdicionarPecas(true);
  };

  const handleSolicitarPecasClick = () => {
    if (!podeEditar()) {
      alert("Você não pode solicitar peças nesta ordem de serviço pois não é o técnico responsável.");
      return;
    }
    setShowSolicitarPecas(true);
  };

  const [mostrarModalMaoDeObra, setMostrarModalMaoDeObra] = useState(false);

  const handleConcluirClick = () => {
    if (!podeEditar()) {
      alert("Você não pode concluir esta ordem de serviço pois não é o técnico responsável.");
      return;
    }
    setMostrarModalMaoDeObra(true); // abrir o modal
  };

  const concluirManutencaoComValor = (valorMaoDeObra) => {
    // Calcula custo das peças
    const custoPecas = pecas.reduce((total, peca) => {
      const preco = peca.peca?.precoUnitario ?? peca.precoUnitario ?? 0;
      return total + (preco * (peca.quantidade || 1));
    }, 0);

    const custoTotal = custoPecas + valorMaoDeObra;
    
    // Formata data no formato dd/MM/yyyy
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
    const ano = hoje.getFullYear();
    const dataFinalizacao = `${dia}/${mes}/${ano}`;
    
    // Cria payload com os nomes de campos corretos
    const payload = {
      data_finalizacao: dataFinalizacao, // Campo correto para data
      status: "Concluído",
      valor_total: custoTotal, // Campo correto para valor total
    };

    axios
      .put(`http://localhost:8080/ordem-servicos/${servicoData.id}`, payload)
      .then(() => {
        navigate("/ordens-servico");
      })
      .catch((err) => {
        console.error("Erro detalhado:", err.response?.data || err.message);
        alert(`Erro ao concluir: ${err.response?.data?.message || "Verifique o console para detalhes"}`);
      });
  };

  const handleAdicionarPecas = (novasPecas) => {
    setPecas([...pecas, ...novasPecas]);
    window.location.reload(); // força um F5
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

  if (servicoData.status === "Concluído") {
    return (
      <div className="layout-principal">
        <BarraLateral />
        <div className="container-diagnostico" style={{ backgroundColor: "transparent" }}>
          <div className="conteudo-bloco" style={{ backgroundColor: "transparent" }}>
            <h1
              style={{
                color: "#008000",
                fontSize: "3rem",
                textAlign: "center",
                marginTop: "350px",
              }}
            >
              Esse reparo já foi concluído.
            </h1>
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
          <SolicitarPecas onClose={() => setShowSolicitarPecas(false)} ordemId={id} />
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

        {mostrarModalMaoDeObra && (
          <ModalMaoDeObra
            onClose={() => setMostrarModalMaoDeObra(false)}
            onConfirm={(valor) => {
              setMostrarModalMaoDeObra(false);
              concluirManutencaoComValor(valor);
            }}
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
                Cliente: <strong>{servicoData.nomeCliente}</strong>
              </div>
            </div>
          </div>
          <div className="status-bolinha"></div>
        </div>

        <div className="conteudo-bloco">
          <div className="detalhes-superiores">
            <div className="detalhes-esquerda">
              Técnico: <strong>{servicoData.tecnicoNome || "Nenhum técnico selecionou essa O.S"}</strong>
              <br />
              Status: <strong>{servicoData.status}</strong>
            </div>
            <div className="detalhes-direita">
              Marca: <strong>{servicoData.computadorMarca}</strong>
              <br />
              Modelo: <strong>{servicoData.computadorModelo}</strong>
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
                    <button className="btn-editar" onClick={handleEditarClick}>
                      Editar
                    </button>
                  ) : (
                    <>
                      <button className="btn-salvar" onClick={handleSalvarClick}>
                        Salvar
                      </button>
                      <button className="btn-editar" onClick={handleCancelarClick}>
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
                            ? `${peca.peca.tipo} ${peca.peca.marca} ${peca.peca.modelo}`
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
                  <button className="btn-adicionar" onClick={handleAdicionarPecasClick} style={{
                      background: "#f1c40f",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}>
                    Adicionar peças
                  </button>
                  <button className="btn-solicitar" onClick={handleSolicitarPecasClick} style={{
                      background: "#A21919",
                      color: "#fff",
                      fontWeight: "bold",
                      padding: "10px 20px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}>
                    Solicitar peças
                  </button>
                </div>
              </div>
              <div className="botao-concluir-container">
                <button className="btn-concluir" onClick={handleConcluirClick}>
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
