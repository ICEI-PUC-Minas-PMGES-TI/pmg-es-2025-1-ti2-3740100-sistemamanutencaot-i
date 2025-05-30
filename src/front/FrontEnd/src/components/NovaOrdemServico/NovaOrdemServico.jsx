import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NovaOrdemServico.css";

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
  const [sugestoesTecnicos, setSugestoesTecnicos] = useState([]);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const [tecnicoSelecionado, setTecnicoSelecionado] = useState(null);
  const [tecnicos, setTecnicos] = useState([]);
  const [mensagem, setMensagem] = useState("");

  const dataHoje = new Date().toISOString().split("T")[0];

  useEffect(() => {
    // Carregar técnicos disponíveis
    const fetchTecnicos = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tecnicos");
        setTecnicos(response.data);
      } catch (error) {
        console.error("Erro ao buscar técnicos:", error);
      }
    };

    fetchTecnicos();
  }, []);

  useEffect(() => {
    const fetchClientes = async () => {
      if (termoBusca.length < 2) {
        setSugestoesClientes([]);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/clientes?nome=${termoBusca}`
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
    setTermoBusca(cliente.nome);
    setSugestoesClientes([]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

    if (!tecnicoSelecionado) {
      setMensagem("Por favor, selecione um técnico responsável.");
      return;
    }

    const novoComputador = {
      clienteId: clienteSelecionado.id,
      tipoMaquina: formData.tipoMaquina,
      marca: formData.marca,
      modelo: formData.modelo,
      descricaoProblema: formData.descricaoProblema,
    };

    try {
      // 1. Criar computador
      const computadorResponse = await axios.post(
        "http://localhost:8080/computadores",
        novoComputador
      );
      const computadorCriado = computadorResponse.data;

      // 2. Criar Ordem de Serviço
      const novaOS = {
        computadorId: computadorCriado.id,
        tecnicoId: tecnicoSelecionado.id,
        status: "AGUARDANDO_DIAGNOSTICO",
        dataCriacao: dataHoje,
        prazoDiagnostico: formData.prazoDiagnostico,
        valorTotal: 0.0,
        descricao_os: formData.descricaoOS,
      };

      await axios.post("http://localhost:8080/ordem-servico", novaOS);
      setMensagem("Ordem de Serviço criada com sucesso!");

      // Resetar formulário
      setFormData({
        prazoDiagnostico: "",
        tipoMaquina: "",
        marca: "",
        modelo: "",
        descricaoProblema: "",
        descricaoOS: "",
        tecnicoId: "",
      });
      setTermoBusca("");
      setClienteSelecionado(null);
      setTecnicoSelecionado(null);

      // Limpar mensagem após 3 segundos
      setTimeout(() => setMensagem(""), 3000);
    } catch (error) {
      console.error("Erro ao criar Ordem de Serviço:", error);
      setMensagem(`Erro: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="form-title">Nova Ordem de Serviço</h1>

        <h1 className="form-desc">
          Preencha as informações necessárias para registrar uma nova ordem de
          serviço no sistema. Certifique-se de inserir todos os dados com
          precisão para garantir o controle e acompanhamento corretos.
        </h1>

        <hr className="form-divider" />

        {mensagem && (
          <div
            className={`message ${
              mensagem.includes("sucesso") ? "success" : "error"
            }`}
          >
            {mensagem}
          </div>
        )}

        <div className="form-group">
          <label className="input-label" htmlFor="cliente">
            Cliente
          </label>
          <input
            className="text-input"
            id="cliente"
            name="cliente"
            placeholder="Buscar cliente..."
            type="text"
            value={termoBusca}
            onChange={(e) => {
              setTermoBusca(e.target.value);
              setClienteSelecionado(null);
            }}
            autoComplete="off"
          />
          {sugestoesClientes.length > 0 && (
            <ul className="autocomplete-list">
              {sugestoesClientes.map((cliente) => (
                <li
                  key={cliente.id}
                  onClick={() => selecionarCliente(cliente)}
                  className="autocomplete-item"
                >
                  {cliente.nome} - {cliente.telefone}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="input-label" htmlFor="tipo-maquina">
              Tipo de Máquina
            </label>
            <div className="select-container">
              <select
                className="select-input"
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

          <div className="form-group">
            <label className="input-label" htmlFor="prazo-diagnostico">
              Prazo para Diagnóstico
            </label>
            <div className="date-container">
              <input
                className="date-input"
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

        <div className="form-row">
          <div className="form-group">
            <label className="input-label" htmlFor="marca">
              Marca
            </label>
            <input
              type="text"
              className="text-input"
              id="marca"
              name="marca"
              placeholder="Ex: Dell, HP, Lenovo"
              value={formData.marca}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="modelo">
              Modelo
            </label>
            <input
              type="text"
              className="text-input"
              id="modelo"
              name="modelo"
              placeholder="Ex: Inspiron 15, ThinkPad X1"
              value={formData.modelo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="input-label" htmlFor="descricao-problema">
            Descrição do Problema
          </label>
          <textarea
            className="textarea-input"
            id="descricao-problema"
            name="descricaoProblema"
            placeholder="Descreva detalhadamente o problema relatado pelo cliente..."
            rows="4"
            value={formData.descricaoProblema}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="button-group">
          <button
            className="cancel-button"
            type="button"
            onClick={() => {
              setFormData({
                prazoDiagnostico: "",
                tipoMaquina: "",
                marca: "",
                modelo: "",
                descricaoProblema: "",
                descricaoOS: "",
                tecnicoId: "",
              });
              setTermoBusca("");
              setClienteSelecionado(null);
              setTecnicoSelecionado(null);
              setMensagem("");
            }}
          >
            Cancelar
          </button>
          <button className="submit-button" type="submit">
            Criar Ordem de Serviço
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaOrdemServico;
