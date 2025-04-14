import React, { useState } from "react";
import "../assets/css/FormularioLoja.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CadastroLoja = () => {
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novaLoja = {
      nome: formData.nomeLoja,
      cnpj: formData.cnpj,
      endereco: formData.endereco,
    };

    try {
      const response = await axios.post("https://pmg-es-2025-1-ti2-3740100-znbi.onrender.com/lojas", novaLoja);
      console.log("Loja cadastrada com sucesso:", response.data);
      setMensagem("Loja cadastrada com sucesso!");
      setFormData({ nomeLoja: "", cnpj: "", endereco: "" });
      navigate("/cadastro-gerente");
    } catch (error) {
      console.error("Erro ao cadastrar loja:", error);
      setMensagem("Erro ao cadastrar loja.");
    }
  };

  return (
    <div className="container-formulario">
      <form onSubmit={handleSubmit} className="envoltorio-formulario">
        <h1 className="titulo-formulario">Cadastre sua Loja aqui!</h1>
        <p className="descricao-formulario">
          Se você já possui uma loja cadastrada
          <br />
          Você pode realizar o acesso <span className="texto-azul">aqui!</span>
        </p>

        <div>
          {/* Nome da Loja */}
          <div className="grupo-campo-formulario">
            <label className="rotulo-formulario">Nome da Loja</label>
            <input
              type="text"
              name="nomeLoja"
              value={formData.nomeLoja}
              onChange={handleChange}
              placeholder="Coloque o nome da sua Loja"
              className="entrada-formulario"
            />
          </div>

          {/* CNPJ */}
          <div className="grupo-campo-formulario">
            <label className="rotulo-formulario">CNPJ</label>
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="Coloque o CNPJ da Loja"
              className="entrada-formulario"
            />
          </div>

          {/* Endereço */}
          <div className="grupo-campo-formulario">
            <label className="rotulo-formulario">Endereço</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Coloque o endereço da sua Loja"
              className="entrada-formulario"
            />
          </div>
        </div>

        <button type="submit" className="botao-formulario">
          Avançar
        </button>
      </form>
    </div>
  );
};

export default CadastroLoja;
