import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/images/logo.png";



const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleRedirect = (role) => {
    if (role === "gerente") {
      window.location.href = "/cadastro-loja";
    } else if (role === "tecnico") {
      window.location.href = "/cadastro-tecnico";
    }
  };

  return (
    <>
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

        <button className="cta-button" onClick={openModal}>
          Juntar-se
        </button>
      </header>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Entrar como</h2>
            <button onClick={() => handleRedirect("gerente")}>Gerente</button>
            <button onClick={() => handleRedirect("tecnico")}>Técnico</button>
            <button className="close-btn" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
