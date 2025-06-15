import React, { useState } from "react";
import baseStyles from "../assets/css/FormularioBase.module.css";
import styles from "../assets/css/FormularioLoja.module.css";
import axios from "axios";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Swal from 'sweetalert2';

import Alerta from "../assets/images/alerta.png";
import Correto from "../assets/images/correto.png";

const FormularioLoja = () => {
  const location = useLocation();
  const { idUsuario } = location.state || {};
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomeLoja: "",
    cnpj: "",
    inscricaoJudicial: "",
    endereco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const somenteNumeros = (e) => {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações básicas com SweetAlert2
    if (formData.nomeLoja.trim().length < 3) {
      Swal.fire({
        icon: "error",
        title: "Nome inválido",
        text: "O nome da loja deve ter pelo menos 3 caracteres.",
      });
      return;
    }

    if (!/^\d{14}$/.test(formData.cnpj)) {
      Swal.fire({
        icon: "error",
        title: "CNPJ inválido",
        text: "O CNPJ deve conter exatamente 14 números.",
      });
      return;
    }

    if (!/^\d{20,}$/.test(formData.inscricaoJudicial)) {
      Swal.fire({
        icon: "error",
        title: "Inscrição inválida",
        text: "A inscrição judicial deve conter pelo menos 20 números.",
      });
      return;
    }

    if (formData.endereco.trim().length < 5) {
      Swal.fire({
        icon: "error",
        title: "Endereço inválido",
        text: "O endereço deve ter pelo menos 5 caracteres.",
      });
      return;
    }

    const novaLoja = {
      nome: formData.nomeLoja,
      cnpj: formData.cnpj,
      inscricaoJudicial: formData.inscricaoJudicial,
      endereco: formData.endereco,
      telefone: null,
      email: null,
      senha: null,
    };

    try {
      const response = await axios.post("http://localhost:8080/lojas", novaLoja);
      const loja = response.data;

      await Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Loja cadastrada com sucesso!",
        confirmButtonColor: "#0C21C1",
      });

      setFormData({ nomeLoja: "", cnpj: "", inscricaoJudicial: "", endereco: "" });
      navigate("/cadastro-gerente", { state: { idLoja: loja.id } });

    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Erro no cadastro",
        text: "Erro ao cadastrar loja. Por favor, tente novamente.",
      });
    }
  };



  return (
    <div className={baseStyles.container}>
      <form onSubmit={handleSubmit} className={baseStyles.wrapper}>
        <h1 className={`${baseStyles.title} ${styles.tituloFormulario}`}>
          Cadastre sua Loja aqui!
        </h1>

        <p className={`${baseStyles.descricao} ${styles.descricaoFormulario}`}>
          Se você já possui uma loja cadastrada
          <br />
          Você pode realizar o acesso{" "}
          <Link to="/login" className={baseStyles.blueText}>
            aqui!
          </Link>
        </p>

        <div>
          <div className={baseStyles.fieldGroup}>
            <label className={baseStyles.label} htmlFor="nomeLoja">
              Nome da Loja
            </label>
            <div className={baseStyles.inputLine}>
              <input
                id="nomeLoja"
                type="text"
                name="nomeLoja"
                value={formData.nomeLoja}
                onChange={handleChange}
                placeholder="Coloque o nome da sua Loja"
                className={baseStyles.input}
                required
              />
            </div>
          </div>

          <div className={baseStyles.fieldGroup}>
            <label className={baseStyles.label} htmlFor="cnpj">
              CNPJ
            </label>
            <div className={baseStyles.inputLine}>
              <input
                id="cnpj"
                type="text"
                name="cnpj"
                value={formData.cnpj}
                onChange={handleChange}
                onKeyPress={somenteNumeros}
                placeholder="Coloque o CNPJ da Loja"
                className={baseStyles.input}
                maxLength={14}
                required
              />
            </div>
          </div>

          <div className={baseStyles.fieldGroup}>
            <label className={baseStyles.label} htmlFor="inscricaoJudicial">
              Inscrição Judicial
            </label>
            <div className={baseStyles.inputLine}>
              <input
                id="inscricaoJudicial"
                type="text"
                name="inscricaoJudicial"
                value={formData.inscricaoJudicial}
                onChange={handleChange}
                onKeyPress={somenteNumeros}
                placeholder="Coloque a sua inscrição judicial"
                className={baseStyles.input}
                maxLength={20}
                required
              />
            </div>
          </div>

          <div className={baseStyles.fieldGroup}>
            <label className={baseStyles.label} htmlFor="endereco">
              Endereço
            </label>
            <div className={baseStyles.inputLine}>
              <input
                id="endereco"
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                placeholder="Coloque o endereço da sua Loja"
                className={baseStyles.input}
                required
              />
            </div>
          </div>
        </div>

        <div className={baseStyles.buttonContainer}>
          <button type="submit" className={baseStyles.button}>
            Avançar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioLoja;
