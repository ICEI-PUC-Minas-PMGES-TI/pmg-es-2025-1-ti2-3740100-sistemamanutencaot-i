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
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const tamanhoPagina = 8;
  
  useEffect(() => {
    buscarReparos(paginaAtual);
  }, [paginaAtual]);

  const buscarReparos = (pagina = 0) => {
    axios.get(`http://localhost:8080/ordem-servicos?page=${pagina}&size=${tamanhoPagina}`)
      .then(response => {
        setOrdens(response.data.content); // Supondo Spring Data Page
        setTotalPaginas(response.data.totalPages);
      })
      .catch(error => {
        console.error("Erro ao buscar ordens de serviço:", error);
      });
  };

  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina);
  };

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
                <td>{ordem.id}</td>
                <td>{ordem.computador.cliente.pessoa.nome}</td>
                <td>{ordem.computador.tipo}</td>
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
        <span>Mostrando {paginaAtual * tamanhoPagina + 1} a {(paginaAtual + 1) * tamanhoPagina} itens</span>
        <div className="page-controls">
          <button onClick={() => mudarPagina(Math.max(0, paginaAtual - 1))}>‹</button>
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              className={i === paginaAtual ? "active" : ""}
              onClick={() => mudarPagina(i)}
            >
              {i + 1}
            </button>
          ))}
          <button onClick={() => mudarPagina(Math.min(totalPaginas - 1, paginaAtual + 1))}>›</button>
        </div>
      </nav>
    </main>
  );
};

export default OrdensServico;