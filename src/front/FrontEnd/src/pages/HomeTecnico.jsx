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
    className="rounded-lg shadow-md bg-white overflow-hidden"
    role="article"
    aria-labelledby={`card${index + 1}-title`}
  >
    <header className="bg-[#0a1446] flex items-center justify-between px-4 py-3">
      <div className="flex items-center space-x-2 text-white text-xs font-semibold">
        <span>🖥️</span>
        <div>
          <p id={`card${index + 1}-title`} className="font-bold leading-tight">{nome}</p>
          <p className="text-[10px] font-normal">Serviço #{id}</p>
        </div>
      </div>
      <span
        className="w-4 h-4 rounded-full"
        style={{ backgroundColor: cor }}
        aria-label={`Status ${cor}`}
        title={`Status ${cor}`}
      ></span>
    </header>
    <div className="p-4 text-[11px] text-[#0a1446]">
      <p>Prazo: <strong>{prazo}</strong></p>
      <p>Status: <strong>{status}</strong></p>
      <p className="mt-2 font-bold">Sintomas:</p>
      <p className="mt-1 bg-[#e9ebe4] rounded-md p-2 text-[9px] font-normal leading-tight">
        Notebook não liga após cair Coca-Cola
      </p>
    </div>
  </article>
);

const HomeTecnico = () => {
  return (
    <div className="min-h-screen flex font-sans" style={{ backgroundColor: "#e9ebe4", color: "#0a1446" }}>
      <nav className="bg-[#0a1446] w-14 flex flex-col items-center py-6 space-y-8 min-h-screen">
        <button aria-label="Home" className="text-white text-xl">🏠</button>
        <button aria-label="Users" className="text-white text-xl">👥</button>
        <button aria-label="Files" className="text-white text-xl">📄</button>
        <button aria-label="Tools" className="text-white text-xl">🛠️</button>
        <button aria-label="Logout" className="mt-auto text-white text-xl rotate-180">↩️</button>
      </nav>

      <main className="flex-1 p-6 md:p-10 max-w-full">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold leading-tight">Olá, Ana Paula</h1>
          <p className="text-xs font-semibold -mt-1">Técnico de Campo</p>
        </header>

        <form className="flex items-center max-w-xl mb-10" role="search" aria-label="Buscar reparos">
          <input
            type="search"
            placeholder="Buscar..."
            className="flex-grow rounded-l-md border border-gray-300 px-4 py-2 text-sm text-[#0a1446] placeholder:text-[#0a1446]/60 focus:outline-none focus:ring-2 focus:ring-[#0a1446]"
            aria-label="Buscar"
          />
          <button
            type="submit"
            className="bg-[#0a1446] px-3 py-2 rounded-r-md text-white text-sm"
            aria-label="Buscar"
          >
            🔍
          </button>
          <button
            type="button"
            className="ml-3 bg-[#0a1446] p-2 rounded-md text-white text-sm"
            aria-label="Filtro"
          >
            ⚙️
          </button>
        </form>

        <h2 className="text-xl font-extrabold mb-6">Seus Reparos</h2>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl"
          aria-label="Lista de reparos"
        >
          {reparos.map((reparo, index) => (
            <ReparoCard key={index} index={index} {...reparo} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomeTecnico;
