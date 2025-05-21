import React from "react";
import "./NovaOrdemServico.css";

const NovaOrdemServico = () => {
  return (
    <div className="container">
      <form className="form-container">
        <h1 className="form-title">
          Nova Ordem de
          <br />
          Serviço
        </h1>

        <hr className="form-divider" />

        <div className="form-group">
          <label className="input-label" htmlFor="cliente">
            Cliente
          </label>
          <input
            className="text-input"
            id="cliente"
            name="cliente"
            placeholder="Adicione o cliente na Ordem de serviço..."
            type="text"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="input-label" htmlFor="tipo-maquina">
              Tipo de Máquina
            </label>
            <div className="select-container">
              <select
                className="select-input"
                id="tipo-maquina"
                name="tipo-maquina"
              >
                <option disabled selected>
                  Selecione o tipo
                </option>
                <option>Tipo 1</option>
                <option>Tipo 2</option>
                <option>Tipo 3</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="prazo-diagnostico">
              Prazo para o Diagnóstico:
            </label>
            <div className="date-container">
              <input
                className="date-input"
                id="prazo-diagnostico"
                name="prazo-diagnostico"
                type="date"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="input-label" htmlFor="descricao-problema">
            Descrição do Problema:
          </label>
          <textarea
            className="textarea-input"
            id="descricao-problema"
            name="descricao-problema"
            placeholder="Descreva o problema aqui..."
            rows="5"
          ></textarea>
        </div>

        <div className="button-group">
          <button className="cancel-button" type="button">
            Cancelar
          </button>
          <button className="submit-button" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaOrdemServico;
