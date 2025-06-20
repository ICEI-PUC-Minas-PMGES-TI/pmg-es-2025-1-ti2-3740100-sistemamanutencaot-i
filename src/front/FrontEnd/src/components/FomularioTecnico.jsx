import React, { useState } from "react";
import styles from "../assets/css/FormularioTecnico.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Importar SweetAlert2

const FormularioTecnico = () => {
  const [formData, setFormData] = useState({
    nomeTecnico: "",
    cpf: "",
    email: "",
    senha: "",
  });

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const { idLoja } = location.state || {};
  const idLojaFinal = idLoja || localStorage.getItem("id_loja");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let valorFinal = value;

    if (name === "nomeTecnico") {
      // Permitir apenas letras (maiúsculas, minúsculas) e espaços
      valorFinal = valorFinal.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    } else if (name === "cpf") {
      // Remove tudo que não for número e limita a 11 dígitos
      valorFinal = value.replace(/\D/g, "").slice(0, 11);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: valorFinal,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idLojaFinal) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: "ID da loja não informado.",
      });
      return;
    }

    const { nomeTecnico, cpf, email, senha } = formData;

    // Validação de nome: pelo menos 3 letras e só letras/ espaços
    if (!nomeTecnico || nomeTecnico.trim().length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Nome inválido",
        text: "O nome deve ter pelo menos 3 caracteres.",
      });
      return;
    }

    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(nomeTecnico)) {
      Swal.fire({
        icon: "warning",
        title: "Nome inválido",
        text: "O nome deve conter apenas letras e espaços.",
      });
      return;
    }

    // Validação de CPF
    if (cpf.length !== 11) {
      Swal.fire({
        icon: "warning",
        title: "CPF inválido",
        text: "O CPF deve conter exatamente 11 números.",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "warning",
        title: "Email inválido",
        text: "Por favor, insira um email válido.",
      });
      return;
    }

    // Validação de senha
    if (senha.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Senha muito curta",
        text: "A senha deve ter pelo menos 6 caracteres.",
      });
      return;
    }

    // Validação de cargo
    if (!opcaoSelecionada) {
      Swal.fire({
        icon: "warning",
        title: "Cargo não selecionado",
        text: "Por favor, selecione um cargo.",
      });
      return;
    }

    // Enviar ao backend se estiver tudo válido
    try {
      const novoTecnico = {
        nome: nomeTecnico,
        cpf: cpf,
        email: email,
        senha: senha,
        cargo: opcaoSelecionada,
        loja: {
          id: idLojaFinal,
        },
      };

      await axios.post("http://localhost:8080/tecnicos", novoTecnico);

      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Técnico cadastrado com sucesso.",
        showConfirmButton: false,
        timer: 2000,
      });

      setFormData({ nomeTecnico: "", cpf: "", email: "", senha: "" });
      setOpcaoSelecionada("");

      setTimeout(() => {
        navigate("/home-gerente");
      }, 2000);
    } catch (error) {
      console.error("Erro ao cadastrar técnico:", error);
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
        <h1 className={styles.tituloFormulario}>Cadastrar novo Técnico</h1>
        <p className={styles.descricaoFormulario}>
          Adicione um novo técnico à equipe e permita que ele acompanhe e{" "}
          <span className={styles.textoAzul}>atualize</span> os{" "}
          <span className={styles.textoAzul}>reparos</span> com facilidade!
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
          <label className={styles.rotuloFormulario}>CPF</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            placeholder="Digite apenas números do CPF"
            className={styles.entradaFormulario}
            required
            inputMode="numeric"
            maxLength={11}
          />
          <p className={styles.dicaCampo}>Máximo de 11 dígitos</p>
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
          <label className={styles.rotuloFormulario}>Senha de login</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              placeholder="Coloque a senha do técnico"
              className={styles.entradaFormulario}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={styles.botaoMostrar}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>
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
      </form>
    </div>
  );
};

export default FormularioTecnico;