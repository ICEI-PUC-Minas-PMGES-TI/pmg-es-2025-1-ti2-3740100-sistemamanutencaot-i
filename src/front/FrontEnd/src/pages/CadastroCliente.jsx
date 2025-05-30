import React from "react";
import FormularioCliente from "../components/CadastroCliente/FormularioCliente.jsx";
import BannerCliente from "../components/CadastroCliente/BannerCliente.jsx";
import BarraLateral from "../components/BarraLateral.jsx";
import styles from "../assets/css/CadastroCliente.module.css"

function CadastroCliente() {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <div className={styles.containerHorizontal}>
        <div className={styles.elementoEsquerdo}>
          <BannerCliente />
        </div>
        <div className={styles.elementoDireito}>
          <FormularioCliente />
        </div>
      </div>
    </div>
  );
}

export default CadastroCliente;
