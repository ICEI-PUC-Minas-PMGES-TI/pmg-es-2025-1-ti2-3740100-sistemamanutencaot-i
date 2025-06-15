// FormularioLoginMaster.jsx
import React, { useState, useEffect } from "react"; 
import styles from "../assets/css/FormularioLoginMaster.module.css";


import EyeIcon from "../assets/images/olho-aberto.png";

import Telefone from "../assets/images/telefone.png"
import Email from "../assets/images/email.png"
import Senha from "../assets/images/senha.png"

import Swal from "sweetalert2";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function FormularioLoginMaster() {
  const location = useLocation();
  const navigate = useNavigate();
  const { idLoja } = location.state || {};
  
  // Estados
  const [formData, setFormData] = useState({
    telefone: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [lojaAtual, setLojaAtual] = useState(null);

  useEffect(() => {
  const buscarLoja = async () => {
    if (!idLoja) {
      Swal.fire({
        icon: "error",
        title: "ID da loja não encontrado",
        text: "Você será redirecionado para preencher os dados da loja.",
        confirmButtonColor: "#0C21C1"
      }).then(() => {
        navigate("/formulario-loja");
      });
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/lojas/${idLoja}`);
      setLojaAtual(response.data);
      setFormData({
        telefone: response.data.telefone || "",
        email: response.data.email || "",
        senha: "",
        confirmarSenha: ""
      });
    } catch (error) {
      console.error("Erro ao buscar dados da loja:", error);
      Swal.fire({
        icon: "error",
        title: "Erro ao carregar dados",
        text: "Verifique sua conexão ou tente novamente mais tarde.",
        confirmButtonColor: "#0C21C1"
      });
    }
  };

  buscarLoja();
}, [idLoja, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      Swal.fire({
        icon: "warning",
        title: "Senhas diferentes",
        text: "As senhas inseridas não coincidem.",
        confirmButtonColor: "#0C21C1"
      });
      return;
    }

    try {
      await axios.patch(`http://localhost:8080/lojas/${idLoja}`, {
        telefone: formData.telefone,
        email: formData.email,
        senha: formData.senha
      });
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Dados de login cadastrados com sucesso.",
        confirmButtonColor: "#0C21C1"
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      Swal.fire({
        icon: "error",
        title: "Erro ao atualizar",
        text: "Verifique os dados ou tente novamente.",
        confirmButtonColor: "#0C21C1"
      });
    }
  };

  if (!lojaAtual) {
    return <div className={styles.container}>Carregando dados da loja...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Cadastrar o Login Master aqui!</h1>

        <p className={styles.descricao}>Preencha os campos abaixo para criar o acesso principal da sua loja.
Esse login será utilizado para gerenciar as informações da loja, cadastrar técnicos e acompanhar os reparos realizados.</p>
        
        <form onSubmit={handleSubmit}>
          {/* Campo Telefone */}
          <div className={styles.fieldGroup}>
            <label htmlFor="telefone" className={styles.label}>Telefone</label>
            <div className={styles.inputLine}>
              <img src={Telefone} alt="Telefone" className={styles.icon} />
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className={styles.input}
                placeholder="31 99999-9999"
                value={formData.telefone}
                maxLength={11}
                onChange={(e) => {
                  const onlyNumbers = e.target.value.replace(/\D/g, ""); // remove tudo que não for número
                  if (onlyNumbers.length <= 11) {
                    setFormData((prev) => ({ ...prev, telefone: onlyNumbers }));
                  }
                }}
                required
              />
            </div>
          </div>

          {/* Campo Email */}
          <div className={styles.fieldGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <div className={styles.inputLine}>
              <img src={Email} alt="Email" className={styles.icon} />
              <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                placeholder="Adicione o email da Loja"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {/* Campo Senha */}
          <div className={styles.fieldGroup}>
            <label htmlFor="senha" className={styles.label}>Senha</label>
            <div className={styles.inputLine}>
              <img src={Senha} alt="Senha" className={styles.icon} />
              <input
                type={showPassword ? "text" : "password"}
                id="senha"
                name="senha"
                className={styles.input}
                placeholder="Coloque uma senha Senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className={styles.toggleButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={EyeIcon} alt="Mostrar senha" />
              </button>
            </div>
          </div>
          
          {/* Campo Confirmar Senha */}
          <div className={styles.fieldGroup}>
            <label htmlFor="confirmarSenha" className={styles.label}>Confirmar Senha</label>
            <div className={styles.inputLine}>
              <img src={Senha} alt="Confirmar senha" className={styles.icon} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmarSenha"
                name="confirmarSenha"
                className={styles.input}
                placeholder="Confirme a Senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                required
              />
              <button 
                type="button" 
                className={styles.toggleButton}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <img src={EyeIcon} alt="Mostrar senha" />
              </button>
            </div>
          </div>
          
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>Avançar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioLoginMaster;