import React, { useState } from 'react';
import './HomeGerente.css';
import ReposicaoEstoque from './ReposicaoEstoque';
import TaxaAtraso from './TaxaAtraso';
import VendasDestaque from './VendasDestaque';

const HomeGerente = () => {
  const [carrosselIndex, setCarrosselIndex] = useState(0);
  
  const componentesCarrossel = [
    <VendasDestaque key="vendas" />,
    <ReposicaoEstoque key="reposicao" />,
    <TaxaAtraso key="atraso" />
  ];

  const titulosCarrossel = [
    "Vendas Destaque",
    "Reposição Estoque",
    "Taxa de Atraso"
  ];

  const avancarCarrossel = () => {
    setCarrosselIndex((prev) => (prev + 1) % componentesCarrossel.length);
  };

  const voltarCarrossel = () => {
    setCarrosselIndex((prev) => 
      prev === 0 ? componentesCarrossel.length - 1 : prev - 1
    );
  };

  return (
    <div className="home-gerente">
      <main className="main-container">
        <header>
          <h1 className="header-title">
            Olá, Alexandre
          </h1>
          <p className="header-subtitle">
            Gerente de Loja
          </p>
          <hr className="header-divider" />
        </header>
        
        <section aria-label="Dashboard Title" className="dashboard-title-section">
          <h2 className="dashboard-title">
            DashBoard
          </h2>
        </section>
        
        <section aria-label="Dashboard summary cards" className="summary-cards">
          <article className="summary-card">
            <p className="card-label">
              Total de Vendas
            </p>
            <p className="card-value">
              R$<span>10.100,75</span>
            </p>
            <i aria-hidden="true" className="fas fa-info-circle card-info-icon" title="Informação"></i>
          </article>
          
          <article className="summary-card">
            <p className="card-label">
              Reparos
            </p>
            <p className="card-value">
              21
            </p>
            <i aria-hidden="true" className="fas fa-info-circle card-info-icon" title="Informação"></i>
          </article>
          
          <article className="summary-card">
            <p className="card-label">
              Ticket Médio
            </p>
            <p className="card-value">
              R$<span>147,50</span>
            </p>
            <i aria-hidden="true" className="fas fa-info-circle card-info-icon" title="Informação"></i>
          </article>
          
          <article className="summary-card">
            <p className="card-label">
              Taxa de Atrasos
            </p>
            <p className="card-value">
              10%
            </p>
            <i aria-hidden="true" className="fas fa-info-circle card-info-icon" title="Informação"></i>
          </article>
          
          <div className="cycle-selector">
            <i className="fas fa-calendar-alt calendar-icon"></i>
            <label className="sr-only" htmlFor="ciclo">
              Ciclo
            </label>
            <select 
              aria-label="Ciclo 2025" 
              className="cycle-select" 
              id="ciclo" 
              name="ciclo"
            >
              <option selected value="2025">2025</option>
            </select>
            <span className="cycle-label">
              Ciclo
            </span>
          </div>
        </section>
        
        <section aria-label="Sales chart section" className="chart-section">
          <h3 className="chart-title">
            Maio
          </h3>
          <div className="chart-container">
            <div className="chart-wrapper">
              <svg 
                aria-label="Gráfico de barras de vendas em maio" 
                fill="none" 
                height="180" 
                role="img" 
                viewBox="0 0 400 180" 
                width="100%" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="40" y1="10" y2="160" />
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1="160" y2="160" />
                <text dominantBaseline="middle" fill="#94a3b8" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="start" x="5" y="160">
                  R$ 0,00
                </text>
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1="130" y2="130" />
                <text dominantBaseline="middle" fill="#94a3b8" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="start" x="5" y="130">
                  R$ 600,00
                </text>
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1="100" y2="100" />
                <text dominantBaseline="middle" fill="#94a3b8" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="start" x="5" y="100">
                  R$ 1.200,00
                </text>
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1="70" y2="70" />
                <text dominantBaseline="middle" fill="#94a3b8" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="start" x="5" y="70">
                  R$ 1.800,00
                </text>
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1="40" y2="40" />
                <text dominantBaseline="middle" fill="#94a3b8" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="start" x="5" y="40">
                  R$ 2.400,00
                </text>
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1="10" y2="10" />
                <text dominantBaseline="middle" fill="#94a3b8" fontFamily="Arial, sans-serif" fontSize="10" textAnchor="start" x="5" y="10">
                  R$ 3.000,00
                </text>
                <rect fill="#0a1a4f" height="40" rx="3" ry="3" width="20" x="60" y="120" />
                <rect fill="#0a1a4f" height="120" rx="3" ry="3" width="20" x="110" y="40" />
                <rect fill="#0a1a4f" height="40" rx="3" ry="3" width="20" x="160" y="120" />
                <rect fill="#0a1a4f" height="80" rx="3" ry="3" width="20" x="210" y="80" />
                <rect fill="#0a1a4f" height="60" rx="3" ry="3" width="20" x="260" y="100" />
                <rect fill="#0a1a4f" height="120" rx="3" ry="3" width="20" x="310" y="40" />
                <rect fill="#0a1a4f" height="10" rx="3" ry="3" width="20" x="360" y="150" />
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="70" y="175">
                  10
                </text>
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="120" y="175">
                  11
                </text>
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="170" y="175">
                  12
                </text>
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="220" y="175">
                  13
                </text>
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="270" y="175">
                  14
                </text>
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="320" y="175">
                  15
                </text>
                <text fill="#0a1a4f" fontFamily="Arial, sans-serif" fontSize="12" textAnchor="middle" x="370" y="175">
                  16
                </text>
              </svg>
            </div>
            
            <div className="carrossel-container">
              <header className="carrossel-header">
                <button 
                  aria-label="Anterior" 
                  className="nav-button"
                  onClick={voltarCarrossel}
                >
                  &lt;
                </button>
                <h4 className="carrossel-title">
                  {titulosCarrossel[carrosselIndex]}
                </h4>
                <button 
                  aria-label="Próximo" 
                  className="nav-button"
                  onClick={avancarCarrossel}
                >
                  &gt;
                </button>
              </header>
              
              <div className="carrossel-content">
                {componentesCarrossel[carrosselIndex]}
              </div>
            </div>
          </div>
          <i aria-hidden="true" className="fas fa-calendar-alt chart-calendar-icon" />
        </section>
      </main>
    </div>
  );
};

export default HomeGerente;