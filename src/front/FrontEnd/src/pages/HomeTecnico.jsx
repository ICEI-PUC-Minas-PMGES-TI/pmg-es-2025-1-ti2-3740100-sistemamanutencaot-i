import React from "react";
import "../assets/css/HomeTecnico.css";

const reparos = [
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#b22222" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#d4a017" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#b22222" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#b22222" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#2e8b57" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#2e8b57" }
];

const ReparoCard = ({ nome, id, prazo, status, cor, index }) => (
  <article
    className="card"
    role="article"
    aria-labelledby={`card${index + 1}-title`}
  >
    <header className="card-header">
      <div className="card-title">
        <span className="device-icon">🖥️</span>
        <div>
          <p id={`card${index + 1}-title`} className="nome">{nome}</p>
          <p className="servico">Serviço #{id}</p>
        </div>
      </div>
      <span
        className="status-dot"
        style={{ backgroundColor: cor }}
        aria-label={`Status ${cor}`}
        title={`Status ${cor}`}
      ></span>
    </header>
    <div className="card-body">
      <p>Prazo: <strong>{prazo}</strong></p>
      <p>Status: <strong>{status}</strong></p>
      <p className="sintomas-titulo">Sintomas:</p>
      <p className="sintomas-texto">
        Notebook não liga após cair Coca-Cola
      </p>
    </div>
  </article>
);

const HomeTecnico = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <img src="/imagens/logo.png" alt="Logo" className="w-10 h-10 mb-4" />
        <img src="/imagens/home.png" alt="Home" className="w-6 h-6" />
        <img src="/imagens/users.png" alt="Usuários" className="w-6 h-6" />
        <img src="/imagens/files.png" alt="Arquivos" className="w-6 h-6" />
        <img src="/imagens/tools.png" alt="Ferramentas" className="w-6 h-6" />
        <img src="/imagens/logout.png" alt="Sair" className="w-6 h-6 logout" />
      </aside>

      {/* Conteúdo principal */}
      <main className="conteudo">
        <header className="cabecalho">
          <h1>Olá, Ana Paula</h1>
          <p className="subtitulo">Técnico de Campo</p>
        </header>

        {/* Busca */}
        <form className="busca-container" role="search" aria-label="Buscar reparos">
          <input
            type="search"
            placeholder="Buscar..."
            className="campo-busca"
            aria-label="Buscar"
          />
          <button
            type="submit"
            className="botao-busca"
            aria-label="Buscar"
          >
            🔍
          </button>
          <button
            type="button"
            className="botao-filtro"
            aria-label="Filtro"
          >
            ⚙️
          </button>
        </form>

        {/* Lista de reparos */}
        <h2 className="titulo-reparos">Seus Reparos</h2>
        <section className="grid-cards" aria-label="Lista de reparos">
          {reparos.map((reparo, index) => (
            <ReparoCard key={index} index={index} {...reparo} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomeTecnico;