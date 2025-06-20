import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./AdicionarPecas.css";

const AdicionarPecas = ({ ordemId, onClose, onPeçasAdicionadas }) => {
  const [codigoPeca, setCodigoPeca] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [pecasSelecionadas, setPecasSelecionadas] = useState([]);
  const [erro, setErro] = useState(null);

  const adicionarPeca = () => {
    if (!codigoPeca.trim()) {
      setErro("Selecione o código da peça.");
      return;
    }

    const pecaSelecionada = pecasDisponiveis.find(p => p.codigo === codigoPeca);
    if (!pecaSelecionada) {
      setErro("Peça não encontrada.");
      return;
    }

    if (pecasSelecionadas.some(p => p.codigo === codigoPeca)) {
      setErro("Esta peça já foi adicionada.");
      return;
    }

    const novaPeca = {
      id: Math.random().toString(36).substr(2, 9), // ID temporário só para frontend
      peca_id: pecaSelecionada.id,
      codigo: pecaSelecionada.codigo,
      preco_unitario: pecaSelecionada.preco,
      quantidade: quantidade
    };

    setPecasSelecionadas([...pecasSelecionadas, novaPeca]);
    setCodigoPeca("");
    setQuantidade(1);
    setErro(null);
  };

  const removerPeca = (id) => {
    setPecasSelecionadas(pecasSelecionadas.filter(p => p.id !== id));
  };

  const salvarPecas = async () => {
    if (pecasSelecionadas.length === 0) {
      setErro("Adicione pelo menos uma peça.");
      return;
    }

    try {
      //Loop para adicionar as peças
      for (const peca of pecasSelecionadas) {
        await axios.post("http://localhost:8080/pecas-utilizadas", {
          ordemId: ordemId,
          pecaId: peca.peca_id,
          precoUnitario: peca.preco_unitario,
          quantidade: peca.quantidade
        });
      }

      onPeçasAdicionadas(pecasSelecionadas);
      onClose();
    } catch (err) {
      setErro("Erro ao salvar peças.");
      console.error(err);
    }
  };


  const [pecasDisponiveis, setPecasDisponiveis] = useState([]);

useEffect(() => {
  axios.get("http://localhost:8080/pecas")
    .then(response => {
      setPecasDisponiveis(response.data);
    })
    .catch(error => {
      console.error("Erro ao buscar peças:", error);
    });
}, []);


  return (
    <div className="modal-adicionar">
      <div className="conteudo-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Adicionar Peças</h2>
        {erro && <p className="erro">{erro}</p>}
        
        <div className="form-row">
          <select
            value={codigoPeca}
            onChange={(e) => setCodigoPeca(e.target.value)}
            aria-label="Selecionar peça"
          >
            {pecasDisponiveis.filter(p => p.estoque > 0).length === 0 ? (
              <option value="">Nenhuma peça disponível no estoque</option>
            ) : (
              <>
                <option value="">Selecione uma peça</option>
                {pecasDisponiveis
                  .filter(p => p.estoque > 0)
                  .map(peca => (
                    <option key={peca.id} value={peca.codigo}>
                      {peca.codigo} - {peca.nome} (Estoque: {peca.estoque})
                    </option>
                  ))}
              </>
            )}
          </select>
          <input
            type="number"
            min="1"
            value={quantidade}
            onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
            style={{ width: '100px' }}
          />
          <button type="button" onClick={adicionarPeca} className="add-peca-btn">
            Adicionar
          </button>
        </div>

        <h3>Peças Selecionadas</h3>
        <ul className="lista-selecionadas">
          {pecasSelecionadas.map(peca => (
            <li key={peca.id}>
              <div className="peca-info">
                <div><strong>{peca.codigo}</strong></div>
                <div>Qtd: {peca.quantidade}</div>
              </div>
              <button 
                onClick={() => removerPeca(peca.id)} 
                className="remove-peca-btn"
                aria-label="Remover peça"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        <div className="botoes-modal">
          <button onClick={salvarPecas} className="botao-salvar">
            Salvar
          </button>
          <button onClick={onClose} className="botao-cancelar">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdicionarPecas;