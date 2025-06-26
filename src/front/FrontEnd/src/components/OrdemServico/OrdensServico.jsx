import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./OrdensServico.css";
import adicionar from "../../assets/images/adicionar.png";
import pesquisar from "../../assets/images/search.png";
import detalhes from "../../assets/images/detalhes.png";
import atribuirIcon from "../../assets/images/adicionar.png";
import AtribuirManutencao from "./AtribuirManutencao.jsx";
import FiltroDownDrop from "../FiltroDownDrop/FiltroDownDrop.jsx"; // Importe o componente de filtro

const OrdensServico = () => {
  const [ordens, setOrdens] = useState([]);
  const [ordensFiltradas, setOrdensFiltradas] = useState([]);
  const navigate = useNavigate();
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const tamanhoPagina = 8;
  const [showAtribuirModal, setShowAtribuirModal] = useState(false);
  const [ordemSelecionada, setOrdemSelecionada] = useState(null);
  const [filtroStatus, setFiltroStatus] = useState('Todos');

  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const tecnicoIdLogado = localStorage.getItem("id_tecnico");

  // Opções de filtro para status
  const opcoesFiltroStatus = [
    { label: 'Todos', valor: 'Todos' },
    { label: 'Em Andamento', valor: 'Em Andamento' },
    { label: 'Concluído', valor: 'Concluído' },
    { label: 'Aguardando Peças', valor: 'Aguardando Peças' },
    { label: 'Diagnóstico', valor: 'Diagnóstico' },
    { label: 'Aguardando Retirada', valor: 'Aguardando Retirada' },
  ];

  useEffect(() => {
    buscarReparos(paginaAtual);
  }, [paginaAtual]);

  const buscarReparos = (pagina = 0) => {
    axios
      .get(`http://localhost:8080/ordem-servicos?page=${pagina}&size=${tamanhoPagina}`)
      .then((response) => {
        setOrdens(response.data.content);
        setOrdensFiltradas(response.data.content); // Inicializa com todas as ordens
        setTotalPaginas(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Erro ao buscar ordens de serviço:", error);
      });
  };

  // Aplicar filtro sempre que o status do filtro ou as ordens mudarem
  useEffect(() => {
    if (filtroStatus === 'Todos') {
      setOrdensFiltradas(ordens);
    } else {
      setOrdensFiltradas(ordens.filter(ordem => ordem.status === filtroStatus));
    }
  }, [filtroStatus, ordens]);

  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina);
  };

  const handleAddClick = () => {
    navigate("/nova-ordem-servico");
  };

  const handleViewDetails = (id) => {
    navigate(`/detalhes-reparo/${id}`);
  };

  const atribuirTecnico = (ordemId) => {
    if (tipoUsuario === "tecnico") {
      if (!tecnicoIdLogado) {
        alert("ID do técnico logado não encontrado.");
        return;
      }
      axios
        .patch(`http://localhost:8080/ordem-servicos/${ordemId}/tecnico`, {
          tecnicoId: parseInt(tecnicoIdLogado),
        })
        .then(() => {
          setOrdens(
            ordens.map((ordem) =>
              ordem.id === ordemId
                ? { ...ordem, tecnico: { id: tecnicoIdLogado, nome: "Você" } }
                : ordem
            )
          );
          alert("Ordem atribuída a você com sucesso!");
        })
        .catch((err) => {
          console.error("Erro ao atribuir técnico:", err);
          alert("Erro ao atribuir técnico.");
        });
    } else {
      setOrdemSelecionada(ordemId);
      setShowAtribuirModal(true);
    }
  };

  const handleAtribuido = (ordemId, tecnicoId, tecnicoNome) => {
    axios
      .patch(`http://localhost:8080/ordem-servicos/${ordemId}/tecnico`, {
        tecnicoId: parseInt(tecnicoId),
      })
      .then(() => {
        setOrdens(
          ordens.map((ordem) =>
            ordem.id === ordemId
              ? { ...ordem, tecnico: { id: tecnicoId, nome: tecnicoNome } }
              : ordem
          )
        );
        alert("Técnico atribuído com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao atribuir técnico:", err);
        alert("Erro ao atribuir técnico.");
      });

    setShowAtribuirModal(false);
  };

  // Calcular índices para paginação
  const inicio = paginaAtual * tamanhoPagina;
  const fim = inicio + tamanhoPagina;
  const ordensPagina = ordensFiltradas.slice(inicio, fim);
  const totalItens = ordensFiltradas.length;

  return (
    <main className="ordem-management">
      {showAtribuirModal && (
        <AtribuirManutencao
          ordemId={ordemSelecionada}
          onClose={() => setShowAtribuirModal(false)}
          onAtribuido={handleAtribuido}
        />
      )}

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
          <button className="animated-button" onClick={handleAddClick}>
            <span className="button-icon">
              <img src={adicionar} alt="Adicionar" />
            </span>
            <span className="button-text">Adicionar</span>
          </button>
          
          {/* Substituído o botão de filtrar pelo componente de filtro */}
          <FiltroDownDrop
            opcoes={opcoesFiltroStatus}
            filtroSelecionado={filtroStatus}
            aoSelecionarFiltro={setFiltroStatus}
          />
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
              <th>Técnico</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {ordensPagina.map((ordem, index) => (
              <tr key={index}>
                <td>{ordem.id}</td>
                <td>{ordem.computador.cliente.pessoa.nome}</td>
                <td>{ordem.computador.tipo}</td>
                <td>{ordem.dataEntrada}</td>
                <td>
                  <span
                    className={`status-badge status-${ordem.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {ordem.status}
                  </span>
                </td>
                <td>{ordem.tecnico ? ordem.tecnico.nome : "Não atribuído"}</td>
                <td className="acoes">
                  <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                    <button
                      className="view-button"
                      onClick={() => handleViewDetails(ordem.id)}
                    >
                      <img src={detalhes} alt="Ver Detalhes" />
                      <span>Ver Detalhes</span>
                    </button>
                    {!ordem.tecnico && (
                      <button
                        className="view-button"
                        style={{ background: "#f1c40f" }}
                        onClick={() => atribuirTecnico(ordem.id)}
                      >
                        <img
                          src={atribuirIcon}
                          alt="Atribuir"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                        <span>Atribuir</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="pagination">
        <span>
          Mostrando {inicio + 1} a {Math.min(fim, totalItens)} de {totalItens} itens
        </span>
        <div className="page-controls">
          <button 
            onClick={() => mudarPagina(Math.max(0, paginaAtual - 1))}
            disabled={paginaAtual === 0}
          >
            ‹
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => (
            <button
              key={i}
              className={i === paginaAtual ? "active" : ""}
              onClick={() => mudarPagina(i)}
            >
              {i + 1}
            </button>
          ))}
          <button 
            onClick={() => mudarPagina(Math.min(totalPaginas - 1, paginaAtual + 1))}
            disabled={paginaAtual === totalPaginas - 1}
          >
            ›
          </button>
        </div>
      </nav>
    </main>
  );
};

export default OrdensServico;