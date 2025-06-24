import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Usuarios.css";
import editar from "../../assets/images/edit.png";
import filtrar from "../../assets/images/Filtro1.png";
import adicionar from "../../assets/images/adicionar.png";
import excluir from "../../assets/images/lixo.png";
import pesquisar from "../../assets/images/search.png";
import AdicionarAlert from "./AdicionarAlert";

const UserManagement = () => {
  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);  const [users, setUsers] = useState([]); // Estado para os usuários
  const [filteredUsers, setFilteredUsers] = useState([]); // Estado para os usuários filtrados
  const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa
  const [activeFilters, setActiveFilters] = useState({
    showClientes: true,
    showTecnicos: true
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // 8 itens por página
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        let clientes = [];
        let tecnicos = [];

        const clientesRes = await axios.get("http://localhost:8080/clientes");
        clientes = clientesRes.data.map(c => ({
          id: c.id,
          name: c.pessoa?.nome || "Não informado",
          cpf: c.pessoa?.cpf || "Não informado",
          phone: c.telefone || "Não informado",
          type: "Cliente"
        }));

        if (tipoUsuario === "gerente") {
          const tecnicosRes = await axios.get("http://localhost:8080/tecnicos");
          tecnicos = tecnicosRes.data.map(t => ({
            id: t.id,
            name: t.nome || "Não informado",
            cpf: t.cpf || "Não informado",
            phone: t.email || "Não informado",
            type: "Técnico"
          }));
        }

        setUsers([...tecnicos, ...clientes]);
      } catch (error) {
        alert("Erro ao buscar usuários");
      }
    };

    fetchData();
  }, [tipoUsuario]);
  // useEffect para filtrar usuários com base no termo de pesquisa e filtros ativos
  useEffect(() => {
    let filtered = users;

    // Aplicar filtros por tipo
    filtered = filtered.filter(user => {
      if (user.type === "Cliente" && !activeFilters.showClientes) return false;
      if (user.type === "Técnico" && !activeFilters.showTecnicos) return false;
      return true;
    });

    // Aplicar filtro de pesquisa
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.cpf.includes(searchTerm) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset para primeira página quando filtros mudam
  }, [users, searchTerm, activeFilters]);

  // Calcular dados da paginação
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // A filtragem já é feita automaticamente pelo useEffect
  };
  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openFilterModal = () => setIsFilterModalOpen(true);
  const closeFilterModal = () => setIsFilterModalOpen(false);

  const handleFilterChange = (filterType) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      showClientes: true,
      showTecnicos: true
    });
  };

  const handleAddUser = () => {
    closeAddModal();
    navigate("/cadastro-cliente"); // Navega para a tela de adicionar usuário
  };

  const handleAddTechnical = () => {
    closeAddModal();
    navigate("/cadastro-tecnico"); // Navega para a tela de adicionar técnico
  };
  

  const handleDelete = async (user) => {
    try {
      if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;

      if (user.type === "Técnico") {
        await axios.delete(`http://localhost:8080/tecnicos/${user.id}`);
      } else if (user.type === "Cliente") {
        await axios.delete(`http://localhost:8080/clientes/${user.id}`);
      }
      // Atualiza a lista após excluir
      setUsers(users.filter(u => u.id !== user.id));
    } catch (error) {
      alert("Erro ao excluir usuário");
    }
  };

  const handleEdit = (user) => {
    if (user.type === "Técnico") {
      navigate(`/editar-tecnico/${user.id}`);
    } else if (user.type === "Cliente") {
      navigate(`/editar-cliente/${user.id}`);
    }
  };

  const handleAddClick = () => {
    if (tipoUsuario === "tecnico") {
      navigate("/cadastro-cliente");
    } else if(tipoUsuario === "gerente") {
      setIsAddModalOpen(true); // mostra o modal com opções
    }
  };


  return (
    <main className="user-management">
      <header className="management-header">
        <h1>Usuários</h1>
      </header>      <div className="controls-container">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input 
            type="search" 
            placeholder="Buscar..." 
            aria-label="Buscar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
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
          </button>          <button className="animated-button blue" onClick={openFilterModal}>
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
              <th>Nome</th>
              <th>CPF</th>
              <th>{tipoUsuario === "gerente" ? "Contato" : "Telefone"}</th>
              <th>Tipo</th>
              <th>Ações</th>
            </tr>
          </thead>          <tbody>
            {currentItems.map((user, index) => (
              <tr key={index}>
                <td>
                  <label>
                    <input type="radio" name="user-select" />
                    {user.name}
                  </label>
                </td>
                <td>{user.cpf}</td>
                <td>{user.phone}</td>
                <td>{user.type}</td>
                <td className="acoes">
                  <div className="actions">
                    <button
                      className="edit-button"
                      onClick={() => handleEdit(user)}
                    >
                      <img src={editar} alt="Editar" />
                    </button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(user)}
                    >
                      <img src={excluir} alt="Excluir" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>      <nav className="pagination">
        <span>
          Mostrando {totalItems === 0 ? 0 : startIndex + 1} a {Math.min(endIndex, totalItems)} de {totalItems} itens
        </span>
        <div className="page-controls">
          <button 
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              className={currentPage === page ? "active" : ""}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            ›
          </button>
        </div>
      </nav>

      {/* Modal de Filtro */}
      {isFilterModalOpen && (
        <div className="modal-overlay" onClick={closeFilterModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Filtrar Usuários</h3>
              <button className="close-button" onClick={closeFilterModal}>×</button>
            </div>
            <div className="modal-body">
              <div className="filter-options">
                <label className="filter-option">
                  <input
                    type="checkbox"
                    checked={activeFilters.showClientes}
                    onChange={() => handleFilterChange('showClientes')}
                  />
                  <span>Mostrar Clientes</span>
                </label>
                {tipoUsuario === "gerente" && (
                  <label className="filter-option">
                    <input
                      type="checkbox"
                      checked={activeFilters.showTecnicos}
                      onChange={() => handleFilterChange('showTecnicos')}
                    />
                    <span>Mostrar Técnicos</span>
                  </label>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={clearFilters}>
                Limpar Filtros
              </button>
              <button className="btn-primary" onClick={closeFilterModal}>
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Adicionar */}
      {isAddModalOpen && (
        <AdicionarAlert
          onClose={closeAddModal}
          onAddUser={handleAddUser}
          onAddTechnical={handleAddTechnical}
        />
      )}
    </main>
  );
};

export default UserManagement;
