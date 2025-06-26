import React from 'react';

const Filtro = ({ filtroSelecionado, selecionarFiltro }) => {
  const filtros = [
    { label: 'Todos', cor: '#0a1a4f' },
    { label: 'Pendentes', cor: '#f9a825' },
    { label: 'Aceitos', cor: '#43a047' },
    { label: 'Rejeitados', cor: '#e53935' },
  ];

  return (
    <div className="filter-dropdown">
      <ul>
        {filtros.map((filtro) => (
          <li 
            key={filtro.label}
            className={`filter-option ${filtroSelecionado === filtro.label ? 'bg-gray-100' : ''}`}
            onClick={() => selecionarFiltro(filtro.label)}
          >
            <span 
              className="status-indicator" 
              style={{ backgroundColor: filtro.cor }}
            ></span>
            {filtro.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtro;