import React, { useState } from "react";
import "../assets/css/Formulariologinmaster.css";
import VectorIcon from "../assets/images/VectorIcon.png";
import PadlockIcon from "../assets/images/PadlockIcon.png";
import EyeIcon from "../assets/images/EyeIcon.png";
import axios from "axios";

function FormularioLoginMaster() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const novoGerente = {
      nome: "Master",
      email,
      senha,
    };

    try {
      await axios.post("https://pmg-es-2025-1-ti2-3740100-znbi.onrender.com/gerentes", novoGerente);
      alert("Cadastro de gerente realizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao cadastrar gerente:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Cadastrar login Master para a loja</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-field-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-line">
              <img src={VectorIcon} alt="Email" className="input-icon" />
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Coloque seu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="Coloque sua senha"
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
                placeholder="Confirme sua senha"
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
            <button type="submit" className="form-button">Finalizar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioLoginMaster;
