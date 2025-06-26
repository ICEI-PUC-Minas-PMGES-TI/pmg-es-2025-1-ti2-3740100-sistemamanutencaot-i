// NovaOrdemServicoPage.jsx
import React from "react";
import styles from "../assets/css/RequisicaoPecaGerente.module.css";
import TelaLa from "../components/RequisicaoDePecas/Index.jsx";
import BarraLateral from "../components/BarraLateral.jsx";

const RequisicaoPecaGerente = () => {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cabecalho}>
        </div>

        <div className={styles.formularioContainer}>
          <TelaLa/>
        </div>
      </main>
    </div>
  );
};

export default RequisicaoPecaGerente;
