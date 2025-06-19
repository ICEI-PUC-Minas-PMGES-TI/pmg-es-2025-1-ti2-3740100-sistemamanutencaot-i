import React, { useState } from "react";
import "../assets/css/AlterarSenhaAlert.css";
import olhoFechado from "../assets/images/olho-fechado.png";
import olhoAberto from "../assets/images/olho-aberto.png";

const AlterarEnderecoAlert = ({ onClose, onUpdate }) => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [novoEndereco, setNovoEndereco] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!novoEndereco) {
      alert("Informe um novo endereço válido.");
      return;
    }
    if (!senhaAtual) {
      alert("Informe sua senha atual para confirmar.");
      return;
    }

    onUpdate(novoEndereco, senhaAtual);
    onClose();
  };

  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <main className="card-alterar-senha">
          <h1 className="titulo-alterar-senha">Alterar Endereço</h1>
          <p className="descricao-alterar-senha">
            Digite o novo endereço e confirme com sua senha atual.
          </p>

          <form className="formulario-alterar-senha" onSubmit={handleSubmit}>
            <div className="campo-senha">
              <label className="label-senha">Novo Endereço:</label>
              <div className="input-container">
                <input
                  type="text"
                  className="input-senha"
                  placeholder="Rua, Número - Bairro"
                  value={novoEndereco}
                  onChange={(e) => setNovoEndereco(e.target.value)}
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
                Alterar Endereço
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AlterarEnderecoAlert;
