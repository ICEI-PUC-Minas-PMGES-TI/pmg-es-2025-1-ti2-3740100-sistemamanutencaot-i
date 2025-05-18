import React from "react";
import styles from "../assets/css/Alert.module.css"; // CSS do alerta

const Alert = ({ field, onClose }) => {
  return (
    <div className={styles.alertOverlay}>
      <div className={styles.alertContent}>
        <h3>Editar {field}</h3>

        <div className={styles.inputGroup}>
          <label>Novo valor:</label>
          <input type="text" autoFocus />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            type="button"
            className={styles.confirmButton}
            onClick={onClose}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
