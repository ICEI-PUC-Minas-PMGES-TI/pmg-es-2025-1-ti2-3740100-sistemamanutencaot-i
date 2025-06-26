import React, { useState } from 'react';
import styles from './Cabecalho.module.css';

const Cabecalho = ({ filtroSelecionado, setFiltroSelecionado }) => {
  const [mostrarFiltro, setMostrarFiltro] = useState(false);

  const selecionarFiltro = (filtro) => {
    setFiltroSelecionado(filtro);
    setMostrarFiltro(false);
  };

  return (
    <header className={styles.header}>
      <div>
        <h1 className={styles.screenHeader}>Requisições de peças</h1>
        <p className={styles.screenSubtitle}>Técnico de Campo</p>
      </div>
      
      <div className={styles.filterContainer}>
        <span className={styles.filterLabel}>Filtrar por:</span>
        
        <div 
          className={styles.filterSelector}
          onClick={() => setMostrarFiltro(!mostrarFiltro)}
        >
          <span className={styles.filterText}>
            <span className={`${styles.statusIndicator} ${
              filtroSelecionado === 'Pendentes' ? styles.pendente : 
              filtroSelecionado === 'Aceitos' ? styles.aceito : 
              filtroSelecionado === 'Rejeitados' ? styles.rejeitado : styles.todos
            }`}></span>
            {filtroSelecionado}
          </span>
          <i className={`fas fa-caret-down ${styles.filterIcon} ${mostrarFiltro ? styles.rotated : ''}`}></i>
        </div>
        
        {mostrarFiltro && (
          <div className={styles.filterDropdown}>
            <div 
              className={`${styles.filterOption} ${filtroSelecionado === 'Todos' ? styles.selected : ''}`}
              onClick={() => selecionarFiltro('Todos')}
            >
              <span className={`${styles.statusIndicator} ${styles.todos}`}></span>
              Todos
            </div>
            <div 
              className={`${styles.filterOption} ${filtroSelecionado === 'Pendentes' ? styles.selected : ''}`}
              onClick={() => selecionarFiltro('Pendentes')}
            >
              <span className={`${styles.statusIndicator} ${styles.pendente}`}></span>
              Pendentes
            </div>
            <div 
              className={`${styles.filterOption} ${filtroSelecionado === 'Aceitos' ? styles.selected : ''}`}
              onClick={() => selecionarFiltro('Aceitos')}
            >
              <span className={`${styles.statusIndicator} ${styles.aceito}`}></span>
              Aceitos
            </div>
            <div 
              className={`${styles.filterOption} ${filtroSelecionado === 'Rejeitados' ? styles.selected : ''}`}
              onClick={() => selecionarFiltro('Rejeitados')}
            >
              <span className={`${styles.statusIndicator} ${styles.rejeitado}`}></span>
              Rejeitados
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Cabecalho;