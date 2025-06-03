import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/DiagnosticoServico.css"
import BarraLateral from "../components/BarraLateral.jsx";

import notebook from "../assets/images/notebook-icon.png"

export default function DiagnosticoServico() {
  return (
    <div className="layout-principal">
      <BarraLateral />

      <div className="container-diagnostico">
        {/* Cabeçalho */}
        <div className="header-servico">
          <div className="info-servico">
            <div className="logo-notebook">
              <img src={notebook} alt="Notebook icon" className="icon-notebook" />
            </div>
            <div>
              <div className="servico-numero">Serviço #001</div>
              <div className="cliente-nome">Cliente: <strong>João Vasconcelos</strong></div>
            </div>
          </div>
          <div className="status-bolinha"></div>
        </div>

        <div className="conteudo-bloco p-3 mt-3">
          {/* Detalhes superiores */}
          <div className="row mt-1">
            <div className="col-md-6 mb-2">
              <div className="detalhes-superiores-esquerda">
                Técnico: <strong>Joaquim Barbosa</strong><br />
                Status: <strong>Aguardando Diagnóstico</strong>
              </div>
            </div>
            <div className="col-md-3">
              <div className="detalhes-superiores-direita">
                Data da Solicitação: <strong>10/10/2025</strong><br />
                Prazo atual: <strong>12/10/2025</strong>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Coluna esquerda */}
            <div className="col-md-6">
              <div className="card-padrao">
                <div className="titulo-secao">Descrição do Problema</div>
                <textarea className="caixa-descricao" placeholder="Descreva o problema..."></textarea>
              </div>

              <div className="card-padrao">
                <div className="titulo-secao">Diagnóstico Técnico</div>
                <textarea className="caixa-texto" placeholder="Descreva o diagnóstico completo do problema..."></textarea>
                <div className="d-flex justify-content-center gap-2 mt-3">
                  <button className="btn btn-outline-primary btn-editar">Editar</button>
                  <button className="btn btn-primary btn-salvar">Salvar</button>
                </div>
              </div>
            </div>

            {/* Coluna direita */}
            <div className="col-md-6 mt-4 d-flex flex-column">
              <div className="card-padrao flex-grow-1 d-flex flex-column justify-content-between">
                {/* Título + tabela + Solicitar Peças */}
                <div>
                  <div className="titulo-secao">Peças Necessárias</div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="titulos-tabela">Componente</th>
                        <th className="titulos-tabela">Quantidade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center h5">Memória RAM</td>
                        <td className="text-center h5">2</td>
                      </tr>
                      <tr>
                        <td className="text-center h5">Placa de Vídeo</td>
                        <td className="text-center h5">1</td>
                      </tr>
                      <tr>
                        <td className="text-center h5">Cooler</td>
                        <td className="text-center h5">4</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="d-flex justify-content-center mt-2 mb-4">
                    <button className="btn btn-danger btn-solicitar">Solicitar peças</button>
                  </div>
                </div>

                <div className="d-flex justify-content-center mt-auto mb-2">
                  <button className="btn btn-success btn-concluir">Concluir Manutenção</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
