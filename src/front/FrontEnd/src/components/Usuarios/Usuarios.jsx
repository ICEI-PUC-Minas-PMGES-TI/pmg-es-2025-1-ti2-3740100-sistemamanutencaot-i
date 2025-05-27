
import React from "react";
import "./Usuarios.css";
import editar from "../../assets/images/edit.png"
import filtrar from "../../assets/images/Filtro1.png"
import adicionar from "../../assets/images/adicionar.png"
import excluir from "../../assets/images/lixo.png";
import pesquisar from "../../assets/images/search.png"

const UserManagement = () => {
  const users = Array(8).fill({
    name: "Juliana Ribeiro da Silva",
    cpf: "123.456.789-12",
    phone: "+55 (31) 9 1234-5678",
    type: "Cliente",
  });

  return (
    <main className="user-management">
      <header className="management-header">
        <h1>Usuários</h1>
      </header>

      <div className="controls-container">
        <form className="search-form">
          <input type="search" placeholder="Buscar..." aria-label="Buscar" />
          <button type="submit" aria-label="Buscar">
            <img src={pesquisar} alt="" />
          </button>
        </form>
        <div className="button-section">
          <button className="animated-button">
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
                      <img src={editar} alt="" />
                    </button>
                    <button className="delete-button">
                      <img src={excluir} alt="" />
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
    </main>
  );
};

export default UserManagement;
