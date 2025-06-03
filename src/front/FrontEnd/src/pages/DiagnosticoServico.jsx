import React, { useState } from "react";
import "../assets/css/DiagnosticoServico.css";

function DiagnosticoServico() {
  const [diagnostico, setDiagnostico] = useState("");
  const [pecas, setPecas] = useState([
    { componente: "Memória RAM", quantidade: 2 },
    { componente: "Placa de Video", quantidade: 1 },
    { componente: "Cooler", quantidade: 4 },
  ]);

  return (
    <div className="container-diagnostico">
      <div className="header-servico">
        <div>
          <span className="servico-numero">Serviço #001</span>
          <span className="cliente-nome">Cliente: João Vasconcelos</span>
        </div>
        <div className="status-indicador"></div>
      </div>

      <div className="info-servico">
        <div>
          <span><b>Técnico:</b> Joaquim Barbosa</span><br />
          <span><b>Status:</b> Aguardando Diagnóstico</span>
        </div>
        <div>
          <span><b>Data da Solicitação:</b> 10/10/2025</span><br />
          <span><b>Prazo atual:</b> 12/10/2025</span>
        </div>
      </div>

      <div className="conteudo-diagnostico">
        <div className="problema-diagnostico">
          <div className="titulo-problema">Descrição do Problema</div>
          <div className="descricao-problema">
            O computador começou a piscar a tela durante o uso, e depois de alguns dias de teste não ligou mais.<br />
            O cliente gostaria de realizar uma limpeza no notebook também.
          </div>
          <div className="titulo-diagnostico">Diagnóstico Técnico</div>
          <textarea
            className="textarea-diagnostico"
            placeholder="Descreva o diagnóstico completo do problema..."
            value={diagnostico}
            onChange={e => setDiagnostico(e.target.value)}
          />
          <div className="botoes-diagnostico">
            <button className="btn-editar">Editar</button>
            <button className="btn-salvar">Salvar</button>
          </div>
        </div>
        <div className="pecas-necessarias">
          <div className="titulo-pecas">Peças Necessárias</div>
          <table className="tabela-pecas">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {pecas.map((peca, idx) => (
                <tr key={idx}>
                  <td>{peca.componente}</td>
                  <td>{peca.quantidade}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="alerta-pecas">
            <span className="pecas-alerta-texto">Peças necessárias faltando</span>
          </div>
          <button className="btn-solicitar-pecas">Solicitar peças</button>
          <button className="btn-concluir-manutencao">Concluir Manutenção</button>
        </div>
      </div>
    </div>
  );
}

export default DiagnosticoServico;