import React, { useState, useEffect } from 'react';
import './ReposicaoEstoque.css';

const ReposicaoEstoque = () => {
  // Banco de dados mockado com estado
  const [itensEstoque, setItensEstoque] = useState([
    { id: 1, nome: "Memoria RAM", quantidade: 10, status: "aumento" },
    { id: 2, nome: "HD", quantidade: 2, status: "reducao" },
    { id: 3, nome: "SSD", quantidade: 5, status: "aumento" },
    { id: 4, nome: "Placa de Vídeo", quantidade: 8, status: "aumento" } // Novo item adicionado
  ]);

  // Simula atualizações de estoque a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setItensEstoque(prevItens => {
        return prevItens.map(item => {
          // Gera uma mudança aleatória na quantidade (-3 a +5)
          const mudanca = Math.floor(Math.random() * 9) - 3;
          const novaQuantidade = Math.max(0, item.quantidade + mudanca);
          
          // Determina o status com base na mudança
          let novoStatus = "neutro";
          if (mudanca > 0) novoStatus = "aumento";
          if (mudanca < 0) novoStatus = "reducao";
          
          return {
            ...item,
            quantidade: novaQuantidade,
            status: novoStatus
          };
        });
      });
    }, 5000); // Atualiza a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reposicao-widget">
      <main className="reposicao-content">
        {itensEstoque.map((item, index) => (
          <React.Fragment key={item.id}>
            <div className="estoque-item">
              <span className="item-nome">{item.nome}</span>
              <div className={`item-quantidade ${item.status}`}>
                <span>{item.quantidade}</span>
                {item.status !== "neutro" && (
                  <i className={`fas fa-arrow-${item.status === "aumento" ? "up" : "down"}`}></i>
                )}
              </div>
            </div>
            {index < itensEstoque.length - 1 && <hr className="divisor" />}
          </React.Fragment>
        ))}
        
        <button className="detalhes-button" type="button">
          Detalhes
        </button>
      </main>
    </div>
  );
};

export default ReposicaoEstoque;