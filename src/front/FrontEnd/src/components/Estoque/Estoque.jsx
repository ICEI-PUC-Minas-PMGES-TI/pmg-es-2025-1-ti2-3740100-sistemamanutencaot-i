import React, { useState, useEffect } from "react";
import FiltroDropdown from "../FiltroDownDrop/FiltroDownDrop.jsx";
import axios from "axios";
import styles from "./Estoque.module.css";
import AdicionarAlert from "./AdicionarAlert";
import adicionar from "../../assets/images/adicionar.png";
import pesquisar from "../../assets/images/search.png";
import ver from "../../assets/images/ver.png";
import editar from "../../assets/images/edit.png";
import excluir from "../../assets/images/lixo.png";
import Swal from 'sweetalert2';
import EditarItemEstoque from "./EditarItemEstoque";

const EstoqueTecnico = () => {
  const [filtro, setFiltro] = useState('Todos');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsFiltrados, setItemsFiltrados] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentItem, setCurrentItem] = useState(null);

  // Opções de filtro para estoque
  const opcoesFiltroEstoque = [
    { label: 'Todos', valor: 'Todos' },
    { label: 'Baixo Estoque', valor: 'Baixo' },
    { label: 'Em Estoque', valor: 'Normal' },
  ];

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get("http://localhost:8080/pecas")
      .then((res) => {
        const pecas = res.data.map(p => ({
          id: p.id,
          nome: p.nome || "Não informado",
          marca: p.marca || "Não informado",
          modelo: p.modelo || "Não informado",
          estoque: p.estoque || 0,
          segmento: p.segmento || "Não informado",
          preco: p.preco || 0,
        }));
        setItems(pecas);
      })
      .catch(() => Swal.fire('Erro!', 'Não foi possível carregar os itens do estoque.', 'error'));
  };

  // Aplicar filtro sempre que o estado de filtro, items ou searchTerm mudar
  useEffect(() => {
    let filtered = items;

    // Aplicar filtro por termo de busca
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(item => 
        item.nome.toLowerCase().includes(term) ||
        item.marca.toLowerCase().includes(term) ||
        item.modelo.toLowerCase().includes(term) ||
        item.segmento.toLowerCase().includes(term)
      );
    }

    // Aplicar filtro por estoque
    if (filtro === 'Baixo') {
      filtered = filtered.filter(item => item.estoque < 5);
    } else if (filtro === 'Normal') {
      filtered = filtered.filter(item => item.estoque >= 5);
    }

    setItemsFiltrados(filtered);
  }, [filtro, items, searchTerm]);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (item) => {
    setCurrentItem(item);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentItem(null);
  };

  const handleAddItem = (newItem) => {
    const itemToSave = {
      ...newItem,
      tipo: "Peça",
    };

    axios.post("http://localhost:8080/pecas", itemToSave)
      .then((res) => {
        const novoItem = {
          id: res.data.id,
          nome: res.data.nome,
          marca: res.data.marca,
          modelo: res.data.modelo,
          estoque: res.data.estoque,
          segmento: res.data.segmento,
          preco: res.data.preco,
        };
        
        setItems(prev => [...prev, novoItem]);
        closeAddModal();
        Swal.fire('Sucesso!', 'Item adicionado ao estoque.', 'success');
      })
      .catch(() => Swal.fire('Erro!', 'Não foi possível adicionar o item.', 'error'));
  };

  const handleUpdateItem = (updatedItem) => {
    setItems(prevItems => 
      prevItems.map(item => item.id === updatedItem.id ? updatedItem : item)
    );
    closeEditModal();
  };

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: `Você está prestes a excluir o item "${item.nome}". Essa ação não pode ser desfeita!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8080/pecas/${item.id}`)
          .then(() => {
            setItems(prev => prev.filter(i => i.id !== item.id));
            Swal.fire('Excluído!', 'O item foi excluído com sucesso.', 'success');
          })
          .catch(() => {
            Swal.fire('Erro!', 'Não foi possível excluir o item.', 'error');
          });
      }
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className={styles["user-management"]}>
      <header className={styles["management-header"]}>
        <h1>Estoque</h1>
        <p className={styles["management-subtitle"]}>Técnico de Campo</p>
      </header>

      <div className={styles["controls-container"]}>
        <form className={styles["search-form"]} onSubmit={handleSearchSubmit}>
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

        <div className={styles["button-section"]}>
          <button className={styles["animated-button"]} onClick={openAddModal}>
            <span className={styles["button-icon"]}>
              <img src={adicionar} alt="Adicionar" />
            </span>
            <span className={styles["button-text"]}>Adicionar</span>
          </button>

          <FiltroDropdown
            opcoes={opcoesFiltroEstoque}
            filtroSelecionado={filtro}
            aoSelecionarFiltro={setFiltro}
          />
        </div>
      </div>

      <div className={styles["table-container"]}>
        <table>
          <thead>
            <tr>
              <th>Nome do item</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Quantidade</th>
              <th>Segmento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {itemsFiltrados.map((item) => (
              <tr key={item.id}>
                <td>
                  <label>
                    <input type="radio" name={`item-${item.id}`} />
                    {item.nome}
                  </label>
                </td>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td className={styles.quantidade}>{item.estoque}</td>
                <td>{item.segmento}</td>
                <td className={styles.acoes}>
                  <div className={styles.actions}>
                    <button className={styles["edit-button"]} onClick={() => openEditModal(item)}>
                      <img src={editar} alt="Editar" />
                    </button>
                    <button className={styles["delete-button"]} onClick={() => handleDeleteItem(item)}>
                      <img src={excluir} alt="Excluir" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className={styles.pagination}>
        <span>Mostrando 1 a {itemsFiltrados.length} de {itemsFiltrados.length} itens</span>
        <div className={styles["page-controls"]}>
          <button>‹</button>
          <button className={styles.active}>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>›</button>
        </div>
      </nav>

      {isAddModalOpen && (
        <div className={styles.modalOverlay}>
          <AdicionarAlert onClose={closeAddModal} onAddItem={handleAddItem} />
        </div>
      )}

      {isEditModalOpen && currentItem && (
        <div className={styles.modalOverlay} onClick={closeEditModal}>
          <div onClick={(e) => e.stopPropagation()}>
            <EditarItemEstoque 
              item={currentItem} 
              onClose={closeEditModal} 
              onUpdate={handleUpdateItem} 
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default EstoqueTecnico;