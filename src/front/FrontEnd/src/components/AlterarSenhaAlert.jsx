import React, { useState } from "react";
import "../assets/css/AlterarSenhaAlert.css";
import olhoFechado from "../assets/images/olho-fechado.png";
import olhoAberto from "../assets/images/olho-aberto.png";

const AlterarSenhaAlert = ({ field, onClose }) => {
  const [senhaVisivel, setSenhaVisivel] = React.useState({
    antiga: false,
    nova: false,
    confirmacao: false,
  });

  const toggleVisibilidade = (campo) => {
    setSenhaVisivel((prev) => ({ ...prev, [campo]: !prev[campo] }));
  };

  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <main className="card-alterar-senha">
          <h1 className="titulo-alterar-senha">Alterar Senha</h1>
          <p className="descricao-alterar-senha">
            Adicione abaixo a nova senha a ser cadastrada.
          </p>

          <form className="formulario-alterar-senha">
            <CampoSenha
              id="old-password"
              label="Senha antiga:"
              visivel={senhaVisivel.antiga}
              toggle={() => toggleVisibilidade("antiga")}
              icone={senhaVisivel.antiga ? olhoAberto : olhoFechado} // Alterado aqui
            />

            <CampoSenha
              id="new-password"
              label="Nova Senha:"
              visivel={senhaVisivel.nova}
              toggle={() => toggleVisibilidade("nova")}
              icone={senhaVisivel.nova ? olhoAberto : olhoFechado} // Alterado aqui
            />

            <CampoSenha
              id="confirm-password"
              label="Confirmar Senha:"
              visivel={senhaVisivel.confirmacao}
              toggle={() => toggleVisibilidade("confirmacao")}
              icone={senhaVisivel.confirmacao ? olhoAberto : olhoFechado} // Alterado aqui
            />

            <div className="botoes-alterar-senha">
              <button
                type="button"
                className="botao-cancelar"
                onClick={onClose} // Adicionado o onClose aqui
              >
                Cancelar
              </button>
              <button type="submit" className="botao-confirmar">
                Alterar
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};

const CampoSenha = ({ id, label, visivel, toggle, icone }) => (
  <div className="campo-senha">
    <label htmlFor={id} className="label-senha">
      {label}
    </label>
    <div className="input-container">
      <input
        id={id}
        type={visivel ? "text" : "password"}
        className="input-senha"
      />
      <img
        src={icone} // Já está usando a imagem correta baseada no estado
        alt={visivel ? "Ocultar senha" : "Mostrar senha"}
        className="icone-olho"
        onClick={toggle}
      />
    </div>
  </div>
);

export default AlterarSenhaAlert;
