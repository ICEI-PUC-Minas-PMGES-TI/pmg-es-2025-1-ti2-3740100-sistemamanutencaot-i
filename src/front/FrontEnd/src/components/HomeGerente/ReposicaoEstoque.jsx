import React from 'react';
import './ReposicaoEstoque.css';

const ReposicaoEstoque = () => {
  // Dados dos itens de estoque
  const itensEstoque = [
    { nome: "Memoria RAM", quantidade: 10, status: "aumento" },
    { nome: "HD", quantidade: 2, status: "reducao" },
    { nome: "SSD", quantidade: 5, status: "aumento" }
  ];

  return (
    <div className="reposicao-container">
      <div className="reposicao-widget">
        {/* Cabeçalho */}
        <header className="reposicao-header">
          <button aria-label="Voltar" className="nav-button">
            <i className="fas fa-chevron-left"></i>
          </button>
          <h1 className="reposicao-title">Reposição Estoque</h1>
          <button aria-label="Avançar" className="nav-button">
            <i className="fas fa-chevron-right"></i>
          </button>
        </header>

        {/* Conteúdo Principal */}
        <main className="reposicao-content">
          {itensEstoque.map((item, index) => (
            <React.Fragment key={index}>
              <div className="estoque-item">
                <span className="item-nome">{item.nome}</span>
                <div className={`item-quantidade ${item.status}`}>
                  <span>{item.quantidade}</span>
                  <i className={`fas fa-arrow-${item.status === "aumento" ? "up" : "down"}`}></i>
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
    </div>
  );
};

export default ReposicaoEstoque;