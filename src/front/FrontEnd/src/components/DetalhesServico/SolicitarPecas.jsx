import React, { useState } from "react";
import "./SolicitarPecas.css";
import axios from "axios";

export default function SolicitarPecas({ onClose }) {
  const [pecas, setPecas] = useState([
    {
      nome: "",
      modelo: "",
      marca: "",
      segmento: "",
      preco: 0.0,
      quantidade: 1,
      tipo: "Requisição",
      estoque: 0,
    },
  ]);

  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (idx, field, value) => {
    setPecas((prev) =>
      prev.map((p, i) =>
        i === idx ? { ...p, [field]: value, tipo: "Requisição", estoque: 0 } : p
      )
    );
  };

  const handleAdd = () => {
    setPecas((prev) => [
      ...prev,
      {
        nome: "",
        modelo: "",
        marca: "",
        segmento: "",
        preco: 0.0,
        quantidade: 1,
        tipo: "Requisição",
        estoque: 0,
      },
    ]);
  };

  const handleRemove = (idx) => {
    setPecas((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setSucesso(false);
    setEnviando(true);
    try {
      // Envia todas as peças em paralelo
      await Promise.all(
        pecas.map((peca) =>
          axios.post("http://localhost:8080/pecas", peca, {
            headers: {
              "Content-Type": "application/json",
            },
          })
        )
      );
      setSucesso(true);
      setPecas([
        {
          nome: "",
          modelo: "",
          marca: "",
          segmento: "",
          preco: 0.0,
          quantidade: 1,
          tipo: "Requisição",
          estoque: 0,
        },
      ]);
    } catch (err) {
      setErro("Erro ao enviar solicitação. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className="solicitar-container">
      <div className="solicitar-card">
        <button className="close-button" aria-label="Fechar" onClick={onClose}>
          ×
        </button>
        <h1 className="solicitar-title">Solicitar Peças</h1>
        <form className="solicitar-form" onSubmit={handleSubmit}>
          {pecas.map((peca, idx) => (
            <div className="form-row" key={idx}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <input
                  type="text"
                  placeholder="Nome"
                  value={peca.nome}
                  onChange={(e) => handleChange(idx, "nome", e.target.value)}
                  required
                  style={{ flex: "1 1 45%" }}
                />
                <input
                  type="text"
                  placeholder="Modelo"
                  value={peca.modelo}
                  onChange={(e) => handleChange(idx, "modelo", e.target.value)}
                  required
                  style={{ flex: "1 1 45%" }}
                />
                <input
                  type="text"
                  placeholder="Marca"
                  value={peca.marca}
                  onChange={(e) => handleChange(idx, "marca", e.target.value)}
                  required
                  style={{ flex: "1 1 45%" }}
                />
                <input
                  type="text"
                  placeholder="Segmento"
                  value={peca.segmento}
                  onChange={(e) => handleChange(idx, "segmento", e.target.value)}
                  style={{ flex: "1 1 45%" }}
                />
              </div>
              {pecas.length > 1 && (
                <button
                  type="button"
                  className="remove-peca-btn"
                  onClick={() => handleRemove(idx)}
                  aria-label="Remover peça"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <div className="form-row">
            <button type="button" onClick={handleAdd} className="add-peca-btn">
              + Adicionar peça
            </button>
          </div>
          <div className="submit-container">
            <button type="submit" disabled={enviando}>
              {enviando ? "Enviando..." : "Enviar Solicitação"}
            </button>
          </div>
          {erro && <div className="erro">{erro}</div>}
          {sucesso && (
            <div className="sucesso">Solicitação enviada com sucesso!</div>
          )}
        </form>
      </div>
    </div>
  );
}
