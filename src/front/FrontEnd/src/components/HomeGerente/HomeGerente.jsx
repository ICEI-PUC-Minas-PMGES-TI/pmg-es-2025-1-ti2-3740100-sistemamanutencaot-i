import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import './HomeGerente.css';

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Banco de dados mockado centralizado
const mockData = {
  usuario: {
    nome: "Alexandre",
    cargo: "Gerente de Loja"
  },
  dashboard: {
    cartoes: [
      { id: 1, label: 'Total de Vendas', value: 'R$ 10.100,75', icon: 'fas fa-shopping-cart' },
      { id: 2, label: 'Reparos', value: '21', icon: 'fas fa-tools' },
      { id: 3, label: 'Ticket Médio', value: 'R$ 147,50', icon: 'fas fa-ticket-alt' },
      { id: 4, label: 'Taxa de Atrasos', value: '10%', icon: 'fas fa-clock' }
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
    produtosDestaque: [
      { id: 1, nome: "Memoria RAM", valor: 40, cor: "#1E9B1E", porcentagem: 37 },
      { id: 2, nome: "HD", valor: 55, cor: "#E18B00", porcentagem: 23 },
      { id: 3, nome: "SSD", valor: 130, cor: "#0B3BDB", porcentagem: 40 }
    ],
    estoque: [
      { id: 1, nome: "Memoria RAM", quantidade: 10, status: "aumento" },
      { id: 2, nome: "HD", quantidade: 2, status: "reducao" },
      { id: 3, nome: "SSD", quantidade: 5, status: "aumento" },
      { id: 4, nome: "Placa de Vídeo", quantidade: 8, status: "aumento" }
    ],
    taxaAtraso: [
      { mes: "Jan", taxa: 12 },
      { mes: "Fev", taxa: 9 },
      { mes: "Mar", taxa: 7 },
      { mes: "Abr", taxa: 8 },
      { mes: "Mai", taxa: 6 },
      { mes: "Jun", taxa: 5 }
    ]
  }
};

// Opções de mês
const meses = [
  { value: 'todos', label: 'Ano Todo' },
  { value: '1', label: 'Janeiro' },
  { value: '2', label: 'Fevereiro' },
  { value: '3', label: 'Março' },
  { value: '4', label: 'Abril' },
  { value: '5', label: 'Maio' },
  { value: '6', label: 'Junho' },
  { value: '7', label: 'Julho' },
  { value: '8', label: 'Agosto' },
  { value: '9', label: 'Setembro' },
  { value: '10', label: 'Outubro' },
  { value: '11', label: 'Novembro' },
  { value: '12', label: 'Dezembro' }
];

// Opções de ano
const anos = [
  { value: '2025', label: '2025' },
  { value: '2024', label: '2024' },
  { value: '2023', label: '2023' }
];

const HomeGerente = () => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const [anoSelecionado, setAnoSelecionado] = useState('2025');
  const [mesSelecionado, setMesSelecionado] = useState('5');
  const { usuario, dashboard } = mockData;
  
  // Configuração do gráfico de vendas diárias
  const vendasDiariasOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `R$ ${context.parsed.y.toLocaleString('pt-BR')}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: {
          callback: function(value) {
            return `R$ ${value.toLocaleString('pt-BR')}`;
          }
        }
      },
      x: { grid: { display: false } }
    }
  };

  const vendasDiariasData = {
    labels: dashboard.vendas.map(v => v.dia.toString()),
    datasets: [
      {
        label: 'Vendas (R$)',
        data: dashboard.vendas.map(v => v.valor),
        backgroundColor: '#0a1a4f',
        borderRadius: 5,
      }
    ]
  };

  // Configuração do gráfico de produtos em destaque
  const produtosDestaqueOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: R$ ${context.parsed.toLocaleString('pt-BR')}`;
          }
        }
      }
    }
  };

  const produtosDestaqueData = {
    labels: dashboard.produtosDestaque.map(p => p.nome),
    datasets: [
      {
        data: dashboard.produtosDestaque.map(p => p.valor),
        backgroundColor: dashboard.produtosDestaque.map(p => p.cor),
        borderWidth: 0,
      }
    ]
  };

  // Configuração do gráfico de taxa de atraso
  const taxaAtrasoOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 20,
        ticks: {
          callback: function(value) {
            return `${value}%`;
          }
        }
      }
    }
  };

  const taxaAtrasoData = {
    labels: dashboard.taxaAtraso.map(t => t.mes),
    datasets: [
      {
        label: 'Taxa de Atraso',
        data: dashboard.taxaAtraso.map(t => t.taxa),
        backgroundColor: '#0a1a4f',
        borderRadius: 5,
      }
    ]
  };

  // Configuração do gráfico de estoque
  const estoqueOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.parsed.x} unidades`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false }
      }
    }
  };

  const estoqueData = {
    labels: dashboard.estoque.map(e => e.nome),
    datasets: [
      {
        label: 'Quantidade',
        data: dashboard.estoque.map(e => e.quantidade),
        backgroundColor: dashboard.estoque.map(e => {
          if (e.status === 'aumento') return '#16A34A';
          if (e.status === 'reducao') return '#DC2626';
          return '#D1D5DB';
        }),
        borderWidth: 0,
        borderRadius: 5,
      }
    ]
  };

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
          <div className="header-content">
            <div>
              <h1 className="header-title">Olá, {usuario.nome}</h1>
              <p className="header-subtitle">{usuario.cargo}</p>
            </div>
            <div className="date-info">
              <span className="current-date">{new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
            </div>
          </div>
          <hr className="header-divider" />
        </header>
        
        <section className="dashboard-title-section">
          <h2 className="dashboard-title">Dashboard</h2>
          
          <div className="cycle-selector">
            <span className="cycle-label">Ciclo:</span>
            
            <div className="select-with-icon">
              <i className="fas fa-calendar-alt calendar-icon"></i>
              <div className="select-group">
                <select
                  value={anoSelecionado}
                  onChange={(e) => setAnoSelecionado(e.target.value)}
                  className="cycle-select"
                >
                  {anos.map(ano => (
                    <option key={ano.value} value={ano.value}>{ano.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="select-group">
              <select
                value={mesSelecionado}
                onChange={(e) => setMesSelecionado(e.target.value)}
                className="cycle-select"
              >
                {meses.map(mes => (
                  <option key={mes.value} value={mes.value}>{mes.label}</option>
                ))}
              </select>
            </div>
          </div>
        </section>
        
        <section className="summary-cards">
          {dashboard.cartoes.map(cartao => (
            <article key={cartao.id} className="summary-card">
              <div className="card-icon-container">
                <i className={cartao.icon}></i>
              </div>
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
        </section>
        
        <div className="chart-grid">
          <section className="chart-section">
            <div className="chart-header">
              <h3 className="chart-title">Vendas Diárias - {meses.find(m => m.value === mesSelecionado)?.label || 'Maio'}</h3>
              <i className="fas fa-calendar-alt chart-calendar-icon" />
            </div>
            <div className="chart-container">
              <Bar options={vendasDiariasOptions} data={vendasDiariasData} />
            </div>
          </section>
          
          <section className="chart-section">
            <div className="chart-header">
              <h3 className="chart-title">Produtos em Destaque</h3>
              <i className="fas fa-chart-pie chart-icon" />
            </div>
            <div className="chart-container">
              <Pie options={produtosDestaqueOptions} data={produtosDestaqueData} />
            </div>
          </section>
        </div>
        
        {/* Seção para os widgets de taxa de atraso e estoque */}
        <div className="widgets-grid">
          <section className="widget-section">
            <div className="widget-header">
              <h3 className="widget-title">Taxa de Atraso</h3>
            </div>
            <div className="chart-container">
              <Bar options={taxaAtrasoOptions} data={taxaAtrasoData} />
            </div>
          </section>
          
          <section className="widget-section">
            <div className="widget-header">
              <h3 className="widget-title">Reposição de Estoque</h3>
            </div>
            <div className="chart-container">
              <Bar options={estoqueOptions} data={estoqueData} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomeGerente;