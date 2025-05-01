import React from "react";
import "../assets/css/BannerTecnico.css";
import ImagemBanner from "../assets/images/Group 4.png";

const CadastroTecnico = () => {
  return (
    <div className="conteiner-principal">
      <img
        src={ImagemBanner}
        alt="Banner Tecnico"
      />
    </div>
  );
};

export default CadastroTecnico;
