import React, { useEffect, useState } from "react";
import "./ReparosPendentes.css";
import ReparoCard from "./ReparoPendenteCard";
import axios from "axios";

const ReparosPendentes = () => {
  const [reparos, setReparos] = useState([]);

  const buscarReparos = () => {
    axios.get("http://localhost:8080/ordem-servicos/sem-tecnico")
      .then(response => {
        setReparos(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar reparos:", error);
      });
  };

  useEffect(() => {
    buscarReparos();
  }, []);

  const atribuirTecnicoLogado = (idOrdemServico) => {
    const tecnicoId = Number(localStorage.getItem("id_tecnico"));
    if (!tecnicoId) {
      alert("Técnico não está logado");
      return;
    }

    axios
      .patch(`http://localhost:8080/ordem-servicos/${idOrdemServico}/tecnico`, {
        tecnicoId: tecnicoId,
      })
      .then(() => {
        buscarReparos();  // atualiza lista após patch
      })
      .catch((error) => {
        console.error("Erro ao atribuir técnico:", error);
      });
  };

  // Resto do código permanece igual

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
          <ReparoCard
            key={index}
            index={index}
            {...reparo}
            tipo={reparo.computador?.tipo}
            onAtribuir={() => atribuirTecnicoLogado(reparo.id)}
          />
        ))}
      </section>
    </main>
  );
};


export default ReparosPendentes;
