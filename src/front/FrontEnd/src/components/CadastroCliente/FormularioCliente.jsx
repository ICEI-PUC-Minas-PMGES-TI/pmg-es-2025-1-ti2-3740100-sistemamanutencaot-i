import React, { useState } from "react";
import styles from "./FormularioCliente.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormularioCliente = () => {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    cpf: "",
    telefone: "",
  });

  const [mensagem, setMensagem] = useState("");
  const location = useLocation();
  const { idLoja } = location.state || {};
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const novoCliente = {
        nome: formData.nomeCliente,
        cpf: formData.cpf,
        telefone: formData.telefone,
        loja: {
          id: 1,
        },
      };

      await axios.post("http://localhost:8080/clientes", novoCliente);
      setMensagem("Cliente cadastrado com sucesso!");
      setFormData({ nomeCliente: "", cpf: "", telefone: "" });

      // Redireciona após 2 segundos
      setTimeout(() => {
        navigate(-1); // Volta para a página anterior
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      setMensagem(`Erro: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className={styles.containerFormulario}>
      <form onSubmit={handleSubmit} className={styles.envoltorioFormulario}>
        <h1 className={styles.tituloFormulario}>Cadastrar novo Cliente</h1>
        <p className={styles.descricaoFormulario}>
          Cadastre um novo cliente e tenha todas as informações à mão para
          agilizar o atendimento e garantir um{" "}
          <span className={styles.textoAzul}>serviço</span> ainda mais
          <span className={styles.textoAzul}> eficiente!</span>
        </p>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Nome</label>
          <input
            type="text"
            name="nomeCliente"
            value={formData.nomeCliente}
            onChange={handleChange}
            placeholder="Nome completo do cliente"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="CPF do cliente"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Telefone</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone do cliente"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <button type="submit" className={styles.botaoFormulario}>
          Cadastrar Cliente
        </button>

        {mensagem && (
          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensagem}</p>
        )}
      </form>
    </div>
  );
};

export default FormularioCliente;
