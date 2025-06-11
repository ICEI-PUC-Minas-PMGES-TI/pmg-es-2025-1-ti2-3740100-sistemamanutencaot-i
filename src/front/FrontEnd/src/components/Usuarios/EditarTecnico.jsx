import React, { useState, useEffect } from "react";
import styles from "../../assets/css/FormularioTecnico.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditarTecnico = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nomeTecnico: "",
    email: "",
  });
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/tecnicos/${id}`)
      .then(res => {
        const tecnico = res.data;
        setFormData({
          nomeTecnico: tecnico.nome || "",
          email: tecnico.email || "",
        });
        setOpcaoSelecionada(tecnico.cargo || "");
      })
      .catch(() => setMensagem("Erro ao carregar dados do técnico"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tecnicoAtualizado = {
      nome: formData.nomeTecnico,
      email: formData.email,
      cargo: opcaoSelecionada,
      loja: {
        id: 1,
      },
    };

    try {
      await axios.put(`http://localhost:8080/tecnicos/${id}`, tecnicoAtualizado);
      setMensagem("Técnico atualizado com sucesso!");
      setTimeout(() => {
        navigate("/usuarios");
      }, 2000);
    } catch (error) {
      setMensagem(`Erro ao atualizar técnico: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className={styles.containerFormulario}>
      <form onSubmit={handleSubmit} className={styles.envoltorioFormulario}>
        <h1 className={styles.tituloFormulario}>Editar Técnico</h1>
        <p className={styles.descricaoFormulario}>
          Atualize os dados do técnico para manter o <span className={styles.textoAzul}>cadastro</span> sempre <span className={styles.textoAzul}>atualizado!</span>
        </p>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Nome</label>
          <input
            type="text"
            name="nomeTecnico"
            value={formData.nomeTecnico}
            onChange={handleChange}
            placeholder="Coloque o nome do técnico"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Coloque o e-mail do técnico"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Cargo</label>
          <select
            value={opcaoSelecionada}
            onChange={(e) => setOpcaoSelecionada(e.target.value)}
            className={styles.entradaFormulario}
            required
          >
            <option value="" disabled>Selecione um cargo</option>
            <option value="Estagiário">Estagiário</option>
            <option value="Técnico de PC">Técnico de PC</option>
            <option value="Técnico de Notebook">Técnico de Notebook</option>
          </select>
        </div>

        <button type="submit" className={styles.botaoFormulario}>
          Salvar Alterações
        </button>

        {mensagem && (
          <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{mensagem}</p>
        )}
      </form>
    </div>
  );
};

export default EditarTecnico;