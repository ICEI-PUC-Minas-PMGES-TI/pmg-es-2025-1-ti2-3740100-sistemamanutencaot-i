import React, { useState } from "react";
import FormularioTecnico from "../components/FomularioTecnico.jsx";
import BannerTecnico from "../components/BannerTecnico.jsx";
import BarraLateral from "../components/BarraLateral.jsx";
import styles from "../assets/css/CadastroTecnico.module.css";

function CadastroTecnico() {
  const [cadastrado, setCadastrado] = useState(false);

  // Função chamada ao finalizar cadastro
  const handleCadastroFinalizado = () => {
    setCadastrado(true);
  };

  return (
    <div className={styles.containerGeral}>
      {/* Só mostra a barra lateral se já cadastrou */}
      {cadastrado && <BarraLateral />}

      <div className={styles.containerHorizontal}>
        <div className={styles.elementoEsquerdo}>
          <BannerTecnico />
        </div>
        <div className={styles.elementoDireito}>
          {/* Passa a função para o formulário */}
          <FormularioTecnico onCadastroFinalizado={handleCadastroFinalizado} />
        </div>
      </div>
    </div>
  );
}

export default CadastroTecnico;
