import React from "react";
import FormularioTecnico from "../components/FomularioTecnico.jsx";
import BannerTecnico from "../components/BannerTecnico.jsx";
import BarraLateral from "../components/BarraLateral.jsx";
import styles from "../assets/css/CadastroTecnico.module.css";

function CadastroTecnico() {
  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <div className={styles.containerHorizontal}>
        <div className={styles.elementoEsquerdo}>
          <BannerTecnico />
        </div>
        <div className={styles.elementoDireito}>
          <FormularioTecnico />
        </div>
      </div>
    </div>
  );
}

export default CadastroTecnico;
