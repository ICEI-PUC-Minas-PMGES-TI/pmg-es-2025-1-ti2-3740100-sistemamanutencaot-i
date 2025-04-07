import React from "react";
import "../assets/css/BannerLoja.css";
import ImagemBanner from "../assets/images/imagemCentral.png";

const CadastroLoja = () => {
  return (
    <div className="conteiner-principal">
      <img
        src={ImagemBanner}
        alt="Banner Manager.io"
        className="imagem-banner"
      />

      <header className="cabecalho">
        <h1 className="titulo-destaque">Cadastre sua Loja no Manager.io</h1>
      </header>

      <section className="conteudo">
        <p className="texto-destaque">
          Facilite a organização dos processos de sua empresa com essa
          aplicação!
        </p>
      </section>
    </div>
  );
};

export default CadastroLoja;
