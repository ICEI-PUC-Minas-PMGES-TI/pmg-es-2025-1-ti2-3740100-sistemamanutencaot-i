import React, { useState, useEffect } from "react";
import styles from "../CadastroCliente/FormularioCliente.module.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditarCliente = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nomeCliente: "",
    documento: "",
    telefone: "",
  });
  const [tipoDocumento, setTipoDocumento] = useState("CPF");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/clientes/${id}`)
      .then(res => {
        const cliente = res.data;
        setFormData({
          nomeCliente: cliente.pessoa?.nome || "",
          documento: cliente.pessoa?.cpf || cliente.pessoa?.cnpj || "",
          telefone: cliente.telefone || "",
        });
        setTipoDocumento(cliente.pessoa?.cpf ? "CPF" : "CNPJ");
      })
      .catch(() => setMensagem("Erro ao carregar dados do cliente"));
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
    try {
      const clienteAtualizado = {
        nome: formData.nomeCliente,
        tipoPessoa: tipoDocumento === "CPF" ? "PF" : "PJ",
        [tipoDocumento.toLowerCase()]: formData.documento,
        telefone: formData.telefone,
      };
      await axios.put(`http://localhost:8080/clientes/${id}`, clienteAtualizado);
      setMensagem("Cliente atualizado com sucesso!");
      setTimeout(() => {
        navigate("/usuarios");
      }, 2000);
    } catch (error) {
      setMensagem(`Erro: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className={styles.containerFormulario}>
      <form onSubmit={handleSubmit} className={styles.envoltorioFormulario}>
        <h1 className={styles.tituloFormulario}>Editar Cliente</h1>
        <p className={styles.descricaoFormulario}>
          Atualize as informações do cliente para garantir um{" "}
          <span className={styles.textoAzul}>atendimento eficiente!</span>
        </p>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Nome</label>
          <input
            type="text"
            name="nomeCliente"
            value={formData.nomeCliente}
            onChange={handleChange}
            placeholder="Nome completo do cliente"
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Tipo de Documento</label>
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <button
              type="button"
              className={`${styles.botaoOpcao} ${tipoDocumento === "CPF" ? styles.selecionado : ""}`}
              onClick={() => {
                setTipoDocumento("CPF");
                setFormData((prev) => ({ ...prev, documento: "" }));
              }}
            >
              CPF
            </button>
            <button
              type="button"
              className={`${styles.botaoOpcao} ${tipoDocumento === "CNPJ" ? styles.selecionado : ""}`}
              onClick={() => {
                setTipoDocumento("CNPJ");
                setFormData((prev) => ({ ...prev, documento: "" }));
              }}
            >
              CNPJ
            </button>
          </div>
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>
            {tipoDocumento === "CPF" ? "CPF" : "CNPJ"}
          </label>
          <input
            type="text"
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            placeholder={`Digite o ${tipoDocumento}`}
            className={styles.entradaFormulario}
            required
          />
        </div>

        <div className={styles.grupoCampoFormulario}>
          <label className={styles.rotuloFormulario}>Telefone</label>
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone do cliente"
            className={styles.entradaFormulario}
            required
          />
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

export default EditarCliente;