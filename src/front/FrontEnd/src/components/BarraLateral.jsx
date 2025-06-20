// BarraLateral.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/BarraLateral.css";

// Ícones
import Logo from "../assets/images/Logo simples.png";
import Box from "../assets/images/Caixa.png";
import User from "../assets/images/User.png";
import Folder from "../assets/images/Folder plus.png";
import Home from "../assets/images/home.png";
import Saida from "../assets/images/Log out.png";
import Loja from "../assets/images/loja.png";
import Info from "../assets/images/info.png";

const BarraLateral = () => {
  const tipoUsuario = localStorage.getItem("tipoUsuario");

  const menuItemsTecnico = [
    { icon: Home, text: "Home", path: "/home-tecnico" },
    { icon: User, text: "Usuários", path: "/usuarios" },
    { icon: Info, text: "Informações Perfil", path: "/configuracoes" },
    { icon: Folder, text: "Ordem de Serviço", path: "/ordens-servico" },
  ];

  const menuItemsGerente = [
    { icon: Home, text: "Home", path: "/home-gerente" },
    { icon: Box, text: "Estoque", path: "/estoque" },
    { icon: User, text: "Clientes", path: "/usuarios" },
    { icon: Folder, text: "Ordem de Serviço", path: "/ordens-servico" },
    { icon: Loja, text: "Informações Loja", path: "/configuracoes" },
  ];

  const menuItems = tipoUsuario === "tecnico" ? menuItemsTecnico : menuItemsGerente;

  return (
    <nav className="sidebar">
      <Link to={tipoUsuario === "tecnico" ? "/home-tecnico" : "/home-gerente"} className="sidebar-logo">
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
