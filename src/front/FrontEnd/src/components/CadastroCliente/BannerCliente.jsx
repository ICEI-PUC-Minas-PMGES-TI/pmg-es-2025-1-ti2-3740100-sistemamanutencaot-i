import React from "react";
import styles from "./BannerCliente.module.css"; // <- CSS como módulo
import ImagemBanner from "../../assets/images/BannerCliente.png";

const CadastroCliente = () => {
  return (
    <div className={styles.containerPrincipal}>
      <img
        src={ImagemBanner}
        alt="Banner Técnico"
      />

    </div>
  );
};

export default CadastroCliente;
