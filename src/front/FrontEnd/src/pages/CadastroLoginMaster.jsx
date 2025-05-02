import React from "react";
import FormularioLoginMaster from "../components/FormularioLoginMaster.jsx";
import BannerLoginMaster from "../components/BannerLoginMaster.jsx";
import Logo from "../components/Logo";
import "../assets/css/CadastroLoginMaster.css";

function CadastroLoginMaster() {
  return (
    <div className="container-fluid container-principal">
      <div className="row no-gutters container-lado-a-lado">

        {/* Bloco esquerdo */}
        <div className="col-12 col-lg-6 elemento-esquerda d-flex flex-column align-items-center justify-content-center p-4">
  <Logo />
  <div className="logo-spacing"></div> {/* <-- espaço entre logo e formulário */}
  <div className="titulo-bloco text-center mb-4">
    <p className="subtitulo-formulario"></p>
  </div>
  <FormularioLoginMaster />
</div>

        {/* Bloco direito */}
        <div className="col-12 col-lg-6 elemento-direita d-flex align-items-center justify-content-center p-4">
          <BannerLoginMaster />
        </div>

      </div>
    </div>
  );
}

export default CadastroLoginMaster;
