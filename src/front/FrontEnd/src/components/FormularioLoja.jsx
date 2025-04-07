import React, { useState } from "react";
import "../assets/css/FormularioLoja.css";
import { useNavigate } from "react-router-dom"; // Importe o hook de navegação

const CadastroLoja = () => {
  const navigate = useNavigate(); // Inicialize o hook
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados
    console.log(formData);

    // Redirecionamento após o submit
    navigate("/cadastro-gerente"); // Altere para usar o hook de navegação
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

        <div className="form-fields">
          {/* Campos do formulário (mantidos iguais) */}
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

        {/* Botão modificado */}
        <button type="submit" className="botao-formulario">
          Avançar
        </button>
      </form>
    </div>
  );
};

export default CadastroLoja;
