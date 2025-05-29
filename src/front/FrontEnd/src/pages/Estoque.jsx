// src/pages/GerenciamentoEstoque.jsx
import React from "react";
import BarraLateral from "../components/BarraLateral";
import EstoqueTecnico from "../components/Estoque/Estoque.jsx";
import styles from "../assets/css/Estoque.module.css";

function GerenciamentoEstoque() {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <div className={styles.conteudoPrincipal}>
        <EstoqueTecnico />
      </div>
    </div>
  );
}

export default GerenciamentoEstoque;
