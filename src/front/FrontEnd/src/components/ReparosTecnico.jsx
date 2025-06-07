import React from "react";
import { Link } from "react-router-dom";
import NotebookIcon from "../assets/images/notebook-icon.png";
import ComputadorIcon from "../assets/images/computador.png";
import "../assets/css/ReparoCard.css";

const ReparoCard = ({
  nome,
  id,
  prazo,
  status,
  cor,
  index,
  descricaoOs,
  tipo, // 👈 importante garantir que o `tipo` esteja vindo como prop
}) => {
  const deviceIcon = tipo === "Computador" ? ComputadorIcon : NotebookIcon;

  return (
    <Link to={`/detalhes-reparo/${id}`} className="reparocard-link">
      <article
        className="reparocard-card"
        role="article"
        aria-labelledby={`reparocard${index + 1}-title`}
      >
        <header className="reparocard-card-header">
          <div className="reparocard-card-title">
            <img
              src={deviceIcon}
              alt="Ícone de dispositivo"
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
          <p className="reparocard-sintomas-texto">
            {descricaoOs && descricaoOs.trim() !== "" ? descricaoOs : "Nada encontrado..."}
          </p>
        </div>
      </article>
    </Link>
  );
};


export default ReparoCard;
