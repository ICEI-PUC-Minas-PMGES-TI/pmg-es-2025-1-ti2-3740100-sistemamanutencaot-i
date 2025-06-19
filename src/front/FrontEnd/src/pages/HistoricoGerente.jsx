// NovaOrdemServicoPage.jsx
import React from "react";
import styles from "../assets/css/MainGerente.module.css";
import Historico from "../components/ReparoGerente/ReparoSemana.jsx";
import BarraLateral from "../components/BarraLateral.jsx";

const HistoricoGerente = () => {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cabecalho}>
        </div>

        <div className={styles.formularioContainer}>
          <Historico />
        </div>
      </main>
    </div>
  );
};

export default HistoricoGerente;
