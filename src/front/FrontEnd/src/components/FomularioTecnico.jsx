import React, { useState } from "react";
import styles from "../assets/css/FormularioTecnico.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

const FormularioTecnico = () => {
  const [formData, setFormData] = useState({
    nomeTecnico: "",
    cpf: "",
    email: "",
    senha: "",
  });

  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

    const novoTecnico = {
      nome: formData.nomeTecnico,
      cpf: formData.cpf,
      email: formData.email,
      senha: formData.senha,
      cargo: opcaoSelecionada,
      loja: {
        id: 1,
      },
    };

    try {
      const tecnicoResponse = await axios.post("http://localhost:8080/tecnicos", novoTecnico);
      console.log("Técnico cadastrado com sucesso:", tecnicoResponse.data);
      setMensagem("Técnico cadastrado com sucesso!");
      setFormData({ nomeTecnico: "", cpf: "", email: "", senha: "" });
      setOpcaoSelecionada("");
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Erro ao cadastrar técnico:", error);
      setMensagem(`Erro ao cadastrar técnico: ${error.response?.data?.message || error.message}`);
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
            placeholder="Coloque o cpf do técnico"
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

        {mensagem && (
          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensagem}</p>
        )}
      </form>
    </div>
  );
};

export default FormularioTecnico;
