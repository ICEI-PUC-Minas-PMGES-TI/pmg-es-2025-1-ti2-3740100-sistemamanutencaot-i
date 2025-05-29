import React from "react";
import "./ReparosPendentes.css";
import ReparoCard from "./ReparoCard";

const ReparosPendentes = () => {
  const reparos = [
    {
      nome: "João Vasconcelos",
      id: "001",
      prazo: "22/10/2025",
      status: "Aguardando Diagnóstico",
      statusCor: "#9b1a1a",
      sintomas: "Notebook não liga após cair Coca-Cola",
      tipo: "notebook",
    },
    {
      nome: "Maria Silva",
      id: "002",
      prazo: "25/10/2025",
      status: "Em andamento",
      statusCor: "#c9a31a",
      sintomas: "Computador reinicia sozinho",
      tipo: "computador",
    },
    {
      nome: "Carlos Oliveira",
      id: "003",
      prazo: "28/10/2025",
      status: "Concluído",
      statusCor: "#1a9b3a",
      sintomas: "Tela azul com frequência",
      tipo: "notebook",
    },
    {
      nome: "Ana Santos",
      id: "004",
      prazo: "30/10/2025",
      status: "Aguardando Peças",
      statusCor: "#c9a31a",
      sintomas: "Não reconhece HD externo",
      tipo: "computador",
    },
    {
      nome: "Pedro Costa",
      id: "005",
      prazo: "01/11/2025",
      status: "Diagnóstico Inicial",
      statusCor: "#9b1a1a",
      sintomas: "Superaquecimento constante",
      tipo: "notebook",
    },
    {
      nome: "Juliana Martins",
      id: "006",
      prazo: "05/11/2025",
      status: "Em teste",
      statusCor: "#1a9b3a",
      sintomas: "Portas USB não funcionam",
      tipo: "computador",
    },
  ];

  return (
    <main className="container-reparos">
      <h1 className="titulo-pagina">Reparos Pendentes</h1>
      <p className="descricao-pagina">
        Aqui estão os serviços pendentes aguardando ação. Clique em um item para
        visualizar os detalhes e começar o reparo.
      </p>
      <hr className="divisor" />

      <section className="grid-reparos" aria-label="Lista de reparos pendentes">
        {reparos.map((reparo, index) => (
          <ReparoCard key={index} index={index} {...reparo} />
        ))}
      </section>
    </main>
  );
};

export default ReparosPendentes;
