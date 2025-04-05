import React, { useState } from "react";
import "../assets/css/FormularioLoja.css";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <h1 className="form-title">Cadastre sua Loja aqui!</h1>
        <p className="form-description">
          Se você já possui uma loja cadastrada
          <br />
          Você pode realizar o acesso aqui !
        </p>

        <div className="form-fields">
          {/* Nome da Loja */}
          <div className="form-field-group">
            <label className="form-label">Nome da Loja</label>
            <input
              type="text"
              name="nomeLoja"
              value={formData.nomeLoja}
              onChange={handleChange}
              placeholder="Coloque o nome da sua Loja"
              className="form-input"
            />
          </div>

          {/* CNPJ */}
          <div className="form-field-group">
            <label className="form-label">CNPJ</label>
            <input
              type="text"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              placeholder="Coloque o CNPJ da Loja"
              className="form-input"
            />
          </div>

          {/* Endereço */}
          <div className="form-field-group">
            <label className="form-label">Endereço</label>
            <input
              type="text"
              name="endereco"
              value={formData.endereco}
              onChange={handleChange}
              placeholder="Coloque o endereço da sua Loja"
              className="form-input"
            />
          </div>
        </div>

        <button type="submit" className="form-button">
          Avançar
        </button>
      </form>
    </div>
  );
};

export default CadastroLoja;
