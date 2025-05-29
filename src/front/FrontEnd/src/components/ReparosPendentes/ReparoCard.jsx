import React from "react";
import "./ReparoCard.css";
import notebookIcon from "../../assets/images/notebook-icon.png";
import computadorIcon from "../../assets/images/computador.png";

const ReparoCard = ({
  nome,
  id,
  prazo,
  status,
  statusCor,
  sintomas,
  tipo,
  index,
}) => {
  const deviceIcon = tipo === "computador" ? computadorIcon : notebookIcon;
  const deviceAlt = tipo === "computador" ? "Computador" : "Notebook";

  return (
    <article className="card-reparo" aria-labelledby={`card-${index}-title`}>
      <header className="card-header">
        <div className="card-title">
          <div className="device-icon-container">
            <img src={deviceIcon} alt={deviceAlt} className="device-icon" />
          </div>
          <div>
            <p id={`card-${index}-title`} className="nome">
              {nome}
            </p>
            <p className="servico">Serviço #{id}</p>
          </div>
        </div>
        <div
          className="status-dot"
          style={{
            backgroundColor: statusCor,
            boxShadow: `0 0 8px ${statusCor}`,
          }}
          aria-label={`Status: ${status}`}
        />
      </header>

      <div className="card-body">
        <p>
          Prazo: <span className="prazo-text">{prazo}</span>
        </p>
        <p>
          Status: <span className="status-text">{status}</span>
        </p>

        <div className="sintomas-container">
          <p className="sintomas-titulo">
            <strong>Sintomas:</strong>
          </p>
          <p className="sintomas-texto">{sintomas || "Nada encontrado..."}</p>
        </div>
      </div>

      <button
        className="btn-atribuir"
        type="button"
        aria-label={`Atribuir reparo para ${nome}`}
      >
        Atribuir Reparo
      </button>
    </article>
  );
};

export default ReparoCard;
