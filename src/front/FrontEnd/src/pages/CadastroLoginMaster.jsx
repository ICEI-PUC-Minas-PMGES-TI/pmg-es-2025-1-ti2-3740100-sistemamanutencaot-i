import React from "react";
import FormularioLoginMaster from "../components/FormularioLoginMaster.jsx";
import BannerLoginMaster from "../components/BannerLoginMaster.jsx";
import Logo from "../components/Logo";
import "../assets/css/CadastroLoginMaster.css";

function CadastroLoginMaster() {
  return (
    <div className="tela-principal">
      <div className="conteudo-lado-a-lado">
        {/* Bloco esquerdo */}
        <div className="lado-esquerdo">
          
          <div className="espaco-logo">  
            <Logo />
          </div>
          
          <FormularioLoginMaster />
        </div>

        {/* Bloco direito */}
        <div className="lado-direito">
          <BannerLoginMaster />
        </div>
      </div>
    </div>
  );
}

export default CadastroLoginMaster;
