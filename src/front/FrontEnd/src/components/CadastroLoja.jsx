import React from "react";
import { useState } from "react";
import FormularioLoja from "./FormularioLoja.jsx";
import BannerLoja from "./BannerLoja.jsx"
import "../assets/css/CadastroLoja.css"; // Importe o arquivo CSS

function CadastroLoja() {
  return (
    <div className="container-lado-a-lado">
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
