import React from "react";
import { useState } from "react";
import FormularioLoja from "./FormularioLoja.jsx";
import BannerLoja from "./BannerLoja.jsx";
import Logo from "../assets/images/logo.png";
import "../assets/css/CadastroLoja.css";

function CadastroLoja() {
  return (
    <div className="container-lado-a-lado">
      <img src={Logo} alt="Logo da empresa" className="logo-topo" />

      <div className="elemento-esquerda">
        <FormularioLoja />
      </div>
      <div className="elemento-direita">
        <BannerLoja />
      </div>
    </div>
  );
}

export default CadastroLoja;
