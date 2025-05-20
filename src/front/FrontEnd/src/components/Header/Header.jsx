import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";

const Header = () => {

  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

      <nav className="nav-links">
        <a href="#">Sobre</a>
        <a href="#">Serviços</a>
        <a href="#">Tecnologias</a>
        <a href="#">Como começar?</a>
      </nav>

      <button className="cta-button">Juntar-se</button>
    </header>
  );
};

export default Header;
