import React from "react";
import styles from "../assets/css/BarraLateral.module.css"; // <- CSS como módulo
import Logo from "../components/Logo.jsx";
import Box from "../assets/images/Caixa.png"
const BarraLateral = () => {
  return (
    <div className={styles.containerPrincipal}>
        <div className={styles.logo}>
            <Logo />
        </div>

        <div className={styles.opcoes}>
            <img src={Box} alt="Imagem caixa" style={{ width: "100px", height: "100px" }} />
        </div>
    </div>
  );
};

export default BarraLateral;
