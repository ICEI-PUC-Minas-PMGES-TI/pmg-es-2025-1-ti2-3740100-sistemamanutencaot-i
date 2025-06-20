import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../assets/css/Configuracoes.module.css";
import PainelConfig from "../components/PainelConfig";
import BarraLateral from "../components/BarraLateral";

const Configuracoes = () => {
  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const idTecnico = localStorage.getItem("id_tecnico");
  const idGerente = localStorage.getItem("id_gerente");

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

  const handleSalvar = async () => {
    try {
      if (tipoUsuario === "tecnico" && idTecnico) {
        if (!nomeTecnico.trim()) {
          alert("O nome do técnico não pode estar vazio.");
          return;
        }
        await axios.put(`http://localhost:8080/tecnicos/${idTecnico}`, { nome: nomeTecnico });
        alert("Alterações salvas com sucesso!");
      } else if (tipoUsuario === "gerente") {
        alert("Alterações da loja salvas com sucesso!");
      }
    } catch (err) {
      alert("Erro ao salvar alterações.");
      console.error(err);
    }
  };

  const handleExcluir = async () => {
    if (!window.confirm("Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.")) return;

    console.log("Tipo usuário:", tipoUsuario);
    console.log("idTecnico:", idTecnico);
    console.log("idGerente:", idGerente);

    try {
      if (
        tipoUsuario === "tecnico" &&
        idTecnico &&
        idTecnico !== "null" &&
        idTecnico !== "undefined"
      ) {
        await axios.delete(`http://localhost:8080/tecnicos/${idTecnico}`);
        alert("Conta de técnico excluída com sucesso!");
      } else if (
        tipoUsuario === "gerente" &&
        idGerente &&
        idGerente !== "null" &&
        idGerente !== "undefined"
      ) {
        await axios.delete(`http://localhost:8080/lojas/${idGerente}`);
        alert("Conta da loja excluída com sucesso!");
      } else {
        alert(`ID do usuário não encontrado. idTecnico: ${idTecnico}, idGerente: ${idGerente}`);
        return;
      }

      localStorage.clear();
      window.location.href = "/";
    } catch (err) {
      alert("Erro ao excluir conta.");
      console.error(err);
    }
  };

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
          <button className={styles.botaoSalvar} onClick={handleSalvar}>Salvar Alterações</button>
          <button className={styles.botaoExcluir} onClick={handleExcluir}>Excluir Conta</button>
        </div>
      </main>
    </div>
  );
};

export default Configuracoes;