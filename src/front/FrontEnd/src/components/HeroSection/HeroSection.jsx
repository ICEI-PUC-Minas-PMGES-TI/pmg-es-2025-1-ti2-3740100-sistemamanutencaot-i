import React from "react";
import "./HeroSection.css";
import Decima from "../../assets/images/Landingpage1.png"
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
   const navigate = useNavigate();

  const handleEntrarClick = () => {
    navigate("/login");
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Assuma <span className="title-black">o Controle</span>
          <br />
          da sua <span className="title-blue">Loja</span>
        </h1>
        <p className="hero-description">
          Gerencie reparos, clientes e técnicos em um só lugar.
          <br />
          Com uma plataforma simples e intuitiva, você economiza tempo, evita
          erros e tem total controle.
        </p>
        <div className="hero-cta">                          
          <button className="cta-button" onClick={handleEntrarClick}>
            ENTRAR
          </button>   
          <svg
            className="arrow-icon"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M9 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src={Decima} alt="Ilustração de trabalho" className="hero-image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
