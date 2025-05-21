// NovaOrdemServicoPage.jsx
import React from "react";
import styles from "../assets/css/OrdemServico.module.css";
import NovaOrdemServico from "../components/NovaOrdemServico/NovaOrdemServico.jsx";
import BarraLateral from "../components/BarraLateral.jsx";

const NovaOrdemServicoPage = () => {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cabecalho}>
        </div>

        <div className={styles.formularioContainer}>
          <NovaOrdemServico />
        </div>
      </main>
    </div>
  );
};

export default NovaOrdemServicoPage;
