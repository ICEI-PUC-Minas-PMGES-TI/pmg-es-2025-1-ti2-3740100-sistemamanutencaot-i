import React from "react";
import NotebookIcon from "../assets/images/notebook-icon.png";
import "../assets/css/ReparoCard.css";

const ReparoCard = ({
  nome,
  id,
  prazo,
  status,
  cor,
  index,
  onAtribuir, // recebe a função
}) => {
  return (
    <article
      className="reparocard-card"
      role="article"
      aria-labelledby={`reparocard${index + 1}-title`}
    >
      <header className="reparocard-card-header">
        <div className="reparocard-card-title">
          <img
            src={NotebookIcon}
            alt="Ícone de notebook"
            className="reparocard-device-icon"
          />
          <div>
            <p id={`reparocard${index + 1}-title`} className="reparocard-nome">
              {nome}
            </p>
            <p className="reparocard-servico">Serviço #{id}</p>
          </div>
        </div>
        <span
          className="reparocard-status-dot"
          style={{ backgroundColor: cor }}
          aria-label={`Status ${cor}`}
          title={`Status ${cor}`}
        ></span>
      </header>
      <div className="reparocard-card-body">
        <p>
          Prazo: <strong>{prazo}</strong>
        </p>
        <p>
          Status: <strong>{status}</strong>
        </p>
        <p className="reparocard-sintomas-titulo">
          <strong>Sintomas:</strong>
        </p>

        <p className="reparocard-sintomas-texto">Nada encontrado...</p>

        {/* Botão para atribuir técnico */}
        <button onClick={onAtribuir} className="btn-atribuir">
          Atribuir reparo
        </button>
      </div>
    </article>
  );
};

export default ReparoCard;
