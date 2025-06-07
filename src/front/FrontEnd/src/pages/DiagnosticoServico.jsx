import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../assets/css/DiagnosticoServico.css";
import BarraLateral from "../components/BarraLateral.jsx";
import notebook from "../assets/images/notebook-icon.png";
import SolicitarPecas from "../components/DetalhesServico/SolicitarPecas.jsx";
import ManutencaoConcluida from "../components/DetalhesServico/ManutencaoConcluida";

export default function DiagnosticoServico() {
  const { id } = useParams(); // Pega o ID da URL

  const [servicoData, setServicoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSolicitarPecas, setShowSolicitarPecas] = useState(false);
  const [showManutencaoConcluida, setShowManutencaoConcluida] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/ordem-servicos/${id}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          if (res.data.length > 0) {
            setServicoData(res.data[0]);
          } else {
            setServicoData(null);
          }
        } else if (res.data && typeof res.data === "object") {
          setServicoData(res.data);
        } else {
          setServicoData(null);
        }
      })
      .catch(() => setServicoData(null))
      .finally(() => setLoading(false));
  }, [id]);

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
          <SolicitarPecas onClose={() => setShowSolicitarPecas(false)} />
        )}
        {showManutencaoConcluida && (
          <ManutencaoConcluida onClose={() => setShowManutencaoConcluida(false)} />
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
              Técnico: <strong>{servicoData.tecnico.nome}</strong>
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
                  value={servicoData.solucaoOs}
                  readOnly
                ></textarea>
                <div className="botoes-diagnostico">
                  <button className="btn-editar">Editar</button>
                  <button className="btn-salvar">Salvar</button>
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
                    {(servicoData.pecas || []).map((peca) => (
                      <tr key={peca.id}>
                        <td>{peca.componente}</td>
                        <td>{peca.quantidade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="botoes-pecas">
                  <button
                    className="btn-solicitar"
                    onClick={() => setShowSolicitarPecas(true)}
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
