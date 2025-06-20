import React, { useState, useEffect } from "react";
import "../assets/css/HomeTecnico.css";
import BarraLateral from "../components/BarraLateral.jsx";
import ReparoCard from "../components/ReparosTecnico.jsx";
import axios from "axios";

import FiltroIcone from "../assets/images/Filtro1.png";
import SearchIcone from "../assets/images/search.png";
import NoRepairImg from "../assets/images/NoRepair.png";

const HomeTecnico = () => {
  const [nomeTecnico, setNomeTecnico] = useState("");
  const [reparos, setReparos] = useState([]);
  
  useEffect(() => {
    const tecnicoStr = localStorage.getItem("tecnico");
    if (tecnicoStr) {
      const tecnicoObj = JSON.parse(tecnicoStr);
      setNomeTecnico(tecnicoObj.nome);
    }
  }, []);

  const buscarReparosTecnico = () => {
    const tecnicoId = Number(localStorage.getItem("id_tecnico"));

    axios.get(`http://localhost:8080/ordem-servicos/tecnico/${tecnicoId}`)
      .then(response => {
        const reparosComNome = response.data.map(reparo => {
          const nomeCliente = reparo.computador?.cliente?.pessoa?.nome || "Cliente não encontrado";
          const tipoComputador = reparo.computador?.tipo || "Desconhecido";
          return { ...reparo, nome: nomeCliente, tipo: tipoComputador };
        });
        setReparos(reparosComNome);
      })
      .catch(error => {
        console.error("Erro ao buscar reparos:", error);
      });
  };

  useEffect(() => {
    buscarReparosTecnico();
  }, []);

  return (
    <div className="container">
      <BarraLateral />
      <main className="conteudo">
        <header className="cabecalho">
          <h1>Olá, {nomeTecnico || "Usuário"}</h1>
          <p className="subtitulo">Técnico de Campo</p>
        </header>

        <div className="busca-wrapper">
          <form className="busca-form" role="search" aria-label="Buscar reparos">
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
            {reparos.length > 0 ? (
              reparos.map((reparo, index) => (
                <ReparoCard key={index} index={index} {...reparo} />
              ))
            ) : (
              <div className="mensagem-sem-reparos">
                <img 
                  src={NoRepairImg} 
                  alt="Nenhum reparo encontrado" 
                  className="imagem-sem-reparos"
                />
                <p className="texto-sem-reparos">Você não possui reparos no momento</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomeTecnico;