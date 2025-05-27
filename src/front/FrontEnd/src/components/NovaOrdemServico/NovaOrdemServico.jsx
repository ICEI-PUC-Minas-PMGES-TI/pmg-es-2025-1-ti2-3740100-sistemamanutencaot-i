import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NovaOrdemServico.css";

const NovaOrdemServico = () => {
  const [prazoDiagnostico, setPrazoDiagnostico] = useState("");
  const [tipoMaquina, setTipoMaquina] = useState("");
  const [termoBusca, setTermoBusca] = useState("");
  const [sugestoes, setSugestoes] = useState([]);
  const [descricaoProblema, setDescricaoProblema] = useState("");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);
  const dataHoje = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchClientes = async () => {
      if (termoBusca.length < 2) {
        setSugestoes([]);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:8080/clientes?nome=${termoBusca}`
        );
        setSugestoes(response.data);
      } catch (error) {
        console.error("Erro ao buscar clientes:", error);
      }
    };

    const delayDebounce = setTimeout(() => {
      fetchClientes();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [termoBusca]);

  // Função para quando clicar numa sugestão do cliente
  const selecionarCliente = (cliente) => {
    setClienteSelecionado(cliente);
    setTermoBusca(cliente.nome);
    setSugestoes([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clienteSelecionado) {
      alert("Por favor, selecione um cliente válido da lista.");
      return;
    }

    if (!tipoMaquina) {
      alert("Por favor, selecione o tipo de máquina.");
      return;
    }

    if (!prazoDiagnostico) {
      alert("Por favor, informe o prazo para o diagnóstico.");
      return;
    }

    if (!descricaoProblema.trim()) {
      alert("Por favor, descreva o problema.");
      return;
    }

    const novaOS = {
      clienteId: clienteSelecionado.id,
      tipoMaquina,
      prazoDiagnostico,
      dataCriacao: dataHoje,
      descricaoProblema,
    };

    try {
      // Ajuste a URL para seu endpoint real que cria O.S
      await axios.post("http://localhost:8080/ordem-servico", novaOS);
      alert("Ordem de Serviço criada com sucesso!");
      // Limpar formulário (opcional)
      setTipoMaquina("");
      setPrazoDiagnostico("");
      setDescricaoProblema("");
      setTermoBusca("");
      setClienteSelecionado(null);
    } catch (error) {
      console.error("Erro ao criar Ordem de Serviço:", error);
      alert("Erro ao criar Ordem de Serviço.");
    }
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="form-title">
          Nova Ordem de
          <br />
          Serviço
        </h1>

        <hr className="form-divider" />

        <div className="form-group">
          <label className="input-label" htmlFor="cliente">
            Cliente
          </label>
          <input
            className="text-input"
            id="cliente"
            name="cliente"
            placeholder="Adicione o cliente na Ordem de serviço..."
            type="text"
            value={termoBusca}
            onChange={(e) => {
              setTermoBusca(e.target.value);
              setClienteSelecionado(null); // limpar cliente selecionado ao digitar
            }}
            autoComplete="off"
          />
          {sugestoes.length > 0 && (
            <ul className="autocomplete-list">
              {sugestoes.map((cliente) => (
                <li
                  key={cliente.id}
                  onClick={() => selecionarCliente(cliente)}
                  className="autocomplete-item"
                >
                  {cliente.nome}
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
                name="tipo-maquina"
                value={tipoMaquina}
                onChange={(e) => setTipoMaquina(e.target.value)}
              >
                <option value="" disabled>
                  Selecione o tipo
                </option>
                <option value="Notebook">Notebook</option>
                <option value="Computador">Computador</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="input-label" htmlFor="prazo-diagnostico">
              Prazo para o Diagnóstico:
            </label>
            <div className="date-container">
              <input
                className="date-input"
                id="prazo-diagnostico"
                name="prazo-diagnostico"
                type="date"
                value={prazoDiagnostico}
                onChange={(e) => setPrazoDiagnostico(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="input-label" htmlFor="descricao-problema">
            Descrição do Problema:
          </label>
          <textarea
            className="textarea-input"
            id="descricao-problema"
            name="descricao-problema"
            placeholder="Descreva o problema aqui..."
            rows="5"
            value={descricaoProblema}
            onChange={(e) => setDescricaoProblema(e.target.value)}
          ></textarea>
        </div>

        <div className="button-group">
          <button className="cancel-button" type="button" onClick={() => {
            setTipoMaquina("");
            setPrazoDiagnostico("");
            setDescricaoProblema("");
            setTermoBusca("");
            setClienteSelecionado(null);
          }}>
            Cancelar
          </button>
          <button className="submit-button" type="submit">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default NovaOrdemServico;
