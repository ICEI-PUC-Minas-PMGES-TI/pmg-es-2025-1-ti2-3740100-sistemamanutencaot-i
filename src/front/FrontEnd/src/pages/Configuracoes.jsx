// ConfiguracoesGerente.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../assets/css/Configuracoes.module.css";
import PainelConfig from "../components/PainelConfig";
import BarraLateral from "../components/BarraLateral";

const Configuracoes = () => {
  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const idTecnico = localStorage.getItem("id_tecnico");

  const [nomeTecnico, setNomeTecnico] = useState("");

  useEffect(() => {
    const fetchNome = async () => {
      try {
        if (tipoUsuario === "tecnico" && idTecnico) {
          const res = await axios.get(`http://localhost:8080/tecnicos/${idTecnico}`);
          setNomeTecnico(res.data.nome); 
        }
      } catch (err) {
        console.error("Erro ao buscar técnico:", err);
        setNomeTecnico("Erro ao carregar nome");
      }
    };

    fetchNome();
  }, [tipoUsuario, idTecnico]);

  return (
    <div className={styles.containerGeral}>
      <BarraLateral />

      <main className={styles.conteudoPrincipal}>
        <div className={styles.cabecalho}>
          <h1>Configurações</h1>
          <p>{tipoUsuario === "tecnico" ? `Técnico ${nomeTecnico}` : "Gerente da Loja"}</p>
        </div>

        <div className={styles.painelContainer}>
          <div className={styles.tituloPainel}>
            <h2>{tipoUsuario === "tecnico" ? "Perfil" : "Informações da Loja"}</h2>
          </div>
          <PainelConfig />
        </div>

        <div className={styles.containerBotoes}>
          <button className={styles.botaoSalvar}>Salvar Alterações</button>
          <button className={styles.botaoExcluir}>Excluir Conta</button>
        </div>
      </main>
    </div>
  );
};

export default Configuracoes;
