import React from "react";
import "../assets/css/HomeTecnico.css";
import BarraLateral from "../components/BarraLateral.jsx";
import ReparoCard from "../components/ReparoCard.jsx";

// Ícones e imagens
import FiltroIcone from "../assets/images/Filtro1.png";
import SearchIcone from "../assets/images/search.png";

//puxar do backend e retirar isso daqui
const reparos = [
  {
    nome: "João Vasconcelos",
    id: "001",
    prazo: "22/10/2025",
    status: "Manutenção",
    cor: "#b22222",
  },
  {
    nome: "João Vasconcelos",
    id: "001",
    prazo: "22/10/2025",
    status: "Manutenção",
    cor: "#d4a017",
  },
  {
    nome: "João Vasconcelos",
    id: "001",
    prazo: "22/10/2025",
    status: "Manutenção",
    cor: "#b22222",
  },
  {
    nome: "João Vasconcelos",
    id: "001",
    prazo: "22/10/2025",
    status: "Manutenção",
    cor: "#b22222",
  },
  {
    nome: "João Vasconcelos",
    id: "001",
    prazo: "22/10/2025",
    status: "Manutenção",
    cor: "#2e8b57",
  },
  {
    nome: "João Vasconcelos",
    id: "001",
    prazo: "22/10/2025",
    status: "Manutenção",
    cor: "#2e8b57",
  },
];

const HomeTecnico = () => {
  return (
    <div className="container">
      <BarraLateral />
      <main className="conteudo">
        <header className="cabecalho">
          <h1>Olá, Ana Paula</h1>
          <p className="subtitulo">Técnico de Campo</p>
        </header>

        <div className="busca-wrapper">
          <form
            className="busca-form"
            role="search"
            aria-label="Buscar reparos"
          >
            <input
              type="search"
              placeholder="Buscar..."
              className="campo-busca"
              aria-label="Buscar"
            />
            <button
              type="submit"
              className="botao-busca-icone"
              aria-label="Buscar"
            >
              <img src={SearchIcone} alt="Buscar" />
            </button>
            <button type="button" className="botao-filtro" aria-label="Filtro">
              <img src={FiltroIcone} alt="Filtro" />
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
