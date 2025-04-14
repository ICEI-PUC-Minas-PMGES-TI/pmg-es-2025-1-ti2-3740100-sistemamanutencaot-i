import React from "react";
import BannerImage from "../assets/images/Imagem3DCentral.png";
import "../assets/css/BannerLoginMaster.css";

function BannerLoginMaster() {
  return (
    <div className="banner-container">
      <div className="banner-background">
        <img 
          src={BannerImage} 
          alt="Ilustração 3D do sistema" 
          className="banner-image"
        />
      </div>
      <div className="banner-text">
        <h2>Acelere seus processos de forma rápida!</h2>
        <p>Com nossa aplicação você terá uma visão geral da empresa de forma clara e simplificada!</p>
      </div>
    </div>
  );
}

export default BannerLoginMaster;
