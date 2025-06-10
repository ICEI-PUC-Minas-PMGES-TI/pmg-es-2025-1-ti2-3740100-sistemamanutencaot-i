import React from 'react';
import './ReparoSemana.css';
import notebook from "../../assets/images/notebook.png"

const ReparosSemana = () => {
  // Dados de exemplo para os serviços
  const servicosPendentes = [
    { nome: "João Vasconcelos", servico: "#001", cor: "#1dbf2a" },
    { nome: "Maria Eduarda", servico: "#002", cor: "#d9a10a" },
    { nome: "Julio Mercedes", servico: "#003", cor: "#c30a0a" },
    // ... outros itens
  ];

  const servicosAndamento = [
    { nome: "João Vasconcelos", servico: "#001", cor: "#d9a10a" },
    // ... outros itens
  ];

  const servicosFinalizados = [
    { nome: "João Vasconcelos", servico: "#001", cor: "#d9a10a" },
    // ... outros itens
  ];

  const ColunaServicos = ({ titulo, servicos }) => (
    <div className="coluna-servicos">
      <h2>{titulo}</h2>
      <ul>
        {servicos.map((item, index) => (
          <li key={index}>
            <div className="item-servico">
              <img src={notebook} />
              <div className="info-servico">
                <div className="nome-cliente">{item.nome}</div>
                <div className="numero-servico">{item.servico}</div>
              </div>
            </div>
            <span className="status-indicador" style={{ backgroundColor: item.cor }}></span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="reparos-container">
      <main>
        <h1>Reparos da Semana</h1>
        <p>
          Aqui estão os serviços pendentes aguardando ação. Clique em um item para visualizar os detalhes e começar o reparo.
        </p>
        <hr />
        
        <section className="colunas-container">
          <ColunaServicos titulo="Pendente" servicos={servicosPendentes} />
          <ColunaServicos titulo="Em Andamento" servicos={servicosAndamento} />
          <ColunaServicos titulo="Finalizados" servicos={servicosFinalizados} />
        </section>
      </main>
    </div>
  );
};

export default ReparosSemana;