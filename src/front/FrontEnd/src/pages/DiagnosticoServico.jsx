import React, { useState, useEffect } from "react";
import "../assets/css/DiagnosticoServico.css"; // CSS normal
import BarraLateral from "../components/BarraLateral.jsx";
import notebook from "../assets/images/notebook-icon.png";
import SolicitarPecas from "../components/DetalhesServico/SolicitarPecas.jsx";
import ManutencaoConcluida from "../components/DetalhesServico/ManutencaoConcluida";

export default function DiagnosticoServico() {
  const mockData = {
    servico: {
      id: "001",
      cliente: "João Vasconcelos",
      tecnico: "Joaquim Barbosa",
      status: "Aguardando Diagnóstico",
      marca: "Dell",
      modelo: "Inspiron 8GB RAM, SSD 240GB",
      dataSolicitacao: "10/10/2025",
      prazo: "12/10/2025",
      descricaoProblema:
        "O computador não liga e faz um barulho estranho ao pressionar o botão de energia.",
      diagnostico:
        "Fonte de alimentação danificada e memória RAM com problemas de contato.",
    },
    pecas: [
      { id: 1, componente: "Memória RAM", quantidade: 2 },
      { id: 2, componente: "Fonte de Alimentação", quantidade: 1 },
      { id: 3, componente: "Cooler", quantidade: 4 },
    ],
  };

  const [servicoData, setServicoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSolicitarPecas, setShowSolicitarPecas] = useState(false);
  const [showManutencaoConcluida, setShowManutencaoConcluida] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setServicoData(mockData);
      setLoading(false);
    }, 500);
  }, []);

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

  return (
    <div className="layout-principal">
      <BarraLateral />

      <div className="container-diagnostico">
        {showSolicitarPecas && (
          <SolicitarPecas onClose={() => setShowSolicitarPecas(false)} />
        )}
        {showManutencaoConcluida && (
          <ManutencaoConcluida
            onClose={() => setShowManutencaoConcluida(false)}
          />
        )}

        <div className="header-servico">
          <div className="info-servico">
            <div className="logo-notebook">
              <img src={notebook} alt="Notebook" />
            </div>
            <div>
              <div className="servico-numero">
                Serviço #{servicoData.servico.id}
              </div>
              <div className="cliente-nome">
                Cliente: <strong>{servicoData.servico.cliente}</strong>
              </div>
            </div>
          </div>
          <div className="status-bolinha"></div>
        </div>

        <div className="conteudo-bloco">
          <div className="detalhes-superiores">
            <div className="detalhes-esquerda">
              Técnico: <strong>{servicoData.servico.tecnico}</strong>
              <br />
              Status: <strong>{servicoData.servico.status}</strong>
            </div>
            <div className="detalhes-direita">
              Marca: <strong>{servicoData.servico.marca}</strong>
              <br />
              Modelo: <strong>{servicoData.servico.modelo}</strong>
            </div>
            <div className="detalhes-direita">
              Data da Solicitação:{" "}
              <strong>{servicoData.servico.dataSolicitacao}</strong>
              <br />
              Prazo atual: <strong>{servicoData.servico.prazo}</strong>
            </div>
          </div>

          <div className="area-principal">
            <div className="coluna-esquerda">
              <div className="card-padrao">
                <div className="titulo-secao">Descrição do Problema</div>
                <textarea
                  className="textarea-custom"
                  placeholder="Descreva o problema..."
                  value={servicoData.servico.descricaoProblema}
                  readOnly
                ></textarea>
              </div>

              <div className="card-padrao">
                <div className="titulo-secao">Diagnóstico Técnico</div>
                <textarea
                  className="textarea-custom"
                  placeholder="Descreva o diagnóstico completo do problema..."
                  value={servicoData.servico.diagnostico}
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
                    {servicoData.pecas.map((peca) => (
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
