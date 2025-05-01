import React from "react";
import FormularioTecnico from "../components/FomularioTecnico.jsx";
import BannerTecnico from "../components/BannerTecnico.jsx";
import "../assets/css/CadastroTecnico.css";

function CadastroTecnico() {
  return (
    <div className="container-lado-a-lado">

      <div className="elemento-esquerda">
        <BannerTecnico />
      </div>
      <div className="elemento-direita">
        <FormularioTecnico />
      </div>
    </div>
  );
}

export default CadastroTecnico;
