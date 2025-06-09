import React from 'react';
import './VendasDestaque.css';

const VendasDestaque = () => {
  // Banco de dados mockado
  const dadosVendas = [
    { id: 1, nome: "Memoria RAM", valor: 40, cor: "#1E9B1E", porcentagem: 37 },
    { id: 2, nome: "HD", valor: 55, cor: "#E18B00", porcentagem: 23 },
    { id: 3, nome: "SSD", valor: 130, cor: "#0B3BDB", porcentagem: 40 }
  ];

  // Calcula valores dinâmicos para o gráfico
  const raio = 60;
  const circunferencia = 2 * Math.PI * raio;
  let offsetAcumulado = 0;

  // Gera segmentos dinamicamente
  const segmentos = dadosVendas
    .sort((a, b) => b.porcentagem - a.porcentagem) // Ordena do maior para o menor
    .map(item => {
      const comprimentoArco = (item.porcentagem / 100) * circunferencia;
      const dashArray = `${comprimentoArco} ${circunferencia - comprimentoArco}`;
      const dashOffset = offsetAcumulado;
      offsetAcumulado -= comprimentoArco; // Atualiza para o próximo segmento

      return {
        ...item,
        dashArray,
        dashOffset
      };
    });

  return (
    <div className="vendas-container">
      <main className="vendas-content">
        <div className="pie-chart-container">
          <svg className="w-full h-full" fill="none" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
            {segmentos.map((segmento) => (
              <circle 
                key={segmento.id}
                cx="80" 
                cy="80" 
                r="60" 
                stroke={segmento.cor}
                strokeDasharray={segmento.dashArray}
                strokeDashoffset={segmento.dashOffset}
                strokeWidth="40"
              />
            ))}
            <circle cx="80" cy="80" fill="white" r="40" />
          </svg>
        </div>

        <ul className="legend">
          {dadosVendas.map((item) => (
            <li key={item.id} className="legend-item">
              <div className="flex items-center">
                <span 
                  className="legend-color" 
                  style={{ backgroundColor: item.cor }}
                ></span>
                <span className="legend-label">{item.nome}</span>
              </div>
              <span className="legend-value">R${item.valor.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default VendasDestaque;