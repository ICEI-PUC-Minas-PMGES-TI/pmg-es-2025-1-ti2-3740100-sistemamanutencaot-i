import React from "react";
import styles from "../assets/css/BannerTecnico.module.css"; // <- CSS como módulo
import ImagemBanner from "../assets/images/Group 4.png";

const CadastroTecnico = () => {
  return (
    <div className={styles.containerPrincipal}>
      <img
        src={ImagemBanner}
        alt="Banner Técnico"
      />
    </div>
  );
};

export default CadastroTecnico;
