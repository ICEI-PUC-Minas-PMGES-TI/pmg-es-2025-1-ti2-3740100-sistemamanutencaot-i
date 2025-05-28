// AdicionarAlert.jsx
import React, { useState } from "react";
import "./AdicionarAlert.css";

const AddItemForm = ({ onClose, onAddItem }) => {
  const [formData, setFormData] = useState({
    nome: "",
    marca: "",
    modelo: "",
    segmento: "computador",
    quantidade: "",
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
    onAddItem(formData);
  };

  return (
    <div className="form-card">
      <h1 className="form-title">Adicionar novo Item</h1>
      <hr className="form-divider" />

      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <label htmlFor="nome" className="input-label">
          Nome do Item:
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Adicione o nome do Item..."
          className="form-input"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="marca" className="input-label">
          <b>Marca:</b>
        </label>
        <input
          id="marca"
          name="marca"
          type="text"
          placeholder="Adicione a marca do produto..."
          className="form-input"
          value={formData.marca}
          onChange={handleChange}
          required
        />

        <label htmlFor="modelo" className="input-label">
          <b>Modelo:</b>
        </label>
        <input
          id="modelo"
          name="modelo"
          type="text"
          placeholder="Adicione o modelo do produto..."
          className="form-input"
          value={formData.modelo}
          onChange={handleChange}
          required
        />

        <p className="radio-label">Selecionar seguimento:</p>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="segmento"
              value="notebook"
              className="radio-input"
              checked={formData.segmento === "notebook"}
              onChange={handleChange}
            />
            <span>Notebook</span>
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="segmento"
              value="computador"
              className="radio-input accent"
              checked={formData.segmento === "computador"}
              onChange={handleChange}
            />
            <span>Computador</span>
          </label>
        </div>

        <label htmlFor="quantidade" className="input-label">
          Quantidade:
        </label>
        <input
          id="quantidade"
          name="quantidade"
          type="number"
          placeholder="Adicione a quantidade..."
          className="form-input"
          value={formData.quantidade}
          onChange={handleChange}
          min="1"
          required
        />

        <div className="button-group">
          <button type="button" className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button type="submit" className="submit-button">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItemForm;
