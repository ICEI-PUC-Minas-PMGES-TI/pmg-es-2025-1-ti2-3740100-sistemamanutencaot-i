import React, { useState } from "react";
import "../assets/css/BannerLoja.css"; // Importe o arquivo CSS
import ImagemBanner from "../assets/images/imagemCentral.png"; // Importe a imagem do banner

const CadastroLoja = () => {
  return (
    <div className="container">
      <img
        src= {ImagemBanner}
        alt="Banner Manager.io"
        className="banner-image"
      />

      <header className="header">
        <h1 className="title">Cadastre sua Loja no Manager.io</h1>
      </header>

      <section className="content">
        <p className="highlight-text">
          Facilite a organização dos processos de sua empresa com essa
          aplicação!
        </p>
      </section>
    </div>
  );
};

export default CadastroLoja;
