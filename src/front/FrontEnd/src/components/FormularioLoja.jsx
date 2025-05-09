import React, { useState } from "react";
import styles from "../assets/css/FormularioLoja.module.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const FormularioLoja = () => {
  const location = useLocation();
  const { idUsuario } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomeLoja: "",
    cnpj: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaLoja = {
      nome: formData.nomeLoja,
      cnpj: formData.cnpj,
      endereco: formData.endereco,
      usuario: { id: idUsuario },
    };

    try {
      const response = await axios.post(
        "https://pmg-es-2025-1-ti2-3740100-znbi.onrender.com/lojas",
        novaLoja
      );
      console.log("Loja cadastrada com sucesso:", response.data);
      setMensagem("Loja cadastrada com sucesso!");
      alert("Loja cadastrada com sucesso!");
      setFormData({ nomeLoja: "", cnpj: "", endereco: "" });
      navigate("/cadastro-tecnico")
    } catch (error) {
      console.error("Erro ao cadastrar loja:", error);
      setMensagem("Erro ao cadastrar loja.");
      alert("Erro ao cadastrar loja. Por favor, tente novamente.");
    }
  };

  return (
    <div className={styles.containerFormulario}>
      <form onSubmit={handleSubmit} className={styles.envoltorioFormulario}>
        <h1 className={styles.tituloFormulario}>Cadastre sua Loja aqui!</h1>
        <p className={styles.descricaoFormulario}>
          Se você já possui uma loja cadastrada
          <br />
          Você pode realizar o acesso{" "}
          <span className={styles.textoAzul}>aqui!</span>
        </p>

        <div>
          <div className={styles.grupoCampoFormulario}>
            <label className={styles.rotuloFormulario}>Nome da Loja</label>
            <input
              type="text"
              name="nomeLoja"
              value={formData.nomeLoja}
              onChange={handleChange}
              placeholder="Coloque o nome da sua Loja"
              className={styles.entradaFormulario}
              required
            />
          </div>

          <div className={styles.grupoCampoFormulario}>
            <label className={styles.rotuloFormulario}>CNPJ</label>
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="Coloque o CNPJ da Loja"
              className={styles.entradaFormulario}
              required
            />
          </div>

          <div className={styles.grupoCampoFormulario}>
            <label className={styles.rotuloFormulario}>Endereço</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Coloque o endereço da sua Loja"
              className={styles.entradaFormulario}
              required
            />
          </div>
        </div>

        <button type="submit" className={styles.botaoFormulario}>
          Avançar
        </button>
      </form>
    </div>
  );
};

export default FormularioLoja;