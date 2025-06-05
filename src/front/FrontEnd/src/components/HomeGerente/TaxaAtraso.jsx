import React from 'react';
import './TaxaAtraso.css';

const TaxaAtraso = () => {
  return (
    <div className="taxa-atraso-container">
      <div className="widget-container">
        {/* Cabeçalho */}
        <header className="widget-header">
          <button aria-label="Voltar" className="nav-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <h1 className="widget-title">Taxa de Atraso</h1>
          <button aria-label="Avançar" className="nav-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </header>
        
        {/* Conteúdo Principal */}
        <main className="widget-content">
          <div className="chart-container">
            <div className="axis-labels">
              <span>0%</span>
              <span>10%</span>
              <span>20%</span>
            </div>
            
            <div className="bars-container">
              {/* Barras do gráfico */}
              {[40, 70, 40, 60, 40, 50, 40, 80, 40, 60].map((height, index) => (
                <div 
                  key={index}
                  className={`bar ${index === 7 ? 'highlighted-bar' : ''}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            
            {/* Linha de tendência SVG */}
            <svg 
              className="trend-line" 
              viewBox="0 0 280 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <polyline
                points="10,50 30,20 50,40 70,30 90,40 110,30 130,40 150,10 170,50 190,30"
                stroke="#0B3BFF"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="190" cy="30" r="5" fill="#0B3BFF" />
            </svg>
            
            {/* Balão de destaque */}
            <div className="highlight-bubble">
              <div className="emoji">😊</div>
              <div className="bubble-content">
                <div className="improvement">5% melhor</div>
                <div>22 de Dezembro</div>
              </div>
            </div>
          </div>
          
          {/* Informação de resumo */}
          <div className="summary">
            <span className="percentage">10%</span>
            <p className="description">
              A taxa de atraso está atualmente 5% melhor que o mês passado
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaxaAtraso;