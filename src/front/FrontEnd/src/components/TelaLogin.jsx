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
      const response = await fetch("http://localhost:8080/tecnicos/login-tecnico", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const tecnico = await response.json();
        alert("Login realizado com sucesso!");
        navigate("/home-tecnico");
        localStorage.setItem("tecnico", JSON.stringify(tecnico));
      } else {
        const msg = await response.text();
        alert("Erro ao fazer login: " + msg);
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro de rede ou no servidor.");
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
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
          <label htmlFor="senha" className={styles.label}>Senha</label>
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

        <button type="submit" className={styles.button}>Entrar</button>

        <button
          type="button"
          onClick={() => navigate("/cadastro-tecnico")}
          className={styles.button + " " + styles.secondaryButton}
        >
          Cadastrar-se
        </button>
      </form>
    </div>
  );
};

export default TelaLogin;
