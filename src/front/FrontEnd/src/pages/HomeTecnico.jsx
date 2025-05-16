import React from "react";
import "../assets/css/HomeTecnico.css";
import BarraLateral from "../components/BarraLateral.jsx";

// Ícones e imagens
import FiltroIcone from "../assets/images/Filtro1.png";
import SearchIcone from "../assets/images/search.png";
import NotebookIcon from "../assets/images/notebook-icon.png"; // Caminho ajustado

const reparos = [
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#b22222" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#d4a017" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#b22222" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#b22222" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#2e8b57" },
  { nome: "João Vasconcelos", id: "001", prazo: "22/10/2025", status: "Manutenção", cor: "#2e8b57" }
];

const ReparoCard = ({ nome, id, prazo, status, cor, index }) => (
  <article className="card" role="article" aria-labelledby={`card${index + 1}-title`}>
    <header className="card-header">
      <div className="card-title">
        <img src={NotebookIcon} alt="Ícone de notebook" className="device-icon" />
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
      <BarraLateral />
      <main className="conteudo">
        <header className="cabecalho">
          <h1>Olá, Ana Paula</h1>
          <p className="subtitulo">Técnico de Campo</p>
        </header>

        <div className="d-flex justify-content-center my-4">
          <form
            className="d-flex align-items-center"
            style={{ maxWidth: "600px", width: "100%", position: "relative" }}
            role="search"
            aria-label="Buscar reparos"
          >
            <input
              type="search"
              placeholder="Buscar..."
              className="form-control"
              style={{
                paddingRight: "45px",
                borderRadius: "10px",
                height: "45px",
              }}
              aria-label="Buscar"
            />
            <button
              type="submit"
              className="btn"
              style={{
                position: "absolute",
                right: "50px",
                background: "transparent",
                border: "none",
                padding: "0",
                cursor: "pointer"
              }}
              aria-label="Buscar"
            >
              <img src={SearchIcone} alt="Buscar" style={{ width: "24px", height: "24px" }} />
            </button>
            <button
              type="button"
              className="btn"
              style={{
                backgroundColor: "#000842",
                borderRadius: "8px",
                padding: "8px 10px",
                marginLeft: "10px",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              aria-label="Filtro"
            >
              <img src={FiltroIcone} alt="Filtro" style={{ width: "20px", height: "20px" }} />
            </button>
          </form>
        </div>

        <h2 className="titulo-reparos">Seus Reparos</h2>
        <div className="scroll-cards">
  <section className="grid-cards" aria-label="Lista de reparos">
    {reparos.map((reparo, index) => (
      <ReparoCard key={index} index={index} {...reparo} />
    ))}
  </section>
</div>

      </main>
    </div>
  );
};

export default HomeTecnico;
