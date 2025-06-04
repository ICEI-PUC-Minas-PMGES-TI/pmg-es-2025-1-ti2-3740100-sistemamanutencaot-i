import React from "react";
import "./SolicitarPecas.css";

export default function SolicitarPecas({ onClose }) {
  return (
    <div className="solicitar-container">
      <div className="solicitar-card">
        <button className="close-button" aria-label="Fechar" onClick={onClose}>
          ×
        </button>

        <h1 className="solicitar-title">Solicitar Peças</h1>
        <p className="solicitar-subtitle">Selecionar componente:</p>

        <form className="solicitar-form">
          <div className="form-row">
            <select aria-label="Selecionar componente" defaultValue="">
              <option value="" disabled>
                Selecionar componente
              </option>
              <option>Memória RAM</option>
              <option>Placa de Vídeo</option>
              <option>Cooler</option>
            </select>
            <input type="text" placeholder="Marca:" />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Modelo:" />
            <input type="text" placeholder="Quantidade:" />
          </div>

          <table className="pecas-tabela">
            <thead>
              <tr>
                <th>Componente</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Quantidade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Memória RAM</td>
                <td>Kingston</td>
                <td>DDR4 2666hz</td>
                <td>2</td>
                <td className="icon-cell">×</td>
              </tr>
              <tr>
                <td>Placa de Vídeo</td>
                <td>NVIDIA</td>
                <td>RTX 3060 8GB</td>
                <td>1</td>
                <td className="icon-cell">×</td>
              </tr>
              <tr>
                <td>Cooler</td>
                <td>Rise Mode</td>
                <td>RM-XLD-RGB</td>
                <td>4</td>
                <td className="icon-cell">×</td>
              </tr>
            </tbody>
          </table>

          <div className="submit-container">
            <button type="submit">
              Enviar
              <br />
              Solicitação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
