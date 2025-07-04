// AdicionarAlert.jsx
import React, { useState } from "react";
import "./AdicionarAlert.css";

const AddItemForm = ({ onClose, onAddItem }) => {
  const [formData, setFormData] = useState({
    codigo: "", // Novo campo: código único da peça
    tipo: "",
    marca: "",
    modelo: "",
    segmento: "computador",
    quantidade: "",
    preco: ""
  });

  // Tipos de peças pré-definidos
  const tiposDePecas = [
    "Processador",
    "Memória RAM",
    "Placa de Vídeo",
    "Placa Mãe",
    "Armazenamento (SSD/HDD)",
    "Fonte",
    "Gabinete",
    "Cooler",
    "Monitor",
    "Teclado",
    "Mouse",
    "Headset",
    "Outros"
  ];

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
        {/* Campo Código (novo) */}
        

        {/* Campo Tipo: agora é um select */}
        <label htmlFor="tipo" className="input-label">
          Tipo do Item:
        </label>
        <select
          id="tipo"
          name="tipo"
          className="form-input"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="">Selecione um tipo</option>
          {tiposDePecas.map((tipo, index) => (
            <option key={index} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>

        <label htmlFor="marca" className="input-label">
          Marca:
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
          Modelo:
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

        <label htmlFor="preco" className="input-label">
          Preço (R$):
        </label>
        <input
          id="preco"
          name="preco"
          type="number"
          step="0.01"
          min="0"
          placeholder="Adicione o preço do produto..."
          className="form-input"
          value={formData.preco}
          onChange={handleChange}
          required
        />

        <p className="radio-label">Selecionar segmento:</p>
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
          <label className="radio-option">
            <input
              type="radio"
              name="segmento"
              value="outros"
              className="radio-input"
              checked={formData.segmento === "outros"}
              onChange={handleChange}
            />
            <span>Outros</span>
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