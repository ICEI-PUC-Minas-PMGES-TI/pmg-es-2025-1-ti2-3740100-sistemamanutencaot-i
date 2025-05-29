import React from "react";
import "./AdicionarAlert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faScrewdriver,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const AdicionarAlert = ({ onClose, onAddUser, onAddTechnical }) => {
  return (
    <div className="adicionar-alert-container">
      <div className="adicionar-alert-content">
        <div className="adicionar-alert-header">
          <h2 className="adicionar-alert-title">Adicionar Novo:</h2>
          <button
            className="adicionar-alert-close-btn"
            onClick={onClose}
            aria-label="Fechar"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="adicionar-alert-buttons">
          <button
            className="adicionar-alert-btn"
            onClick={onAddUser}
            aria-label="Adicionar Usuário"
          >
            <FontAwesomeIcon icon={faUser} className="adicionar-alert-icon" />
          </button>
          <button
            className="adicionar-alert-btn"
            onClick={onAddTechnical}
            aria-label="Adicionar Técnico"
          >
            <FontAwesomeIcon
              icon={faScrewdriver}
              className="adicionar-alert-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdicionarAlert;
