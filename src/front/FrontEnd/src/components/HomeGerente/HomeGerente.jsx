import React, { useState } from 'react';
import './HomeGerente.css';
import ReposicaoEstoque from './ReposicaoEstoque';
import TaxaAtraso from './TaxaAtraso';
import VendasDestaque from './VendasDestaque';

// Banco de dados mockado centralizado
const mockData = {
  usuario: {
    nome: "Alexandre",
    cargo: "Gerente de Loja"
  },
  dashboard: {
    cartoes: [
      { id: 1, label: 'Total de Vendas', value: 'R$ 10.100,75' },
      { id: 2, label: 'Reparos', value: '21' },
      { id: 3, label: 'Ticket Médio', value: 'R$ 147,50' },
      { id: 4, label: 'Taxa de Atrasos', value: '10%' }
    ],
    vendas: [
      { dia: 24, valor: 3800 },
      { dia: 25, valor: 4100 },
      { dia: 26, valor: 4400 },
      { dia: 27, valor: 4000 },
      { dia: 28, valor: 4300 },
      { dia: 29, valor: 4600 },
      { dia: 30, valor: 4200 },
      { dia: 31, valor: 4800 }
    ],
    carrossel: [
      { titulo: "Vendas Destaque", componente: <VendasDestaque key="vendas" /> },
      { titulo: "Reposição Estoque", componente: <ReposicaoEstoque key="reposicao" /> },
      { titulo: "Taxa de Atraso", componente: <TaxaAtraso key="atraso" /> }
    ]
  }
};

const HomeGerente = () => {
  const [carrosselIndex, setCarrosselIndex] = useState(0);
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const { usuario, dashboard } = mockData;
  
  // Constantes para o gráfico
  const ALTURA_GRAFICO = 300;
  const VALOR_MAXIMO = 5000;
  
  // Calcula altura da barra proporcional ao valor
  const calcularAlturaBarra = (valor) => (valor / VALOR_MAXIMO) * (ALTURA_GRAFICO - 40);

  // Navegação do carrossel
  const avancarCarrossel = () => setCarrosselIndex((prev) => (prev + 1) % dashboard.carrossel.length);
  const voltarCarrossel = () => setCarrosselIndex((prev) => prev === 0 ? dashboard.carrossel.length - 1 : prev - 1);

  // Tooltips para os cartões
  const tooltips = {
    1: 'Total de vendas realizadas neste ciclo',
    2: 'Quantidade de reparos realizados',
    3: 'Valor médio por venda (total de vendas / número de vendas)',
    4: 'Percentual de pedidos entregues com atraso'
  };

  return (
    <div className="home-gerente">
      <main className="main-container">
        <header>
          <h1 className="header-title">Olá, {usuario.nome}</h1>
          <p className="header-subtitle">{usuario.cargo}</p>
          <hr className="header-divider" />
        </header>
        
        <section className="dashboard-title-section">
          <h2 className="dashboard-title">DashBoard</h2>
        </section>
        
        <section className="summary-cards">
          {dashboard.cartoes.map(cartao => (
            <article key={cartao.id} className="summary-card">
              <p className="card-label">{cartao.label}</p>
              <p className="card-value">{cartao.value}</p>
              <i 
                className="fas fa-info-circle card-info-icon" 
                title="Informação"
                onMouseEnter={() => setHoveredCardId(cartao.id)}
                onMouseLeave={() => setHoveredCardId(null)}
              ></i>
              
              {hoveredCardId === cartao.id && (
                <div className="card-tooltip">
                  {tooltips[cartao.id]}
                </div>
              )}
            </article>
          ))}
          
          <div className="cycle-selector">
            <i className="fas fa-calendar-alt calendar-icon"></i>
            <select className="cycle-select">
              <option value="2025">2025</option>
            </select>
            <span className="cycle-label">Ciclo</span>
          </div>
        </section>
        
        <section className="chart-section">
          <h3 className="chart-title">Maio</h3>
          <div className="chart-container">
            <div className="chart-wrapper">
              <svg 
                height={ALTURA_GRAFICO} 
                viewBox={`0 0 400 ${ALTURA_GRAFICO}`} 
                width="100%"
              >
                {/* Eixos */}
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="40" y1="20" y2={ALTURA_GRAFICO - 40} />
                <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1={ALTURA_GRAFICO - 40} y2={ALTURA_GRAFICO - 40} />
                
                {/* Grades horizontais */}
                {[0, 1000, 2000, 3000, 4000, 5000].map((valor, index) => {
                  const y = ALTURA_GRAFICO - 40 - (valor / VALOR_MAXIMO) * (ALTURA_GRAFICO - 80);
                  return (
                    <g key={index}>
                      <line stroke="#cbd5e1" strokeWidth="1" x1="40" x2="380" y1={y} y2={y} />
                      <text x="5" y={y} fill="#94a3b8" fontSize="10">
                        R$ {valor.toLocaleString('pt-BR')}
                      </text>
                    </g>
                  );
                })}
                
                {/* Barras de vendas */}
                {dashboard.vendas.map((venda, index) => {
                  const barWidth = 30;
                  const spacing = 20;
                  const x = 60 + index * (barWidth + spacing);
                  const altura = calcularAlturaBarra(venda.valor);
                  const y = ALTURA_GRAFICO - 40 - altura;
                  
                  return (
                    <g key={index}>
                      <rect 
                        fill="#0a1a4f" 
                        height={altura} 
                        rx="3" 
                        width={barWidth} 
                        x={x} 
                        y={y}
                      >
                        <title>R$ {venda.valor.toLocaleString('pt-BR')}</title>
                      </rect>
                      <text 
                        x={x + barWidth/2} 
                        y={ALTURA_GRAFICO - 20} 
                        fill="#0a1a4f" 
                        fontSize="12" 
                        textAnchor="middle"
                      >
                        {venda.dia}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="carrossel-container">
              <header className="carrossel-header">
                <button className="nav-button" onClick={voltarCarrossel}>&lt;</button>
                <h4 className="carrossel-title">{dashboard.carrossel[carrosselIndex].titulo}</h4>
                <button className="nav-button" onClick={avancarCarrossel}>&gt;</button>
              </header>
              
              <div className="carrossel-content">
                {dashboard.carrossel[carrosselIndex].componente}
              </div>
            </div>
          </div>
          <i className="fas fa-calendar-alt chart-calendar-icon" />
        </section>
      </main>
    </div>
  );
};

export default HomeGerente;