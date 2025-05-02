import React from "react";
import styles from "../assets/css/ConfiguracoesGerente.module.css";
import PainelConfigGerente from "../components/PainelConfigGerente";
const ConfiguracoesGerente = () => {
  return (
    <>
      <div className={styles.titulo}>
        <h1>Configurações</h1>
        <span>Gerente de Loja</span>
      </div>

      <div className={styles.container}>
        <h2> Informações da Loja </h2>
      </div>
      <div className={styles.painel}>
        <PainelConfigGerente />
      </div>
      <div className={styles.containerBttons}>
        <button className={styles.bttSalvar}>
          Salvar Alterações
        </button>
        <button className={styles.bttExcluir}>
          Excluir Conta
        </button>
      </div>
    </>
  );
};

export default ConfiguracoesGerente;
