import React from "react";
import "../assets/css/AlterarSenhaAlert.css";
import olhoFechado from "../assets/images/olho-fechado.png";
import olhoAberto from "../assets/images/olho-aberto.png";

const AlterarEnderecoAlert = ({ onClose }) => {
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <main className="card-alterar-senha">
          <h1 className="titulo-alterar-senha">Alterar Endereço</h1>
          <p className="descricao-alterar-senha">
            Digite o novo endereço e confirme com sua senha atual.
          </p>

          <form className="formulario-alterar-senha">
            <div className="campo-senha">
              <label className="label-senha">Novo Endereço:</label>
              <div className="input-container">
                <input
                  type="text"
                  className="input-senha"
                  placeholder="Rua, Número - Bairro"
                />
              </div>
            </div>

            <div className="campo-senha">
              <label className="label-senha">Senha:</label>
              <div className="input-container">
                <input
                  type={mostrarSenha ? "text" : "password"}
                  className="input-senha"
                />
                <img
                  src={mostrarSenha ? olhoAberto : olhoFechado}
                  alt="Visibilidade da senha"
                  className="icone-olho"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
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
