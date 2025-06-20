import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../assets/css/PainelConfig.module.css";
import edit from "../assets/images/edit.png";
import AlterarSenhaAlert from "./AlterarSenhaAlert";
import AlterarEmailAlert from "./AlterarEmailAlert";
import AlterarEnderecoAlert from "./AlterarEnderecoAlert";
import AlterarNomeLojaAlert from "./AlterarNomeLojaAlert";

function PainelConfig() {
  const [showAlert, setShowAlert] = useState(false);
  const [selectedField, setSelectedField] = useState("");
  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const [dadosUsuario, setDadosUsuario] = useState({
    email: "",
    nome: "",
    endereco: "",
    // outros campos se necessário
  });

  useEffect(() => {
    if (tipoUsuario === "tecnico") {
      const idTecnico = localStorage.getItem("id_tecnico");

      if (!idTecnico) {
        console.error("id_tecnico não encontrado");
        return;
      }

      axios
        .get(`http://localhost:8080/tecnicos/${idTecnico}`)
        .then((res) => setDadosUsuario(res.data))
        .catch(() =>
          setDadosUsuario({
            nome: "Erro ao carregar",
            email: "Erro ao carregar",
            especialidade: "Erro ao carregar",
          })
        );
    } else {
      const idLoja = localStorage.getItem("id_loja");

      if (!idLoja) {
        console.error("id_loja não encontrado");
        return;
      }

      axios
        .get(`http://localhost:8080/lojas/${idLoja}`)
        .then((res) => setDadosUsuario(res.data))
        .catch(() =>
          setDadosUsuario({
            nome: "Erro ao carregar",
            email: "Erro ao carregar",
            endereco: "Erro ao carregar",
          })
        );
    }
  }, []);

  const handleEditClick = (fieldName) => {
    setSelectedField(fieldName);
    setShowAlert(true);
  };

  const atualizarCampo = (campo, valor, senha = null) => {
    const id = tipoUsuario === "tecnico" ? localStorage.getItem("id_tecnico") : localStorage.getItem("id_loja");
    let url = "";

    if (campo === "nome") {
      url = tipoUsuario === "tecnico"
        ? `http://localhost:8080/tecnicos/${id}/nome`
        : `http://localhost:8080/lojas/${id}/nome`;
    } else if (campo === "email") {
      url = tipoUsuario === "tecnico"
        ? `http://localhost:8080/tecnicos/${id}/email`
        : `http://localhost:8080/lojas/${id}/email`;
    } else if (campo === "endereco") {
      url = `http://localhost:8080/lojas/${id}/endereco`; // apenas loja tem endereço
    } else {
      console.error("Campo inválido:", campo);
      return;
    }

    axios.put(url, { novoValor: valor, senhaAtual: senha })
      .then(() => {
        setDadosUsuario(prev => ({ ...prev, [campo]: valor }));
        alert(`${campo.charAt(0).toUpperCase() + campo.slice(1)} alterado com sucesso!`);
      })
      .catch(() => {
        alert(`Erro ao alterar ${campo}. Verifique sua senha.`);
      })
      .finally(() => {
        setShowAlert(false);
      });
  };


  const atualizarSenha = (senhaAntiga, senhaNova) => {
    let id;
    if (tipoUsuario === "tecnico") {
      id = localStorage.getItem("id_tecnico");
    } else if (tipoUsuario === "gerente") {
      id = localStorage.getItem("id_gerente"); // Corrigido para garantir uso do id correto
    } else {
      id = localStorage.getItem("id_loja");
    }
    console.log("DEBUG ALTERAR SENHA | tipoUsuario:", tipoUsuario, "| id:", id, "| senhaAntiga:", senhaAntiga, "| senhaNova:", senhaNova);
    axios
      .put(`http://localhost:8080/${tipoUsuario === "tecnico" ? "tecnicos" : "lojas"}/${id}/senha`, {
        senhaAntiga,
        senhaNova: senhaNova, // Corrigido para o nome esperado pelo backend
      })
      .then(() => {
        alert("Senha alterada com sucesso!");
        setShowAlert(false);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          alert("Erro ao alterar senha: " + error.response.data);
        } else {
          alert("Erro ao alterar senha. Verifique a senha atual.");
        }
        console.error(error);
      });
  };

  const renderAlert = () => {
    switch (selectedField) {
      case "Senha":
        return <AlterarSenhaAlert onClose={() => setShowAlert(false)} onUpdateSenha={atualizarSenha} />;
      case "Email":
        return <AlterarEmailAlert onClose={() => setShowAlert(false)} onUpdate={(novoEmail, senha) => atualizarCampo("email", novoEmail, senha)} />;
      case "Endereço":
        return <AlterarEnderecoAlert onClose={() => setShowAlert(false)} onUpdate={(novoEndereco, senha) => atualizarCampo("endereco", novoEndereco, senha)} />;
      case "Nome da Loja":
        return <AlterarNomeLojaAlert onClose={() => setShowAlert(false)} onUpdate={(novoNome, senha) => atualizarCampo("nome", novoNome, senha)} />;
      default:
        return null;
    }
  };




  return (
    <>
      <form action="">
        <div className={styles.conteinerPrincipal}>
          {/* Campo Email */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>Email</label>
              <span className={styles.fieldValue}>{dadosUsuario.email}</span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Email")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>

          {/* Campo Senha */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>Senha</label>
              <span className={styles.fieldValue}>
                Última atualização em 21 de Setembro de 2024
              </span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Senha")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>

          {/* Campo Nome da Loja */}
          <div className={styles.field}>
            <div className={styles.fieldText}>
              <label className={styles.fieldLabel}>{tipoUsuario === "tecnico" ? "Nome" : "Nome da Loja"}</label>
              <span className={styles.fieldValue}>{dadosUsuario.nome}</span>
            </div>
            <button
              type="button"
              className={styles.editButton}
              onClick={() => handleEditClick("Nome da Loja")}
            >
              <img src={edit} alt="Editar" className={styles.iconEdit} />
            </button>
          </div>

          {/* Campo Endereço */}
          {tipoUsuario !== "tecnico" && (
            <div className={styles.field}>
              <div className={styles.fieldText}>
                <label className={styles.fieldLabel}>Endereço</label>
                <span className={styles.fieldValue}>{dadosUsuario.endereco}</span>
              </div>
              <button
                type="button"
                className={styles.editButton}
                onClick={() => handleEditClick("Endereço")}
              >
                <img src={edit} alt="Editar" className={styles.iconEdit} />
              </button>
            </div>
          )}

          {/* Campo Cargo */}
          {tipoUsuario !== "gerente" && (
            <div className={styles.field}>
              <div className={styles.fieldText}>
                <label className={styles.fieldLabel}>Cargo</label>
                <span className={styles.fieldValue}>{dadosUsuario.cargo}</span>
              </div>
              <button
                type="button"
                className={styles.editButton}
                onClick={() => handleEditClick("Cargo")}
              >
                <img src={edit} alt="Editar" className={styles.iconEdit} />
              </button>
            </div>
          )}
        </div>
      </form>

      {showAlert && renderAlert()}
    </>
  );
}

export default PainelConfig;
