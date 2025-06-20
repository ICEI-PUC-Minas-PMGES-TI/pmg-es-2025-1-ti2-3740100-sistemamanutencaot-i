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

  const handleSalvar = async () => {
    try {
      if (tipoUsuario === "tecnico" && idTecnico) {
        if (!nomeTecnico.trim()) {
          alert("O nome do técnico não pode estar vazio.");
          return;
        }
        await axios.put(`http://localhost:8080/tecnicos/${idTecnico}`, {
          nome: nomeTecnico,
        });
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
    try {
      let email = "";
      if (tipoUsuario === "tecnico" && idTecnico) {
        
        const res = await axios.get(`http://localhost:8080/tecnicos/${idTecnico}`);
        email = res.data.email;
        
        await axios.delete(`http://localhost:8080/tecnicos/${idTecnico}`, { data: { email } });
        
        if (email) {
          try {
            await axios.delete(`http://localhost:8080/emails/${encodeURIComponent(email)}`);
          } catch (emailErr) {
            alert("Conta excluída, mas houve erro ao excluir o e-mail no backend. Verifique o backend.");
            console.error("Erro ao excluir e-mail:", emailErr);
          }
        }
        alert("Conta de técnico e e-mail excluídos com sucesso!");
      } else if (tipoUsuario === "gerente") {
      
        alert("Conta da loja excluída com sucesso!");
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
