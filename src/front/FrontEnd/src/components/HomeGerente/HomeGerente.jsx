import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import './HomeGerente.css';

// Registrar componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Opções de mês
const meses = [
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

const BASE_URL = 'http://localhost:8080/api/dashboard';

const id_gerente = localStorage.getItem('id_gerente');

const fetchCartoes = async (mes, ano) => {
  const response = await fetch(`${BASE_URL}/cartoes?mes=${mes}&ano=${ano}`);
  return await response.json();
};

const fetchVendasDiarias = async (mes, ano) => {
  const response = await fetch(`${BASE_URL}/vendas-diarias?mes=${mes}&ano=${ano}`);
  return await response.json();
};

const fetchProdutosDestaque = async (mes, ano) => {
  // Simulando retorno diferente por mês
  const dadosPorMes = {
    '1': [ // Janeiro
      { nome: "Teclado Mecânico", valor: 1200, cor: "#4F46E5" },
      { nome: "Mouse Gamer", valor: 950, cor: "#22C55E" },
    ],
    '2': [ // Fevereiro
      { nome: "Monitor UltraWide", valor: 1450, cor: "#FACC15" },
      { nome: "Headset RGB", valor: 600, cor: "#EC4899" },
    ],
    '3': [ // Março
      { nome: "Webcam HD", valor: 420, cor: "#06B6D4" },
      { nome: "Teclado Ergonômico", valor: 700, cor: "#8B5CF6" },
    ],
    '4': [
      { nome: "Notebook Gamer", valor: 5200, cor: "#EF4444" },
      { nome: "Mouse Sem Fio", valor: 350, cor: "#10B981" },
    ],
    '5': [
      { nome: "SSD 1TB", valor: 500, cor: "#F59E0B" },
      { nome: "Placa de Vídeo RTX", valor: 3500, cor: "#3B82F6" },
    ],
    // Adicione mais meses conforme quiser
  };

  // Se o mês for "todos" ou não estiver na lista, retorna tudo junto
  if (mes === 'todos' || !dadosPorMes[mes]) {
    return Object.values(dadosPorMes).flat();
  }

  // Retorna os produtos do mês específico
  return dadosPorMes[mes];
};

const fetchTaxaAtrasoPorMes = async (ano) => {
  const response = await fetch(`${BASE_URL}/taxa-atraso?ano=${ano}`);
  return await response.json();
};

const fetchEstoqueAtual = async () => {
  const response = await fetch(`${BASE_URL}/estoque-atual`);
  return await response.json();
};

const HomeGerente = () => {
  const [mesSelecionado, setMesSelecionado] = useState('1');
  const [anoSelecionado, setAnoSelecionado] = useState('2025');
  const [hoveredCardId, setHoveredCardId] = useState(null);

  // Estados para dados da API
  const [cartoes, setCartoes] = useState([]);
  const [vendas, setVendas] = useState([]);
  const [produtosDestaque, setProdutosDestaque] = useState([]);
  const [taxaAtraso, setTaxaAtraso] = useState([]);
  const [estoque, setEstoque] = useState([]);

  // Pode deixar fixo ou fazer outro fetch para usuário, se quiser
 
const usuario = {
  nome: "Gerente",
  cargo: `Gerente da loja ${id_gerente || 'desconhecido'}`
};

  useEffect(() => {
    const carregarDadosDashboard = async () => {
      try {
        const [cartoesData, vendasData, produtosData, taxaData, estoqueData] = await Promise.all([
          fetchCartoes(mesSelecionado, anoSelecionado),
          fetchVendasDiarias(mesSelecionado, anoSelecionado),
          fetchProdutosDestaque(mesSelecionado, anoSelecionado),
          fetchTaxaAtrasoPorMes(anoSelecionado),
          fetchEstoqueAtual()
        ]);
        setCartoes([
          {
            id: 1,
            label: "Total de Vendas",
            value: `R$ ${cartoesData.totalVendas.toFixed(2)}`,
            icon: "fas fa-shopping-cart",
          },
          {
            id: 2,
            label: "Reparos",
            value: `${cartoesData.reparos}`,
            icon: "fas fa-tools",
          },
          {
            id: 3,
            label: "Ticket Médio",
            value: `R$ ${cartoesData.ticketMedio.toFixed(2)}`,
            icon: "fas fa-ticket-alt",
          },
          {
            id: 4,
            label: "Taxa de Atrasos",
            value: `${cartoesData.taxaAtraso.toFixed(1)}%`,
            icon: "fas fa-clock",
          },
        ]);
        setVendas(vendasData);
        setProdutosDestaque(produtosData);
        setTaxaAtraso(taxaData);
        setEstoque(estoqueData);
      } catch (error) {
        console.error("Erro ao buscar dados do dashboard:", error);
      }
    };
    carregarDadosDashboard();
  }, [mesSelecionado, anoSelecionado]);
  
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
    labels: vendas.map(v => v.dia.toString()),
    datasets: [
      {
        label: 'Vendas (R$)',
        data: vendas.map(v => v.valor),
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
    labels: produtosDestaque.map(p => p.nome),
    datasets: [
      {
        data: produtosDestaque.map(p => p.valor),
        backgroundColor: produtosDestaque.map(p => p.cor),
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
        max: 100,
        ticks: {
          callback: function(value) {
            return `${value}%`;
          }
        }
      }
    }
  };

  const taxaAtrasoData = {
    labels: taxaAtraso.map(t => t.mes),
    datasets: [
      {
        label: 'Taxa de Atraso',
        data: taxaAtraso.map(t => t.taxa),
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
    labels: estoque.map(e => e.nome),
    datasets: [
      {
        label: 'Quantidade',
        data: estoque.map(e => e.quantidade),
        backgroundColor: estoque.map(e => {
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
          {cartoes.map(cartao => (
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