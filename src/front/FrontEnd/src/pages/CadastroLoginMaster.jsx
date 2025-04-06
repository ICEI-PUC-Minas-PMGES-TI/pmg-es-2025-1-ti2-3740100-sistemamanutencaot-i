import React from "react";
import FormularioLoginMaster from "../components/FormularioLoginMaster.jsx";
import BannerLoginMaster from "../components/BannerLoginMaster.jsx";
import Logo from "../assets/images/logo.png";
import "../assets/css/CadastroLoginMaster.css";

function CadastroLoginMaster() {
  return (
    <>
      {/* Logo posicionada absolutamente no canto superior esquerdo, essa porcaria tava bugando toda hora */}
      <img src={Logo} alt="Logo da empresa" className="logo-topo" />
      
      {/* Container principal pra logo */}
      <div className="container-principal">
        {/* Container dos blocos de formulário e banner */}
        <div className="container-lado-a-lado">
          <div className="elemento-esquerda">
            <FormularioLoginMaster />
          </div>
          <div className="elemento-direita">
            <BannerLoginMaster />
          </div>
        </div>
      </div>
    </>
  );
}

export default CadastroLoginMaster;