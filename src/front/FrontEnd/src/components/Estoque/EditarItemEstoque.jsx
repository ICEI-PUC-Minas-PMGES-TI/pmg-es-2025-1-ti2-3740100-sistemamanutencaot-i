import React, { useState } from "react";
import styles from "./EditarItemEstoque.module.css";
import axios from "axios";
import Swal from 'sweetalert2';

const EditarItemEstoque = ({ item, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    marca: item.marca,
    modelo: item.modelo,
    estoque: item.estoque,
    segmento: item.segmento,
    preco: item.preco,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'preco' || name === 'estoque' ? Number(value) : value 
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/pecas/${item.id}`, formData);
      onUpdate({
        ...formData,
        id: item.id
      });
      Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Item atualizado com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: `Não foi possível atualizar o item: ${error.response?.data?.message || error.message}`
      });
    }
  };

  return (
    <div className={styles.containerFormulario}>
      <form onSubmit={handleSubmit} className={styles.envoltorioFormulario}>
        <h1 className={styles.tituloFormulario}>Editar Item</h1>
        <p className={styles.descricaoFormulario}>
          Atualize as informações do item para manter o 
          <span className={styles.textoAzul}> estoque atualizado</span>
        </p>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Marca</label>
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className={styles.entradaFormulario}
            placeholder="Digite a marca do item"
            required
          />
        </div>
        
        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Modelo</label>
          <input
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
            className={styles.entradaFormulario}
            placeholder="Digite o modelo do item"
            required
          />
        </div>
        
        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Quantidade</label>
          <input
            type="number"
            name="estoque"
            value={formData.estoque}
            onChange={handleChange}
            className={styles.entradaFormulario}
            placeholder="Digite a quantidade em estoque"
            required
            min="0"
          />
        </div>
        
        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Segmento</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="segmento"
                value="Notebook"
                checked={formData.segmento === "Notebook"}
                onChange={handleChange}
              />
              Notebook
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="segmento"
                value="Computador"
                checked={formData.segmento === "Computador"}
                onChange={handleChange}
              />
              Computador
            </label>
            <label className={styles.radioOption}>
              <input
                type="radio"
                name="segmento"
                value="Outros"
                checked={formData.segmento === "Outros"}
                onChange={handleChange}
              />
              Outros
            </label>
          </div>
        </div>
        
        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Preço (R$)</label>
          <input
            type="number"
            name="preco"
            step="0.01"
            value={formData.preco}
            onChange={handleChange}
            className={styles.entradaFormulario}
            placeholder="Digite o preço do item"
            required
            min="0"
          />
        </div>

        <div className={styles.botoesFormulario}>
          <button 
            type="button" 
            className={styles.botaoCancelar}
            onClick={onClose}
          >
            Cancelar
          </button>
          <button type="submit" className={styles.botaoSalvar}>
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditarItemEstoque;