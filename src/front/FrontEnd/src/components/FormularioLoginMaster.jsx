import React, { useState } from "react";
import "../assets/css/Formulariologinmaster.css";
import VectorIcon from "../assets/images/VectorIcon.png";
import PadlockIcon from "../assets/images/PadlockIcon.png";
import EyeIcon from "../assets/images/EyeIcon.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormularioLoginMaster() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Função para cadastrar o usuário
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const novoUsuario = {
      login,
      senha,
      tipo: "LOGINMASTER"
    };

    try {
      // Enviar os dados para criar o novo usuário (login)
      const response = await axios.post("http://localhost:8080/usuarios", novoUsuario);
      alert("Cadastro de login master realizado com sucesso!");
      navigate("/cadastro-loja", { state: { idUsuario: response.data.id } });  // Passa o idUsuario para a próxima tela
    } catch (error) {
      console.error("Erro ao cadastrar login master:", error);

      if (error.response && error.response.data && error.response.data.message) {
        // Se o backend retornar uma mensagem de erro
        alert(`Erro ao cadastrar: ${error.response.data.message}`);
      } else {
        // Erro genérico
        alert("Erro ao cadastrar login master. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Cadastrar o Login aqui!</h1>
        <p className="form-subtitle">
          Se você já possui uma loja cadastrada, você pode realizar o acesso <a href="" onClick={() => navigate("/login")}>aqui</a>!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-field-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-line">
              <img src={VectorIcon} alt="Email" className="input-icon" />
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Coloque o login da sua Loja"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
          </div>
          
          <div className="form-field-group">
            <label htmlFor="senha" className="form-label">Senha</label>
            <div className="input-line">
              <img src={PadlockIcon} alt="Senha" className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                className="form-input"
                placeholder="Coloque a Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={EyeIcon} alt="Mostrar senha" />
              </button>
            </div>
          </div>
          
          <div className="form-field-group">
            <label htmlFor="confirmarSenha" className="form-label">Confirmar Senha</label>
            <div className="input-line">
              <img src={PadlockIcon} alt="Confirmar senha" className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmarSenha"
                className="form-input"
                placeholder="Confirme a Senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                required
              />
              <button 
                type="button" 
                className="toggle-password"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <img src={EyeIcon} alt="Mostrar senha" />
              </button>
            </div>
          </div>
          
          <div className="button-container">
            <button type="submit" className="form-button">Avançar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioLoginMaster;
