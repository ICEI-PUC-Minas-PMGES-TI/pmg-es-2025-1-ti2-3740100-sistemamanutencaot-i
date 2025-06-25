import React, { useState } from "react";
import "./MaoDeObra.css"; // ajuste o CSS

export default function MaodeObra({ onClose, onConfirm }) {
  const [valorMaoDeObra, setValorMaoDeObra] = useState("");

  const handleConfirm = () => {
    const valor = parseFloat(valorMaoDeObra);
    if (isNaN(valor) || valor < 0) {
      alert("Digite um valor válido para a mão de obra.");
      return;
    }
    onConfirm(valor);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>Valor da Mão de Obra</h2>
        <input
          type="number"
          placeholder="Digite o valor"
          value={valorMaoDeObra}
          onChange={(e) => setValorMaoDeObra(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={handleConfirm}>Confirmar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
}
