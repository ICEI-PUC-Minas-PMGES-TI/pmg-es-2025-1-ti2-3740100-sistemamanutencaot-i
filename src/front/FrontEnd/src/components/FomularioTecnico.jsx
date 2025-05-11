import React, { useState } from "react";
import styles from "../assets/css/FormularioTecnico.module.css"; 
import axios from "axios";
import { useLocation } from "react-router-dom";

const FormularioTecnico = () => {
  const [formData, setFormData] = useState({
    nomeTecnico: "",
    telefone: "",
    email: "",
  });

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [mensagem, setMensagem] = useState("");
  const location = useLocation();
  const { idLoja } = location.state || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoTecnico = {
      nome: formData.nomeTecnico,
      cpf: "12345678912",
      email: formData.email,
      cargo: opcaoSelecionada,
      senha: "senhaPadrao",
      loja: {
        id: parseInt(idLoja),
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/tecnicos",
        novoTecnico
      );
      console.log("Técnico cadastrado com sucesso:", response.data);
      setMensagem("Técnico cadastrado com sucesso!");
      setFormData({ nomeTecnico: "", telefone: "", email: "" });
      setOpcaoSelecionada("");
    } catch (error) {
      console.error("Erro ao cadastrar técnico:", error);
      setMensagem("Erro ao cadastrar técnico.");
    }
  };

  return (
    <div className={styles.containerFormulario}>
      <form onSubmit={handleSubmit} className={styles.envoltorioFormulario}>
        <h1 className={styles.tituloFormulario}>Cadastrar novo Técnico</h1>
        <p className={styles.descricaoFormulario}>
          Adicione um novo técnico à equipe e permita que ele acompanhe e{" "}
          <span className={styles.textoAzul}>atualize</span> os{" "}
          <span className={styles.textoAzul}>reparos</span>.
        </p>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Nome</label>
          <input
            type="text"
            name="nomeTecnico"
            value={formData.nomeTecnico}
            onChange={handleChange}
            placeholder="Coloque o nome do técnico"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Telefone</label>
          <input
            type="number"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Coloque o telefone do técnico"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Coloque o email do técnico"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Cargo</label>
          <select
            value={opcaoSelecionada}
            onChange={(e) => setOpcaoSelecionada(e.target.value)}
            className={styles.entradaFormulario}
            required
          >
            <option value="" disabled>Selecione um cargo</option>
            <option value="Estagiário">Estagiário</option>
            <option value="Técnico de PC">Técnico de PC</option>
            <option value="Técnico de Notebook">Técnico de Notebook</option>
          </select>
        </div>

        <button type="submit" className={styles.botaoFormulario}>
          Cadastrar
        </button>

        {mensagem && (
          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensagem}</p>
        )}
      </form>
    </div>
  );
};

export default FormularioTecnico;
