import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Estoque.module.css"; // Corrigido a importação
import AdicionarAlert from "./AdicionarAlert"; // Adicionado import
import adicionar from "../../assets/images/adicionar.png";
import filtrar from "../../assets/images/Filtro1.png";
import pesquisar from "../../assets/images/search.png";
import ver from "../../assets/images/ver.png";
import editar from "../../assets/images/edit.png";
import excluir from "../../assets/images/lixo.png";

const EstoqueTecnico = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/pecas")
      .then((res) => {
        const pecas = res.data.map(p => ({
          id: p.id,
          nome: p.nome || "Não informado",
          marca: p.marca || "Não informado",
          modelo: p.modelo || "Não informado",
          estoque: p.estoque || 0,   // <- Aqui troquei para estoque
          segmento: p.segmento || "Não informado",
          preco: p.preco || 0,
        }));
        setItems(pecas);
      })
      .catch(() => alert("Erro ao buscar peças"));
  }, []);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const handleAddItem = (newItem) => {
    const itemToSave = {
      ...newItem,
      tipo: "Peça",       // Força tipo "Peça"
    };

    axios.post("http://localhost:8080/pecas", itemToSave)
      .then((res) => {
        setItems((prev) => [...prev, res.data]);
        closeAddModal();
      })
      .catch(() => alert("Erro ao adicionar item"));
  };

  return (
    <main className={styles["user-management"]}>
      <header className={styles["management-header"]}>
        <h1>Estoque</h1>
        <p className={styles["management-subtitle"]}>Técnico de Campo</p>
      </header>

      <div className={styles["controls-container"]}>
        <form className={styles["search-form"]}>
          <input type="search" placeholder="Buscar..." aria-label="Buscar" />
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

          <button className={`${styles["animated-button"]} ${styles["blue"]}`}>
            <span className={styles["button-icon"]}>
              <img src={filtrar} alt="Filtrar" />
            </span>
            <span className={styles["button-text"]}>Filtrar</span>
          </button>
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
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <label>
                    <input type="radio" name={`item-${item.id}`} />
                    {item.nome}
                  </label>
                </td>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td className={styles.quantidade}>{item.estoque}</td> {/* <-- aqui */}
                <td>{item.segmento}</td>
                <td className={styles.acoes}>
                  <div className={styles.actions}>
                    <button className={styles["view-button"]}>
                      <img src={ver} alt="Ver" />
                    </button>
                    <button className={styles["edit-button"]}>
                      <img src={editar} alt="Editar" />
                    </button>
                    <button className={styles["delete-button"]}>
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
        <span>Mostrando 1 a 8 de 40 itens</span>
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
    </main>
  );
};

export default EstoqueTecnico;
