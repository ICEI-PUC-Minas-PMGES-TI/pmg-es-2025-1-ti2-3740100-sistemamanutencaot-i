import React from "react";
import "./ManutencaoConcluida.css";

export default function ManutencaoConcluida({ onClose }) {
  return (
    <div className="container">
      <div className="card">
        <h1 className="titulo">Manutenção Concluída</h1>
        <p className="descricao">
          Uma mensagem comunicando a finalização foi enviada ao cliente,
          juntamente com o boleto.
        </p>
        <button className="botao" onClick={onClose}>
          Ok
        </button>
      </div>
    </div>
  );
}
