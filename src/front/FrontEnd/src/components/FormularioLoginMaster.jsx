import React, { useState, useEffect } from "react"; 
import "../assets/css/Formulariologinmaster.css";
import VectorIcon from "../assets/images/VectorIcon.png";
import PadlockIcon from "../assets/images/PadlockIcon.png";
import EyeIcon from "../assets/images/EyeIcon.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function FormularioLoginMaster() {
  const location = useLocation();
  const navigate = useNavigate();

  const { idLoja } = location.state || {};
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [lojaAtual, setLojaAtual] = useState(null);

  useEffect(() => {
    const buscarLoja = async () => {
      if (!idLoja) {
        console.error("ID da loja não fornecido");
        alert("Erro: ID da loja não encontrado");
        navigate("/formulario-loja");
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/lojas/${idLoja}`);
        setLojaAtual(response.data);
        
        // Preencher campos com dados existentes
        if (response.data.telefone) setTelefone(response.data.telefone);
        if (response.data.email) setEmail(response.data.email);
      } catch (error) {
        console.error("Erro ao buscar dados da loja:", error);
        alert("Erro ao carregar dados da loja");
      }
    };

    buscarLoja();
  }, [idLoja, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    const dadosAtualizados = {
      telefone: telefone,
      email: email,
      senha: senha
    };

    try {
      await axios.patch(`http://localhost:8080/lojas/${idLoja}`, dadosAtualizados);
      alert("Dados de login atualizados com sucesso!");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao atualizar dados da loja:", error);
      alert("Erro ao atualizar dados da loja. Por favor, tente novamente.");
    }
  };

  if (!lojaAtual) {
    return <div className="form-container">Carregando dados da loja...</div>;
  }


  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1 className="form-title">Cadastrar o Login aqui!</h1>
        <form onSubmit={handleSubmit}>

          <div className="form-field-group">
            <label htmlFor="telefone" className="form-label">telefone</label>
            <div className="input-line">
              <img src={VectorIcon} alt="Telefone" className="input-icon" />
              <input
                type="telefone"
                id="telefone"
                className="form-input"
                placeholder="Coloque o telefone de contato da sua Loja"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-field-group">
            <label htmlFor="email" className="form-label">Email</label>
            <div className="input-line">
              <img src={VectorIcon} alt="Email" className="input-icon" />
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Coloque o login da sua Loja"
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
