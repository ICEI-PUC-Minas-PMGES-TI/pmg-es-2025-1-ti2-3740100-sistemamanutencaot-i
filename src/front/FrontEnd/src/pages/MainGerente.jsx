// NovaOrdemServicoPage.jsx
import React from "react";
import styles from "../assets/css/MainGerente.module.css";
import TelaGerente from "../components/HomeGerente/HomeGerente.jsx";
import BarraLateral from "../components/BarraLateralGerente.jsx";

const MainGerente = () => {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cabecalho}>
        </div>

        <div className={styles.formularioContainer}>
          <TelaGerente />
        </div>
      </main>
    </div>
  );
};

export default MainGerente;
