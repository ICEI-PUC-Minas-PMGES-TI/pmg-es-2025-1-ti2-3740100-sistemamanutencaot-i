import React from "react";
import "../assets/css/AlterarSenhaAlert.css";
import olhoFechado from "../assets/images/olho-fechado.png";
import olhoAberto from "../assets/images/olho-aberto.png";

const AlterarSenhaAlert = ({ onClose, onUpdateSenha }) => {
  const [senhaVisivel, setSenhaVisivel] = React.useState({
    antiga: false,
    nova: false,
    confirmacao: false,
  });

  const [senhaAntiga, setSenhaAntiga] = React.useState("");
  const [senhaNova, setSenhaNova] = React.useState("");
  const [senhaConfirmacao, setSenhaConfirmacao] = React.useState("");

  const toggleVisibilidade = (campo) => {
    setSenhaVisivel((prev) => ({ ...prev, [campo]: !prev[campo] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!senhaAntiga || !senhaNova || !senhaConfirmacao) {
      alert("Preencha todos os campos");
      return;
    }

    if (senhaNova !== senhaConfirmacao) {
      alert("A nova senha e a confirmação não coincidem");
      return;
    }

    onUpdateSenha(senhaAntiga, senhaNova);
    onClose();
  };

  return (
    <div className="alertOverlay">
      <div className="alertContent">
        <main className="card-alterar-senha">
          <h1 className="titulo-alterar-senha">Alterar Senha</h1>
          <p className="descricao-alterar-senha">
            Adicione abaixo a nova senha a ser cadastrada.
          </p>

          <form className="formulario-alterar-senha" onSubmit={handleSubmit}>
            <CampoSenha
              id="old-password"
              label="Senha antiga:"
              visivel={senhaVisivel.antiga}
              toggle={() => toggleVisibilidade("antiga")}
              icone={senhaVisivel.antiga ? olhoAberto : olhoFechado}
              value={senhaAntiga}
              onChange={setSenhaAntiga}
            />

            <CampoSenha
              id="new-password"
              label="Nova Senha:"
              visivel={senhaVisivel.nova}
              toggle={() => toggleVisibilidade("nova")}
              icone={senhaVisivel.nova ? olhoAberto : olhoFechado}
              value={senhaNova}
              onChange={setSenhaNova}
            />

            <CampoSenha
              id="confirm-password"
              label="Confirmar Senha:"
              visivel={senhaVisivel.confirmacao}
              toggle={() => toggleVisibilidade("confirmacao")}
              icone={senhaVisivel.confirmacao ? olhoAberto : olhoFechado}
              value={senhaConfirmacao}
              onChange={setSenhaConfirmacao}
            />

            <div className="botoes-alterar-senha">
              <button
                type="button"
                className="botao-cancelar"
                onClick={onClose}
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

const CampoSenha = ({ id, label, visivel, toggle, icone, value, onChange }) => (
  <div className="campo-senha">
    <label htmlFor={id} className="label-senha">
      {label}
    </label>
    <div className="input-container">
      <input
        id={id}
        type={visivel ? "text" : "password"}
        className="input-senha"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
      <img
        src={icone}
        alt={visivel ? "Ocultar senha" : "Mostrar senha"}
        className="icone-olho"
        onClick={toggle}
        style={{ cursor: "pointer" }}
      />
    </div>
  </div>
);

export default AlterarSenhaAlert;
