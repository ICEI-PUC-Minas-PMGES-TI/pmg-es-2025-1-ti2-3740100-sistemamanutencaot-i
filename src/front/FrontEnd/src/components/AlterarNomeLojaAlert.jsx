import React, { useState } from "react";
import "../assets/css/AlterarSenhaAlert.css";
import olhoFechado from "../assets/images/olho-fechado.png";
import olhoAberto from "../assets/images/olho-aberto.png";

const AlterarNomeLojaAlert = ({ onClose, onUpdate }) => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!novoNome.trim()) {
      alert("Informe um novo nome válido.");
      return;
    }
    if (!senhaAtual) {
      alert("Informe sua senha atual para confirmar.");
      return;
    }

    onUpdate(novoNome.trim(), senhaAtual);
    onClose();
  };

  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <main className="card-alterar-senha">
          <h1 className="titulo-alterar-senha">Alterar Nome</h1>
          <p className="descricao-alterar-senha">
            Digite o novo nome e confirme com sua senha atual.
          </p>

          <form className="formulario-alterar-senha" onSubmit={handleSubmit}>
            <div className="campo-senha">
              <label className="label-senha">Novo Nome:</label>
              <div className="input-container">
                <input
                  type="text"
                  className="input-senha"
                  placeholder="Novo nome"
                  value={novoNome}
                  onChange={(e) => setNovoNome(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="campo-senha">
              <label className="label-senha">Senha:</label>
              <div className="input-container">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  className="input-senha"
                  value={senhaAtual}
                  onChange={(e) => setSenhaAtual(e.target.value)}
                  required
                />
                <img
                  src={mostrarSenha ? olhoAberto : olhoFechado}
                  alt="Visibilidade da senha"
                  className="icone-olho"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <div className="botoes-alterar-senha">
              <button
                type="button"
                className="botao-cancelar"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button type="submit" className="botao-confirmar">
                Alterar Nome
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AlterarNomeLojaAlert;
