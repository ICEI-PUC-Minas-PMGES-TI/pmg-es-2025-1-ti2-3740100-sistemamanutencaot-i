import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OrdensServico.css";
import filtrar from "../../assets/images/Filtro1.png";
import adicionar from "../../assets/images/adicionar.png";
import pesquisar from "../../assets/images/search.png";
import detalhes from "../../assets/images/detalhes.png"; // Adicione este ícone

const OrdensServico = () => {
  const [ordens, setOrdens] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock de dados - substituir por chamada à API real
    const mockOrdens = [
      {
        id: 1,
        numero: "OS-001",
        cliente: "João Silva",
        equipamento: "Notebook Dell",
        dataEntrada: "10/05/2024",
        status: "Em andamento"
      },
      {
        id: 2,
        numero: "OS-002",
        cliente: "Maria Oliveira",
        equipamento: "Impressora HP",
        dataEntrada: "11/05/2024",
        status: "Concluído"
      },
      {
        id: 3,
        numero: "OS-003",
        cliente: "Carlos Souza",
        equipamento: "Monitor LG",
        dataEntrada: "12/05/2024",
        status: "Aguardando peças"
      },
      {
        id: 4,
        numero: "OS-004",
        cliente: "Ana Costa",
        equipamento: "PC Gamer",
        dataEntrada: "13/05/2024",
        status: "Diagnóstico"
      },
      {
        id: 5,
        numero: "OS-005",
        cliente: "Pedro Mendes",
        equipamento: "Tablet Samsung",
        dataEntrada: "14/05/2024",
        status: "Em andamento"
      },
      {
        id: 6,
        numero: "OS-006",
        cliente: "Fernanda Lima",
        equipamento: "Smartphone Xiaomi",
        dataEntrada: "15/05/2024",
        status: "Concluído"
      },
      {
        id: 7,
        numero: "OS-007",
        cliente: "Roberto Alves",
        equipamento: "Roteador TP-Link",
        dataEntrada: "16/05/2024",
        status: "Aguardando retirada"
      },
      {
        id: 8,
        numero: "OS-008",
        cliente: "Juliana Santos",
        equipamento: "Notebook Asus",
        dataEntrada: "17/05/2024",
        status: "Em andamento"
      }
    ];
    
    setOrdens(mockOrdens);
    
    // Exemplo de chamada à API:
    /*
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/ordens-servico");
        setOrdens(response.data);
      } catch (error) {
        alert("Erro ao buscar ordens de serviço");
      }
    };
    fetchData();
    */
  }, []);

  const handleAddClick = () => {
    navigate("/nova-ordem-servico");
  };

  const handleViewDetails = (id) => {
    navigate(`/ordem-servico/${id}`);
  };

  return (
    <main className="ordem-management">
      <header className="management-header">
        <h1>Ordens de Serviço</h1>
      </header>

      <div className="controls-container">
        <form className="search-form">
          <input type="search" placeholder="Buscar..." aria-label="Buscar" />
          <button type="submit" aria-label="Buscar">
            <img src={pesquisar} alt="Pesquisar" />
          </button>
        </form>
        <div className="button-section">
          <button
            className="animated-button"
            onClick={handleAddClick}
          >
            <span className="button-icon">
              <img src={adicionar} alt="Adicionar" />
            </span>
            <span className="button-text">Adicionar</span>
          </button>
          <button className="animated-button blue">
            <span className="button-icon">
              <img src={filtrar} alt="Filtrar" />
            </span>
            <span className="button-text">Filtrar</span>
          </button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Número OS</th>
              <th>Cliente</th>
              <th>Equipamento</th>
              <th>Data de Entrada</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {ordens.map((ordem, index) => (
              <tr key={index}>
                <td>{ordem.numero}</td>
                <td>{ordem.cliente}</td>
                <td>{ordem.equipamento}</td>
                <td>{ordem.dataEntrada}</td>
                <td>
                  <span className={`status-badge status-${ordem.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {ordem.status}
                  </span>
                </td>
                <td className="acoes">
                  <button
                    className="view-button"
                    onClick={() => handleViewDetails(ordem.id)}
                  >
                    <img src={detalhes} alt="Ver Detalhes" />
                    <span>Ver Detalhes</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="pagination">
        <span>Mostrando 1 a 8 de 40 itens</span>
        <div className="page-controls">
          <button>‹</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>›</button>
        </div>
      </nav>
    </main>
  );
};

export default OrdensServico;