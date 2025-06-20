import React, { useState } from "react";
import styles from "./FormularioCliente.module.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const FormularioCliente = () => {
  const [formData, setFormData] = useState({
    nomeCliente: "",
    documento: "",
    telefone: "",
  });

  const [tipoDocumento, setTipoDocumento] = useState("CPF");

  const location = useLocation();
  const { idLoja } = location.state || {};
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    let valorFinal = value;

    if (name === "nomeCliente") {
      // Permitir apenas letras (maiúsculas, minúsculas) e espaços
      valorFinal = valorFinal.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    } else if (name === "documento" || name === "telefone") {
      valorFinal = value.replace(/\D/g, ""); // Remove tudo que não for número

      if (name === "documento") {
        valorFinal = valorFinal.slice(0, tipoDocumento === "CPF" ? 11 : 14);
      } else if (name === "telefone") {
        valorFinal = valorFinal.slice(0, 11);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: valorFinal,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nomeCliente, documento, telefone } = formData;

    // Validação de nome: pelo menos 3 letras e só letras/ espaços
    if (!nomeCliente || nomeCliente.trim().length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Nome inválido",
        text: "O nome deve ter pelo menos 3 caracteres.",
      });
      return;
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeCliente)) {
      Swal.fire({
        icon: "warning",
        title: "Nome inválido",
        text: "O nome deve conter apenas letras e espaços.",
      });
      return;
    }

    // Validação de nome
    if (!nomeCliente || nomeCliente.trim().length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Nome inválido",
        text: "O nome deve ter pelo menos 3 caracteres.",
      });
      return;
    }

    // Validação de CPF ou CNPJ
    if (tipoDocumento === "CPF" && documento.length !== 11) {
      Swal.fire({
        icon: "warning",
        title: "CPF inválido",
        text: "O CPF deve conter exatamente 11 números.",
      });
      return;
    }

    if (tipoDocumento === "CNPJ" && documento.length !== 14) {
      Swal.fire({
        icon: "warning",
        title: "CNPJ inválido",
        text: "O CNPJ deve conter exatamente 14 números.",
      });
      return;
    }

    // Validação de telefone
    if (telefone.length !== 11) {
      Swal.fire({
        icon: "warning",
        title: "Telefone inválido",
        text: "O telefone deve conter exatamente 11 números (DDD + número).",
      });
      return;
    }

    // Enviar ao backend se estiver tudo válido
    try {
      const novoCliente = {
        nome: nomeCliente,
        tipoPessoa: tipoDocumento === "CPF" ? "PF" : "PJ",
        [tipoDocumento.toLowerCase()]: documento,
        telefone: telefone,
      };

      await axios.post("http://localhost:8080/clientes", novoCliente);

      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Cliente cadastrado com sucesso.",
        showConfirmButton: false,
        timer: 2000,
      });

      setFormData({ nomeCliente: "", documento: "", telefone: "" });

      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar cliente:", error);
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: error.response?.data?.message || error.message,
      });
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
            placeholder={`Digite apenas números do ${tipoDocumento}`}
            className={styles.entradaFormulario}
            required
            inputMode="numeric"
            maxLength={tipoDocumento === "CPF" ? 11 : 14}
          />
          <p className={styles.dicaCampo}>
            Máximo de {tipoDocumento === "CPF" ? "11" : "14"} dígitos
          </p>
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Telefone</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Digite apenas números com DDD"
            className={styles.entradaFormulario}
            required
            inputMode="numeric"
            maxLength={11}
          />
          <p className={styles.dicaCampo}>Máximo de 11 dígitos (DDD + número)</p>
        </div>

        <button type="submit" className={styles.botaoFormulario}>
          Cadastrar Cliente
        </button>
      </form>
    </div>
  );
};

export default FormularioCliente;
