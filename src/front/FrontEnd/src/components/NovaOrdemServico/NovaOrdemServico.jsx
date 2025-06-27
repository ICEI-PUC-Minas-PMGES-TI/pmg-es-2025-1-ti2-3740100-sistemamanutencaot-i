import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./NovaOrdemServico.module.css"; 
import { useNavigate } from "react-router-dom";

const NovaOrdemServico = () => {
  const [formData, setFormData] = useState({
    prazoDiagnostico: "",
    tipoMaquina: "",
    marca: "",
    modelo: "",
    descricaoProblema: "",
    descricaoOS: "",
    tecnicoId: "",
  });

  const [termoBusca, setTermoBusca] = useState("");
  const [sugestoesClientes, setSugestoesClientes] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const dataHoje = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchClientes = async () => {
      if (termoBusca.length < 2) {
        setSugestoesClientes([]);
        return;
      }
      try {
        const response = await axios.get(
          `http://localhost:8080/clientes?nome=${encodeURIComponent(termoBusca)}`
        );
        setSugestoesClientes(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchClientes();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [termoBusca]);

  const selecionarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setTermoBusca(cliente.pessoa?.nome || cliente.nome || "");
    setSugestoesClientes([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se estiver editando o campo do autocomplete, reseta clienteSelecionado
    if (name === "cliente") {
      setTermoBusca(value);
      setClienteSelecionado(null);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clienteSelecionado) {
      setMensagem("Por favor, selecione um cliente válido da lista.");
      return;
    }

    if (!formData.tipoMaquina) {
      setMensagem("Por favor, selecione o tipo de máquina.");
      return;
    }

    if (!formData.prazoDiagnostico) {
      setMensagem("Por favor, informe o prazo para o diagnóstico.");
      return;
    }

    if (!formData.descricaoProblema.trim()) {
      setMensagem("Por favor, descreva o problema.");
      return;
    }

    const novoComputador = {
      clienteId: clienteSelecionado.id,
      tipo: formData.tipoMaquina,
      marca: formData.marca,
      modelo: formData.modelo,
    };

    try {
      const computadorResponse = await axios.post(
        "http://localhost:8080/computadores",
        novoComputador
      );
      const computadorCriado = computadorResponse.data;

      // Função para formatar data como dd/MM/yyyy
      const formatarData = (isoString) => {
        const data = new Date(isoString);
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();
        return `${dia}/${mes}/${ano}`;
      };

      const novaOS = {
        computadorId: computadorCriado.id,
        tecnicoId: null,
        status: "Aguardando Peças",
        dataEntrada: formatarData(new Date()), // hoje, formatado
        prazo: formatarData(formData.prazoDiagnostico), // data do form, formatada
        valorTotal: 0.0,
        descricaoOs: formData.descricaoProblema,
        solucaoOs: "Aguardando",
      };

      await axios.post("http://localhost:8080/ordem-servicos", novaOS);
      setMensagem("Ordem de Serviço criada com sucesso!");

      setTimeout(() => {
        navigate("/ordens-servico");
      }, 3000);
    } catch (error) {
      console.error("Erro ao criar Ordem de Serviço:", error);
      setMensagem(`Erro: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles["form-container"]} onSubmit={handleSubmit}>
        <h1 className={styles["form-title"]}>Nova Ordem de Serviço</h1>

        <h1 className={styles["form-desc"]}>
          Preencha as informações necessárias para registrar uma nova ordem de
          serviço no sistema. Certifique-se de inserir todos os dados com
          precisão para garantir o controle e acompanhamento corretos.
        </h1>

        <hr className={styles["form-divider"]} />

        {mensagem && (
          <div
            className={`${styles.message} ${
              mensagem.toLowerCase().includes("sucesso")
                ? styles.success
                : styles.error
            }`}
          >
            {mensagem}
          </div>
        )}

        <div className={styles["form-group"]}>
          <label className={styles["input-label"]} htmlFor="cliente">
            Cliente
          </label>
          <input
            className={styles["text-input"]}
            id="cliente"
            name="cliente"
            placeholder="Buscar cliente..."
            type="text"
            value={termoBusca}
            onChange={handleChange}
            autoComplete="off"
          />
          {sugestoesClientes.length > 0 && (
            <ul className={styles["autocomplete-list"]}>
              {sugestoesClientes.map((cliente) => (
                <li
                  key={cliente.id}
                  onClick={() => selecionarCliente(cliente)}
                  className={styles["autocomplete-item"]}
                >
                  {cliente.pessoa?.nome ?? "Sem nome"} - {cliente.telefone}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label className={styles["input-label"]} htmlFor="tipo-maquina">
              Tipo de Máquina
            </label>
            <div className={styles["select-container"]}>
              <select
                className={styles["select-input"]}
                id="tipo-maquina"
                name="tipoMaquina"
                value={formData.tipoMaquina}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione o tipo
                </option>
                <option value="Notebook">Notebook</option>
                <option value="Computador">Computador</option>
                <option value="Servidor">Servidor</option>
                <option value="All-in-One">All-in-One</option>
              </select>
            </div>
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["input-label"]} htmlFor="prazo-diagnostico">
              Prazo para Diagnóstico
            </label>
            <div className={styles["date-container"]}>
              <input
                className={styles["date-input"]}
                id="prazo-diagnostico"
                name="prazoDiagnostico"
                type="date"
                value={formData.prazoDiagnostico}
                onChange={handleChange}
                min={dataHoje}
                required
              />
            </div>
          </div>
        </div>

        <div className={styles["form-row"]}>
          <div className={styles["form-group"]}>
            <label className={styles["input-label"]} htmlFor="marca">
              Marca
            </label>
            <input
              type="text"
              className={styles["text-input"]}
              id="marca"
              name="marca"
              placeholder="Ex: Dell, HP, Lenovo"
              value={formData.marca}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles["form-group"]}>
            <label className={styles["input-label"]} htmlFor="modelo">
              Modelo
            </label>
            <input
              type="text"
              className={styles["text-input"]}
              id="modelo"
              name="modelo"
              placeholder="Ex: Inspiron 15, ThinkPad X1"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles["form-group"]}>
          <label className={styles["input-label"]} htmlFor="descricao-problema">
            Descrição do Problema
          </label>
          <textarea
            className={styles["textarea-input"]}
            id="descricao-problema"
            name="descricaoProblema"
            placeholder="Descreva detalhadamente o problema relatado pelo cliente..."
            rows="4"
            value={formData.descricaoProblema}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className={styles["button-group"]}>
          <button
            className={styles["cancel-button"]}
            type="button"
            onClick={() => {
              navigate("/ordens-servico");
            }}
          >
            Cancelar
          </button>
          <button className={styles["submit-button"]} type="submit">
            Criar Ordem de Serviço
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaOrdemServico;
