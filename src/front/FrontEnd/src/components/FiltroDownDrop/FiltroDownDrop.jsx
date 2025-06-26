import React, { useState } from "react";
import styles from "./FiltroDownDrop.module.css";
import filtrarIcon from "../../assets/images/Filtro1.png"; // Importar o ícone de filtro

const FiltroDownDrop = ({ opcoes, filtroSelecionado, aoSelecionarFiltro }) => {
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  const toggleDropdown = () => setMostrarDropdown(!mostrarDropdown);

  const selecionarOpcao = (valor) => {
    aoSelecionarFiltro(valor);
    setMostrarDropdown(false);
  };

  // Encontrar o label da opção selecionada
  const opcaoSelecionada = opcoes.find(op => op.valor === filtroSelecionado) || opcoes[0];

  return (
    <div className={styles.filtroContainer}>
      <div 
        className={styles.filtroSelector} 
        onClick={toggleDropdown}
      >
        <img 
          src={filtrarIcon} 
          alt="Filtrar" 
          className={styles.filtroIconImage}
        />
        <span className={styles.filtroTexto}>
          {opcaoSelecionada.label}
        </span>
        <i className={`fas fa-caret-down ${styles.filtroIcon} ${mostrarDropdown ? styles.rotated : ''}`}></i>
      </div>
      
      {mostrarDropdown && (
        <div className={styles.filtroDropdown}>
          {opcoes.map((opcao) => (
            <div
              key={opcao.valor}
              className={`${styles.filtroOption} ${filtroSelecionado === opcao.valor ? styles.selected : ''}`}
              onClick={() => selecionarOpcao(opcao.valor)}
            >
              {opcao.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FiltroDownDrop;