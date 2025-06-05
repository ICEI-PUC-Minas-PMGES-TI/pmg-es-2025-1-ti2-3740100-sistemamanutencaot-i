import React from 'react';
import './HomeGerente.css';

function HomeGerente() {
  return (
    <div className="p-6">
      <header className="mb-6 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold leading-tight">Olá, Alexandre</h1>
        <p className="text-sm font-semibold -mt-1">Gerente de Loja</p>
        <div className="border-b border-[#0a1446] mt-2"></div>
      </header>
      
      <main className="max-w-7xl mx-auto">
        {/* Seção Título e Seletor */}
        <section className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <h2 className="text-2xl font-extrabold mb-4 md:mb-0">DashBoard</h2>
          <div className="flex items-center space-x-2 border border-[#0a1446] rounded-md px-3 py-1 text-xs font-semibold text-[#0a1446]">
            <i className="far fa-calendar-alt text-base"></i>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-normal">Ciclo</span>
              <select 
                aria-label="Selecionar ciclo" 
                className="appearance-none bg-transparent focus:outline-none font-extrabold text-sm cursor-pointer"
                style={{ paddingRight: '1.25rem' }}
              >
                <option>2025</option>
              </select>
            </div>
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
        </section>

        {/* Cards de Métricas */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {metricCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 relative">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xs font-normal">{card.title}</p>
                <i className="fas fa-info-circle text-[#0a1446] text-xs"></i>
              </div>
              <p className="font-extrabold text-lg leading-tight">{card.value}</p>
            </div>
          ))}
        </section>

        {/* Gráficos */}
        <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 relative">
          <h3 className="text-xl font-extrabold mb-4">Maio</h3>
          <div className="flex flex-col md:flex-row md:space-x-6">
            {/* Gráfico de Barras */}
            <div className="flex-1">
              <BarChart />
            </div>
            
            {/* Gráfico de Pizza */}
            <SalesChart />
          </div>
        </section>
      </main>
    </div>
  );
}

// Componente do Gráfico de Barras
const BarChart = () => (
  <svg className="max-w-full" fill="none" height="200" viewBox="0 0 400 200" width="100%" xmlns="http://www.w3.org/2000/svg">
    <line stroke="#CBD5E1" strokeWidth="1" x1="40" x2="40" y1="10" y2="190"></line>
    <line stroke="#CBD5E1" strokeWidth="1" x1="40" x2="380" y1="190" y2="190"></line>
    <text fill="#94A3B8" fontFamily="Open Sans" fontSize="12" fontWeight="400" x="10" y="190">R$ 0,00</text>
    <text fill="#94A3B8" fontFamily="Open Sans" fontSize="12" fontWeight="400" x="10" y="150">R$ 600,00</text>
    <text fill="#94A3B8" fontFamily="Open Sans" fontSize="12" fontWeight="400" x="10" y="110">R$ 1.200,00</text>
    <text fill="#94A3B8" fontFamily="Open Sans" fontSize="12" fontWeight="400" x="10" y="70">R$ 1.800,00</text>
    <text fill="#94A3B8" fontFamily="Open Sans" fontSize="12" fontWeight="400" x="10" y="30">R$ 2.400,00</text>
    <text fill="#94A3B8" fontFamily="Open Sans" fontSize="12" fontWeight="400" x="10" y="10">R$ 3.000,00</text>
    
    {/* Barras */}
    <rect fill="#0a1446" height="60" rx="15" ry="15" width="30" x="70" y="130"></rect>
    <rect fill="#0a1446" height="140" rx="15" ry="15" width="30" x="120" y="50"></rect>
    <rect fill="#0a1446" height="60" rx="15" ry="15" width="30" x="170" y="130"></rect>
    <rect fill="#0a1446" height="100" rx="15" ry="15" width="30" x="220" y="90"></rect>
    <rect fill="#0a1446" height="70" rx="15" ry="15" width="30" x="270" y="120"></rect>
    <rect fill="#0a1446" height="130" rx="15" ry="15" width="30" x="320" y="60"></rect>
    <rect fill="#0a1446" height="20" rx="15" ry="15" width="30" x="370" y="170"></rect>
    
    {/* Rótulos do Eixo X */}
    {['10', '11', '12', '13', '14', '15', '16'].map((label, i) => (
      <text 
        key={i}
        fill="#0a1446" 
        fontFamily="Montserrat" 
        fontSize="14" 
        fontWeight="700" 
        x={80 + i * 50} 
        y="205"
        style={{ display: i === 6 ? 'none' : 'block' }}
      >
        {label}
      </text>
    ))}
  </svg>
);

// Componente do Gráfico de Pizza
const SalesChart = () => (
  <aside className="w-full md:w-64 bg-white rounded-lg shadow-md border border-gray-200 p-4 relative mt-6 md:mt-0">
    <div aria-label="Calendário" className="absolute top-2 right-2 bg-[#0a1446] text-white rounded-full p-2 text-sm cursor-pointer">
      <i className="far fa-calendar-alt"></i>
    </div>
    
    <div className="flex justify-between items-center bg-[#0a1446] text-white rounded-t-lg px-4 py-2 font-semibold text-sm">
      <button aria-label="Anterior" className="focus:outline-none">
        <i className="fas fa-chevron-left"></i>
      </button>
      <span>Vendas Destaque</span>
      <button aria-label="Próximo" className="focus:outline-none">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
    
    <div className="flex justify-center my-4">
      <img 
        alt="Gráfico de pizza representando vendas" 
        className="w-24 h-24" 
        height="100" 
        src="https://storage.googleapis.com/a1aa/image/b7e27e23-b037-480d-4079-e7f5b04ddfc0.jpg" 
        width="100" 
      />
    </div>
    
    <ul className="text-xs text-gray-600 font-semibold space-y-1">
      {salesData.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${item.color} inline-block`}></span>
          <span>
            {item.product} <strong>{item.price}</strong>
          </span>
        </li>
      ))}
    </ul>
  </aside>
);

// Dados para os cards
const metricCards = [
  { title: 'Total de Vendas', value: 'R$ 10.100,75' },
  { title: 'Reparos', value: '21' },
  { title: 'Ticket Médio', value: 'R$ 147,50' },
  { title: 'Taxa de Atrasos', value: '10%' }
];

// Dados para o gráfico de pizza
const salesData = [
  { product: 'Memoria RAM', price: 'R$40', color: 'bg-green-600' },
  { product: 'HD', price: 'R$55', color: 'bg-yellow-500' },
  { product: 'SSD', price: 'R$130', color: 'bg-blue-900' }
];

export default HomeGerente;