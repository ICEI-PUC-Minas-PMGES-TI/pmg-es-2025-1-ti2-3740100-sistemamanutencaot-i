import React from "react";
import LogoImg from "../assets/images/logo.png";
import "../styles/CadastroLoginMaster.css";

function Logo() {
  return (
    <img src={LogoImg} alt="Logo da empresa" className="logo-topo" />
  );
}

export default Logo;
