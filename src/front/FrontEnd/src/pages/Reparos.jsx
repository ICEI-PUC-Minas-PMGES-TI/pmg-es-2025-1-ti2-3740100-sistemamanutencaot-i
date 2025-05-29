import React from "react";
import BarraLateral from "../components/BarraLateral";
import EstoqueTecnico from "../components/ReparosPendentes/ReparosPendentes.jsx";
import styles from "../assets/css/Reparos.module.css";

function Reparos() {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <div className={styles.conteudoPrincipal}>
        <EstoqueTecnico />
      </div>
    </div>
  );
}

export default Reparos;
