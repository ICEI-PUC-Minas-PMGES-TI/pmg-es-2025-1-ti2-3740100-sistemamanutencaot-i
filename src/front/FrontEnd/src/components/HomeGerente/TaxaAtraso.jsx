import React, { useState, useEffect } from 'react';
import './TaxaAtraso.css';

const TaxaAtraso = () => {
  const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  // Função para obter o mês atual
  const getMesAtual = () => {
    const data = new Date();
    return meses[data.getMonth()];
  };

  // Função para formatar a data atual
  const formatarDataAtual = () => {
    const data = new Date();
    const dia = data.getDate();
    const mes = data.toLocaleString('pt-BR', { month: 'long' });
    return `${dia} de ${mes.charAt(0).toUpperCase() + mes.slice(1)}`;
  };

  const [dadosTaxaAtraso, setDadosTaxaAtraso] = useState([]);
  const [barraHover, setBarraHover] = useState(null); // Controla qual barra está com hover
  const [mesAtual, setMesAtual] = useState(getMesAtual());
  const [dadoAtual, setDadoAtual] = useState(null);

  // Inicializar dados
  useEffect(() => {
    const data = new Date();
    const mesAtualIndex = data.getMonth();
    
    // Obter os últimos 7 meses (6 anteriores + atual)
    const ultimosMeses = [];
    for (let i = 6; i >= 0; i--) {
      const mesIndex = (mesAtualIndex - i + 12) % 12;
      ultimosMeses.push(meses[mesIndex]);
    }

    const dadosIniciais = ultimosMeses.map((mes, index) => {
      // Taxa fixa para exemplo, exceto para o mês atual que terá 8%
      const taxa = index === 6 ? 8 : Math.floor(Math.random() * 10) + 3;
      return { mes, taxa };
    });

    const indexAtual = 6; // O último mês é o atual

    const dadosAtualizados = dadosIniciais.map((dado, index) => {
      let variacao = 0;
      let status = 'neutral';
      let emoji = '😐';
      
      if (index === indexAtual && index > 0) {
        const taxaAnterior = dadosIniciais[index - 1].taxa;
        variacao = Math.round(((taxaAnterior - dado.taxa) / taxaAnterior) * 100);
        
        if (variacao > 0) {
          status = 'positive';
          emoji = '😊';
        } else if (variacao < 0) {
          status = 'negative';
          emoji = '😞';
          variacao = Math.abs(variacao);
        }
        
        return {
          ...dado,
          atual: true,
          variacao,
          status,
          emoji,
          data: formatarDataAtual()
        };
      }
      return { ...dado, atual: index === indexAtual };
    });

    setDadosTaxaAtraso(dadosAtualizados);
    setDadoAtual(dadosAtualizados[indexAtual]);
  }, []);

  const getStatusClass = (status) => {
    return status === 'positive' ? 'positive' : 
           status === 'negative' ? 'negative' : 'neutral';
  };

  return (
    <div className="widget-container">
      <main className="widget-content">
        <div className="chart-container">
          <div className="y-axis">
            <span>20%</span>
            <span>10%</span>
            <span>0%</span>
          </div>
          
          <div className="chart-content">
            <div className="bars-container">
              {dadosTaxaAtraso.map((dado, index) => (
                <div 
                  key={index}
                  className={`bar ${dado.atual ? 'highlighted-bar' : ''}`}
                  style={{ height: `${dado.taxa * 8}px` }}
                  onMouseEnter={() => setBarraHover(index)}
                  onMouseLeave={() => setBarraHover(null)}
                >
                  {/* Balão para qualquer barra (mostra a taxa) */}
                  {barraHover === index && (
                    <div className="highlight-bubble">
                      <div className="bubble-content">
                        <div>{dado.taxa}%</div>
                        {/* Para o mês atual, mostramos também a comparação */}
                        {dado.atual && dado.variacao !== undefined && (
                          <>
                            <div className={`improvement ${getStatusClass(dado.status)}`}>
                              {dado.status === 'positive' && `${dado.variacao}% melhor`}
                              {dado.status === 'negative' && `${dado.variacao}% pior`}
                              {dado.status === 'neutral' && 'Sem variação'}
                            </div>
                            <div>{dado.data}</div>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Rótulos dos meses */}
            <div className="mes-labels">
              {dadosTaxaAtraso.map((dado, index) => (
                <div key={index} className="mes-label">
                  {dado.mes}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {dadoAtual && (
          <div className="summary">
            <span className={`percentage ${getStatusClass(dadoAtual.status)}`}>
              {dadoAtual.taxa}%
            </span>
            <p className="description">
              {dadoAtual.status === 'positive' && 
                `A taxa de atraso está ${dadoAtual.variacao}% melhor que o mês passado`}
              
              {dadoAtual.status === 'negative' && 
                `A taxa de atraso está ${dadoAtual.variacao}% pior que o mês passado`}
              
              {dadoAtual.status === 'neutral' && 
                'A taxa de atraso está estável em relação ao mês passado'}
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default TaxaAtraso;