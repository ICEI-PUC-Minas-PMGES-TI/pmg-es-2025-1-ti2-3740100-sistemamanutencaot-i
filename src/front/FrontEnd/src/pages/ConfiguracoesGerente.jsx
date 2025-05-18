// ConfiguracoesGerente.jsx
import React from "react";
import styles from "../assets/css/ConfiguracoesGerente.module.css";
import PainelConfigGerente from "../components/PainelConfigGerente";
import BarraLateral from "../components/BarraLateral";

const ConfiguracoesGerente = () => {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cabecalho}>
          <h1>Configurações</h1>
          <p>Gerente de Loja</p>
        </div>

        <div className={styles.painelContainer}>
          <div className={styles.tituloPainel}>
            <h2>Informações da Loja</h2>
          </div>
          <PainelConfigGerente />
        </div>

        <div className={styles.containerBotoes}>
          <button className={styles.botaoSalvar}>Salvar Alterações</button>
          <button className={styles.botaoExcluir}>Excluir Conta</button>
        </div>
      </main>
    </div>
  );
};

export default ConfiguracoesGerente;
