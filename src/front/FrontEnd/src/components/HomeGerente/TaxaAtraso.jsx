import React, { useState } from 'react';
import './TaxaAtraso.css';

const TaxaAtraso = () => {
  // Banco de dados mockado
  const [dadosTaxaAtraso, setDadosTaxaAtraso] = useState([
    { mes: 'Jan', taxa: 40, melhor: false },
    { mes: 'Fev', taxa: 70, melhor: false },
    { mes: 'Mar', taxa: 40, melhor: false },
    { mes: 'Abr', taxa: 60, melhor: false },
    { mes: 'Mai', taxa: 40, melhor: false },
    { mes: 'Jun', taxa: 50, melhor: false },
    { mes: 'Jul', taxa: 40, melhor: false },
    { mes: 'Ago', taxa: 80, melhor: true, data: '22 de Agosto', melhoria: 5 },
    { mes: 'Set', taxa: 40, melhor: false },
    { mes: 'Out', taxa: 60, melhor: false }
  ]);

  const [bubbleVisivel, setBubbleVisivel] = useState(false);
  const [mesAtual, setMesAtual] = useState('Ago');

  // Função para atualizar os dados (exemplo de como seria com dados dinâmicos)
  const atualizarDados = () => {
    const novosDados = [...dadosTaxaAtraso];
    const indiceAtual = novosDados.findIndex(item => item.melhor);
    
    // Simula uma mudança de dados
    if (indiceAtual >= 0) {
      novosDados[indiceAtual].taxa = Math.max(10, Math.floor(Math.random() * 100));
      novosDados[indiceAtual].melhoria = Math.floor(Math.random() * 10);
      setDadosTaxaAtraso(novosDados);
    }
  };

  return (
    <div className="widget-container">
      <main className="widget-content">
        <div className="chart-container">
          <div className="axis-labels">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
          
          <div className="bars-container">
            {dadosTaxaAtraso.map((dado, index) => (
              <div 
                key={index}
                className={`bar ${dado.melhor ? 'highlighted-bar' : ''}`}
                style={{ height: `${dado.taxa * 0.6}px` }} // Ajuste de escala
                onMouseEnter={() => dado.melhor ? setBubbleVisivel(true) : null}
                onMouseLeave={() => setBubbleVisivel(false)}
              ></div>
            ))}
          </div>
          
          {bubbleVisivel && (
            <div className="highlight-bubble">
              <div className="emoji">😊</div>
              <div className="bubble-content">
                <div className="improvement">
                  {dadosTaxaAtraso.find(d => d.melhor)?.melhoria}% melhor
                </div>
                <div>{dadosTaxaAtraso.find(d => d.melhor)?.data}</div>
              </div>
            </div>
          )}
        </div>
        
        <div className="summary">
          <span className="percentage">
            {dadosTaxaAtraso.find(d => d.melhor)?.taxa}%
          </span>
          <p className="description">
            A taxa de atraso está atualmente {dadosTaxaAtraso.find(d => d.melhor)?.melhoria}% 
            melhor que o mês passado
          </p>
        </div>
      </main>
    </div>
  );
};

export default TaxaAtraso;