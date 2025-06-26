import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Usuarios.css";
import editar from "../../assets/images/edit.png";
import adicionar from "../../assets/images/adicionar.png";
import excluir from "../../assets/images/lixo.png";
import pesquisar from "../../assets/images/search.png";
import AdicionarAlert from "./AdicionarAlert";
import FiltroDownDrop from "../FiltroDownDrop/FiltroDownDrop.jsx";
import Swal from 'sweetalert2';
import EditarCliente from "./EditarCliente.jsx";
import EditarTecnico from "./EditarTecnico.jsx";

const UserManagement = () => {
  const tipoUsuario = localStorage.getItem("tipoUsuario");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditTecnicoModalOpen, setIsEditTecnicoModalOpen] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const [currentEditTecnicoId, setCurrentEditTecnicoId] = useState(null);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroTipo, setFiltroTipo] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const navigate = useNavigate();

  // Opções de filtro para usuários
  const opcoesFiltro = [
    { label: 'Todos', valor: 'Todos' },
    { label: 'Apenas Clientes', valor: 'Clientes' },
  ];
  
  // Se for gerente, adiciona opção de técnicos
  if (tipoUsuario === "gerente") {
    opcoesFiltro.push({ label: 'Apenas Técnicos', valor: 'Técnicos' });
  }

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

      const allUsers = [...tecnicos, ...clientes];
      setUsers(allUsers);
      setFilteredUsers(allUsers);
    } catch (error) {
      alert("Erro ao buscar usuários");
    }
  };

  useEffect(() => {
    fetchData();
  }, [tipoUsuario]);

  // Filtrar usuários com base nos critérios
  useEffect(() => {
    let filtered = users;

    // Aplicar filtro por tipo
    if (filtroTipo !== 'Todos') {
      filtered = filtered.filter(user => 
        filtroTipo === 'Clientes' ? user.type === 'Cliente' : user.type === 'Técnico'
      );
    }

    // Aplicar filtro por termo de busca
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.cpf.includes(searchTerm) ||
        user.phone.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [users, searchTerm, filtroTipo]);

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
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const handleAddUser = () => {
    closeAddModal();
    navigate("/cadastro-cliente");
  };

  const handleAddTechnical = () => {
    closeAddModal();
    navigate("/cadastro-tecnico");
  };
  
  const handleDelete = async (user) => {
    const result = await Swal.fire({
      title: 'Tem certeza?',
      text: `Você está prestes a excluir ${user.type} ${user.name}. Essa ação não pode ser desfeita!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      try {
        if (user.type === "Técnico") {
          await axios.delete(`http://localhost:8080/tecnicos/${user.id}`);
        } else if (user.type === "Cliente") {
          await axios.delete(`http://localhost:8080/clientes/${user.id}`);
        }
        setUsers(users.filter(u => u.id !== user.id));
        Swal.fire('Excluído!', 'O usuário foi excluído com sucesso.', 'success');
      } catch (error) {
        Swal.fire('Erro!', 'Não foi possível excluir o usuário.', 'error');
      }
    }
  };

  const handleEdit = (user) => {
    if (user.type === "Técnico") {
      setCurrentEditTecnicoId(user.id);
      setIsEditTecnicoModalOpen(true);
    } else if (user.type === "Cliente") {
      setCurrentEditId(user.id);
      setIsEditModalOpen(true);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    fetchData();
  };

  const handleCloseEditTecnicoModal = () => {
    setIsEditTecnicoModalOpen(false);
    fetchData();
  };

  const handleAddClick = () => {
    if (tipoUsuario === "tecnico") {
      navigate("/cadastro-cliente");
    } else if(tipoUsuario === "gerente") {
      setIsAddModalOpen(true);
    }
  };

  return (
    <main className="user-management">
      <header className="management-header">
        <h1>Usuários</h1>
      </header>
      
      <div className="controls-container">
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
          </button>
          
          <FiltroDownDrop
            opcoes={opcoesFiltro}
            filtroSelecionado={filtroTipo}
            aoSelecionarFiltro={setFiltroTipo}
          />
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
          </thead>
          <tbody>
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
      </div>
      
      <nav className="pagination">
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

      {/* Modal de Adicionar */}
      {isAddModalOpen && (
        <AdicionarAlert
          onClose={closeAddModal}
          onAddUser={handleAddUser}
          onAddTechnical={handleAddTechnical}
        />
      )}

      {/* Modal de Edição de Cliente */}
      {isEditModalOpen && (
        <div className="modal-overlay-editar" onClick={() => setIsEditModalOpen(false)}>
          <div 
            className="modal-content-editar" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-button-editar" 
              onClick={() => setIsEditModalOpen(false)}
            >
              ×
            </button>
            <EditarCliente 
              id={currentEditId} 
              onClose={handleCloseEditModal} 
            />
          </div>
        </div>
      )}

      {/* Modal de Edição de Técnico */}
      {isEditTecnicoModalOpen && (
        <div className="modal-overlay-editar" onClick={() => setIsEditTecnicoModalOpen(false)}>
          <div 
            className="modal-content-editar" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-button-editar" 
              onClick={() => setIsEditTecnicoModalOpen(false)}
            >
              ×
            </button>
            <EditarTecnico 
              id={currentEditTecnicoId} 
              onClose={handleCloseEditTecnicoModal} 
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default UserManagement;