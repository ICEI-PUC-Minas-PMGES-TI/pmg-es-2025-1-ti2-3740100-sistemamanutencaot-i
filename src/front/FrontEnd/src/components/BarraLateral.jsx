// BarraLateral.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/BarraLateral.css";

// Ícones
import Logo from "../assets/images/Logo simples.png";
import Box from "../assets/images/Caixa.png";
import User from "../assets/images/User.png";
import Folder from "../assets/images/Folder plus.png";
import Chave from "../assets/images/Chave.png";
import Saida from "../assets/images/Log out.png";
import Configuracoes from "../assets/images/config.png";
import Historico from "../assets/images/historico.png";

const BarraLateral = () => {
  const menuItems = [
    { icon: Box, text: "Estoque", path: "/inventario" },
    { icon: User, text: "Usuários", path: "/cadastro-tecnico" },
    { icon: Folder, text: "Ordem de Serviço", path: "/documentos" },
    { icon: Chave, text: "Reparos", path: "/ferramentas" },
    { icon: Configuracoes, text: "Configurações", path: "/configuracoes-gerente"},
    { icon: Historico, text: "Historico de Reparos", path: "/ferramentas" },
  ];

  return (
    <nav className="sidebar">
      <Link to="/home-tecnico" className="sidebar-logo">
        <img src={Logo} alt="Logo" />
        <span className="sidebar-logo-text">Manager.io</span>
      </Link>

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <Link to={item.path} key={index} className="sidebar-item">
            <img src={item.icon} alt={item.text} />
            <span className="sidebar-tooltip">{item.text}</span>
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <Link to="/landing-page" className="sidebar-item">
          <img src={Saida} alt="Sair" />
          <span className="sidebar-tooltip">Sair</span>
        </Link>
      </div>
    </nav>
  );
};

export default BarraLateral;
