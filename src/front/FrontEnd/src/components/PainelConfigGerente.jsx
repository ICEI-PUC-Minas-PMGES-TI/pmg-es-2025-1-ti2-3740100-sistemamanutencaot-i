// PainelConfigGerente.jsx
import React, { useState } from "react";
import styles from "../assets/css/PainelConfigGerente.module.css";
import edit from "../assets/images/edit.png";
import AlterarSenhaAlert from "./AlterarSenhaAlert";
import AlterarEmailAlert from "./AlterarEmailAlert";
import AlterarEnderecoAlert from "./AlterarEnderecoAlert";
import AlterarNomeLojaAlert from "./AlterarNomeLojaAlert";

function PainelConfigGerente() {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedField, setSelectedField] = useState("");

  const handleEditClick = (fieldName) => {
    setSelectedField(fieldName);
    setShowAlert(true);
  };

  const renderAlert = () => {
    switch (selectedField) {
      case "Senha":
        return <AlterarSenhaAlert onClose={() => setShowAlert(false)} />;
      case "Email":
        return <AlterarEmailAlert onClose={() => setShowAlert(false)} />;
      case "Endereço":
        return <AlterarEnderecoAlert onClose={() => setShowAlert(false)} />;
      case "Nome da Loja":
        return <AlterarNomeLojaAlert onClose={() => setShowAlert(false)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <form action="">
        <div className={styles.conteinerPrincipal}>
          {/* Campo Email */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>Email</label>
              <span className={styles.fieldValue}>
                administrador@techlab.com.br
              </span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Email")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>

          {/* Campo Senha */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>Senha</label>
              <span className={styles.fieldValue}>
                Última atualização em 21 de Setembro de 2024
              </span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Senha")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>

          {/* Campo Nome da Loja */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>Nome da Loja</label>
              <span className={styles.fieldValue}>Tech Lab</span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Nome da Loja")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>

          {/* Campo Endereço */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>Endereço</label>
              <span className={styles.fieldValue}>
                Rua Comendador Francisco Baroni, 178 - Centro
              </span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Endereço")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>
        </div>
      </form>

      {showAlert && renderAlert()}
    </>
  );
}

export default PainelConfigGerente;
