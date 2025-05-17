import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/css/TelaLogin.module.css";

const TelaLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulação de autenticação
      if (formData.email === "admin@admin.com" && formData.senha === "123456") {
        alert("Login realizado com sucesso!");
        navigate("home-tecnico"); // Redireciona para o dashboard
      } else {
        alert("Credenciais inválidas. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            className={styles.input}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="senha" className={styles.label}>
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Digite sua senha"
            className={styles.input}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default TelaLogin;