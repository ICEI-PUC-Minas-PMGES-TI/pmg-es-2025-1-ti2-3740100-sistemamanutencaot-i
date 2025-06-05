import React from "react";
import styles from "./ReparoCard.module.css"; // Importação modificada
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
    <article className={styles['card-reparo']} aria-labelledby={`card-${index}-title`}>
      <header className={styles['card-header']}>
        <div className={styles['card-title']}>
          <div className={styles['device-icon-container']}>
            <img src={deviceIcon} alt={deviceAlt} className={styles['device-icon']} />
          </div>
          <div>
            <p id={`card-${index}-title`} className={styles.nome}>
              {nome}
            </p>
            <p className={styles.servico}>Serviço #{id}</p>
          </div>
        </div>
        <div
          className={styles['status-dot']}
          style={{
            backgroundColor: statusCor,
            boxShadow: `0 0 8px ${statusCor}`,
          }}
          aria-label={`Status: ${status}`}
        />
      </header>

      <div className={styles['card-body']}>
        <p>
          Prazo: <span className={styles['prazo-text']}>{prazo}</span>
        </p>
        <p>
          Status: <span className={styles['status-text']}>{status}</span>
        </p>

        <div className={styles['sintomas-container']}>
          <p className={styles['sintomas-titulo']}>
            <strong>Sintomas:</strong>
          </p>
          <p className={styles['sintomas-texto']}>{sintomas || "Nada encontrado..."}</p>
        </div>
      </div>

      <button
        className={styles['btn-atribuir']}
        type="button"
        aria-label={`Atribuir reparo para ${nome}`}
      >
        Atribuir Reparo
      </button>
    </article>
  );
};

export default ReparoCard;