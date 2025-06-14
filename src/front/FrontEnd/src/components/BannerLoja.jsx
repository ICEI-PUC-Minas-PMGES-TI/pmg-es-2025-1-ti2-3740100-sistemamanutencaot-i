import React from "react";
import styles from "../assets/css/BannerLoja.module.css";
import ImagemBanner from "../assets/images/imagemCentral.png";

const BannerLoja = () => {
  return (
    <div className={styles.conteinerPrincipal}>

      <h1 className={styles.tituloDestaque}>
        Cadastre sua Loja no Manager.io
      </h1>

      <img
        src={ImagemBanner}
        alt="Banner Manager.io"
        className={styles.imagemBanner}
      />

      <p className={styles.textoDestaque}>
        Facilite a organização dos processos de sua empresa com essa aplicação!
      </p>
    </div>
  );
};

export default BannerLoja;
