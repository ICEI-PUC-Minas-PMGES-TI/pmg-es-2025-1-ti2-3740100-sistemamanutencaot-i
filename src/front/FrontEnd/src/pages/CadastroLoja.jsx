import React from "react";
import FormularioLoja from "../components/FormularioLoja.jsx";
import BannerLoja from "../components/BannerLoja.jsx";
import Logo from "../assets/images/logo.png";
import styles from "../assets/css/CadastroLoja.module.css";

function CadastroLoja() {
  return (
    <div className={styles.containerHorizontal}>
      <img src={Logo} alt="Logo da empresa" className={styles.logoTopo} />

      <div className={styles.elementoEsquerdo}>
        <FormularioLoja />
      </div>
      <div className={styles.elementoDireito}>
        <BannerLoja />
      </div>
    </div>
  );
}

export default CadastroLoja;