// src/pages/GerenciamentoUsuarios.jsx
import React from "react";
import BarraLateral from "../components/BarraLateral";
import UserManagement from "../components/Usuarios/Usuarios.jsx";
import styles from "../assets/css/Usuarios.module.css";

function GerenciamentoUsuarios() {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <div className={styles.conteudoPrincipal}>
        <UserManagement />
      </div>
    </div>
  );
}

export default GerenciamentoUsuarios;
