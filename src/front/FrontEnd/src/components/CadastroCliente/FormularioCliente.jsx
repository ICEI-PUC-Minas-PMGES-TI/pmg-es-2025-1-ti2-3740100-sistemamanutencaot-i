import React, { useState } from "react";
import styles from "./FormularioCliente.module.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const FormularioCliente = () => {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    documento: "",
    telefone: "",
  });

  const [tipoDocumento, setTipoDocumento] = useState("CPF");
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
        tipoPessoa: tipoDocumento === "CPF" ? "PF" : "PJ",
        [tipoDocumento.toLowerCase()]: formData.documento,
        telefone: formData.telefone,
<<<<<<< HEAD
=======
        loja: {
          id: 1,
        },
>>>>>>> d9c829cfe757346333607061c4efa0d00166be7e
      };

      await axios.post("http://localhost:8080/clientes", novoCliente);
      setMensagem("Cliente cadastrado com sucesso!");
      setFormData({ nomeCliente: "", documento: "", telefone: "" });

      setTimeout(() => {
        navigate(-1); // Volta para a tela anterior
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
          <label className={styles.rotuloFormulario}>Tipo de Documento</label>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <button
              type="button"
              className={`${styles.botaoOpcao} ${
                tipoDocumento === "CPF" ? styles.selecionado : ""
              }`}
              onClick={() => {
                setTipoDocumento("CPF");
                setFormData((prev) => ({ ...prev, documento: "" }));
              }}
            >
              CPF
            </button>
            <button
              type="button"
              className={`${styles.botaoOpcao} ${
                tipoDocumento === "CNPJ" ? styles.selecionado : ""
              }`}
              onClick={() => {
                setTipoDocumento("CNPJ");
                setFormData((prev) => ({ ...prev, documento: "" }));
              }}
            >
              CNPJ
            </button>
          </div>
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>
            {tipoDocumento === "CPF" ? "CPF" : "CNPJ"}
          </label>
          <input
            type="text"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            placeholder={`Digite o ${tipoDocumento}`}
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

