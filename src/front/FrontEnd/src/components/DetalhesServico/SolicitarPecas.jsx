import React, { useState } from "react";
import "./SolicitarPecas.css";
import axios from "axios";

export default function SolicitarPecas({ onClose, ordemId }) {
  // NOVA LÓGICA (mantendo a antiga comentada abaixo)
  const [pecas, setPecas] = useState([
    { componente: "", marca: "", modelo: "", quantidade: 1 },
  ]);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState(false);

  const handleChange = (idx, field, value) => {
    setPecas((prev) =>
      prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p))
    );
  };

  const handleAdd = () => {
    setPecas((prev) => [
      ...prev,
      { componente: "", marca: "", modelo: "", quantidade: 1 },
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
      // Integração com backend: envia as peças para a ordem de serviço
      await axios.post(
        `http://localhost:8080/ordem-servicos/${ordemId}/solicitar-pecas`,
        pecas
      );
      setSucesso(true);
      setPecas([{ componente: "", marca: "", modelo: "", quantidade: 1 }]);
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
              <select
                aria-label="Selecionar componente"
                value={peca.componente}
                onChange={(e) => handleChange(idx, "componente", e.target.value)}
                required
              >
                <option value="" disabled>
                  Selecionar componente
                </option>
                <option>Memória RAM</option>
                <option>Placa de Vídeo</option>
                <option>Cooler</option>
              </select>
              <input
                type="text"
                placeholder="Marca:"
                value={peca.marca}
                onChange={(e) => handleChange(idx, "marca", e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Modelo:"
                value={peca.modelo}
                onChange={(e) => handleChange(idx, "modelo", e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Quantidade:"
                min={1}
                value={peca.quantidade}
                onChange={(e) =>
                  handleChange(idx, "quantidade", Number(e.target.value))
                }
                required
                style={{ width: 80 }}
              />
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
        {/*
        // LÓGICA ANTIGA (mantida para referência)
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
        */}
      </div>
    </div>
  );
}
