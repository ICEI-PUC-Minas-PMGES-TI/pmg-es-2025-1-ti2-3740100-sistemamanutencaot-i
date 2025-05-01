import React from "react";
import styles from "../assets/css/BannerLoja.module.css";
import ImagemBanner from "../assets/images/imagemCentral.png";

const BannerLoja = () => {
  return (
    <div className={styles.conteinerPrincipal}>
      <img
        src={ImagemBanner}
        alt="Banner Manager.io"
        className={styles.imagemBanner}
      />

      <header className={styles.tituloDestaque}>
        <h1 className={styles.textoDestaque}>
          Cadastre sua Loja no Manager.io
        </h1>
      </header>

      <section className={styles.tituloDestaque}>
        <p className={styles.textoDestaque}>
          Facilite a organização dos processos de sua empresa com essa aplicação!
        </p>
      </section>
    </div>
  );
};

export default BannerLoja;
