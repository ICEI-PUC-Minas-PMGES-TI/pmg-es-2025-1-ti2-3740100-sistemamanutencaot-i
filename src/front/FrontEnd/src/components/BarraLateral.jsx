import React from "react";
import styles from "../assets/css/BarraLateral.module.css"; // <- CSS como módulo
import Logo from "../assets/images/Logo simples.png";
import Box from "../assets/images/Caixa.png"
import User from "../assets/images/User.png"
import Folder from "../assets/images/Folder plus.png"
import Chave from "../assets/images/Chave.png"
import Saida from "../assets/images/Log out.png"
const BarraLateral = () => {
  return (
    <div className="mainContent">
      <div className={styles.containerPrincipal}>
        {/* Barra lateral */}
        <div className={styles.logo}>
            <img src={Logo} alt="Logo" />
        </div>

        <div className={styles.opcoes}>
            <img src={Box} alt="Caixa" />
            <img src={User} alt="User" />
            <img src={Folder} alt="Folder" />
            <img src={Chave} alt="Chave" />
        </div>

        <div className={styles.saida}>
            <img src={Saida} alt="Saida" />
        </div>
      </div>

      <div className="contentArea">
        {/* Conteúdo principal aqui */}
      </div>
    </div>
  );
};

export default BarraLateral;
