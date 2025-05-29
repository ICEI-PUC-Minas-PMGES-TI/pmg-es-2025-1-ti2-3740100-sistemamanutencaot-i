import React, { useState } from "react";
import "./AdicionarAlert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faScrewdriver,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const AdicionarAlert = ({ onClose, onAddUser, onAddTechnical }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

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
            onMouseEnter={() => setHoveredButton("user")}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label="Adicionar Usuário"
          >
            <div className="button-content">
              <FontAwesomeIcon
                icon={faUser}
                className={`adicionar-alert-icon ${
                  hoveredButton === "user" ? "hovered" : ""
                }`}
              />
              <span
                className={`button-label ${
                  hoveredButton === "user" ? "visible" : ""
                }`}
              >
                Usuário
              </span>
            </div>
          </button>

          <button
            className="adicionar-alert-btn"
            onClick={onAddTechnical}
            onMouseEnter={() => setHoveredButton("technical")}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label="Adicionar Técnico"
          >
            <div className="button-content">
              <FontAwesomeIcon
                icon={faScrewdriver}
                className={`adicionar-alert-icon ${
                  hoveredButton === "technical" ? "hovered" : ""
                }`}
              />
              <span
                className={`button-label ${
                  hoveredButton === "technical" ? "visible" : ""
                }`}
              >
                Técnico
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdicionarAlert;
