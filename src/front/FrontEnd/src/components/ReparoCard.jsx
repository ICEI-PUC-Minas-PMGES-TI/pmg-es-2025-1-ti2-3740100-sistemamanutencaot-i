import React from "react";
import NotebookIcon from "../assets/images/notebook-icon.png";

const ReparoCard = ({ nome, id, prazo, status, cor, index }) => {
  return (
    <article
      className="card"
      role="article"
      aria-labelledby={`card${index + 1}-title`}
    >
      <header className="card-header">
        <div className="card-title">
          <img
            src={NotebookIcon}
            alt="Ícone de notebook"
            className="device-icon"
          />
          <div>
            <p id={`card${index + 1}-title`} className="nome">
              {nome}
            </p>
            <p className="servico">Serviço #{id}</p>
          </div>
        </div>
        <span
          className="status-dot"
          style={{ backgroundColor: cor }}
          aria-label={`Status ${cor}`}
          title={`Status ${cor}`}
        ></span>
      </header>
      <div className="card-body">
        <p>
          Prazo: <strong>{prazo}</strong>
        </p>
        <p>
          Status: <strong>{status}</strong>
        </p>
        <p className="sintomas-titulo">
          <strong>Sintomas:</strong>
        </p>

        <p className="sintomas-texto">
          {" "}
          Nada encontrado...
        </p>
      </div>
    </article>
  );
};

export default ReparoCard;
