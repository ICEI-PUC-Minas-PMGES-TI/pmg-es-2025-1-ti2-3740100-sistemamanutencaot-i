import React, { useState } from "react";
import "../assets/css/FormularioTecnico.css";
import axios from "axios";

const FormularioTecnico = () => {

  const [formData, setFormData] = useState({
    nomeTecnico: "",
    telefone: "",
    email: "",
  });

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [mensagem, setMensagem] = useState("");

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
      telefone: formData.telefone,
      email: formData.email,
      cargo: opcaoSelecionada,
    };

    try {
      const response = await axios.post(
        "https://pmg-es-2025-1-ti2-3740100-znbi.onrender.com/tecnicos",
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
    <div className="container-formulario">
      <form onSubmit={handleSubmit} className="envoltorio-formulario">
        <h1 className="titulo-formulario">Cadastrar novo Técnico</h1>
        <p className="descricao-formulario">
          Adicione um novo técnico à equipe e permita que ele acompanhe e{" "}
          <span className="texto-azul">atualize</span> os{" "}
          <span className="texto-azul">reparos</span>.
        </p>

        <div className="grupo-campo-formulario">
          <label className="rotulo-formulario">Nome</label>
          <input
            type="text"
            name="nomeTecnico"
            value={formData.nomeTecnico}
            onChange={handleChange}
            placeholder="Coloque o nome do técnico"
            className="entrada-formulario"
            required
          />
        </div>

        <div className="grupo-campo-formulario">
          <label className="rotulo-formulario">Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Coloque o telefone do técnico"
            className="entrada-formulario"
            required
          />
        </div>

        <div className="grupo-campo-formulario">
          <label className="rotulo-formulario">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Coloque o email do técnico"
            className="entrada-formulario"
            required
          />
        </div>

        <div className="grupo-campo-formulario">
          <label className="rotulo-formulario">Cargo</label>
          <select
            value={opcaoSelecionada}
            onChange={(e) => setOpcaoSelecionada(e.target.value)}
            className="entrada-formulario"
            required
          >
            <option value="" disabled>Selecione um cargo</option>
            <option value="0">Estagiário</option>
            <option value="1">Técnico de PC</option>
            <option value="2">Técnico de Notebook</option>
          </select>
        </div>

        <button type="submit" className="botao-formulario">
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
