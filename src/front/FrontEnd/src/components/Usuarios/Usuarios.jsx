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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [users, setUsers] = useState([]); // Estado para os usuários
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8080/tecnicos"),
      axios.get("http://localhost:8080/clientes")
    ]).then(([tecnicosRes, clientesRes]) => {
      const tecnicos = tecnicosRes.data.map(t => ({
        name: t.nome || "Não informado",
        cpf: t.cpf || "Não informado",
        phone: t.telefone || "Não informado",
        type: "Técnico"
      }));
      const clientes = clientesRes.data.map(c => ({
        name: c.pessoa?.nome || "Não informado",
        cpf: c.pessoa?.cpf || "Não informado",
        phone: c.telefone || "Não informado",
        type: "Cliente"
      }));
      setUsers([...tecnicos, ...clientes]);
    }).catch(() => alert("Erro ao buscar usuários"));
  }, []);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const handleAddUser = () => {
    closeAddModal();
    navigate("/cadastro-cliente"); // Navega para a tela de adicionar usuário
  };

  const handleAddTechnical = () => {
    closeAddModal();
    navigate("/cadastro-tecnico"); // Navega para a tela de adicionar técnico
  };

  return (
    <main className="user-management">
      <header className="management-header">
        <h1>Usuários</h1>
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
            onClick={openAddModal} // Abre o modal
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
              <th>Nome</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Tipo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
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
                    <button className="edit-button">
                      <img src={editar} alt="Editar" />
                    </button>
                    <button className="delete-button">
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
