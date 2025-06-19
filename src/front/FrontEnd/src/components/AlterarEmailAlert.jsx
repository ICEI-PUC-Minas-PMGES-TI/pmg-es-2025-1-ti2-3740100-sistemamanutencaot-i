import React, { useState } from "react";
import "../assets/css/AlterarSenhaAlert.css";
import olhoFechado from "../assets/images/olho-fechado.png";
import olhoAberto from "../assets/images/olho-aberto.png";

const AlterarEmailAlert = ({ onClose, onUpdate }) => {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [novoEmail, setNovoEmail] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você pode validar os dados (ex: formato do email, senha não vazia, etc)
    if (!novoEmail) {
      alert("Informe um novo email válido.");
      return;
    }
    if (!senhaAtual) {
      alert("Informe sua senha atual para confirmar.");
      return;
    }

    // Passa o novo email para o pai atualizar o estado
    onUpdate(novoEmail, senhaAtual);

    // Fecha o alerta
    onClose();
  };

  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <main className="card-alterar-senha">
          <h1 className="titulo-alterar-senha">Alterar Email</h1>
          <p className="descricao-alterar-senha">
            Digite o novo email e confirme com sua senha atual.
          </p>

          <form className="formulario-alterar-senha" onSubmit={handleSubmit}>
            <div className="campo-senha">
              <label className="label-senha">Novo Email:</label>
              <div className="input-container">
                <input
                  type="email"
                  className="input-senha"
                  placeholder="novo@email.com"
                  value={novoEmail}
                  onChange={(e) => setNovoEmail(e.target.value)}
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
                Alterar Email
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

export default AlterarEmailAlert;
