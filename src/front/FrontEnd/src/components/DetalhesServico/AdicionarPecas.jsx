import React, { useState } from 'react';
import "./AdicionarPecas.css";

const AdicionarPecas = ({ ordemId, onClose, onPeçasAdicionadas }) => {
  const [codigoPeca, setCodigoPeca] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [pecasSelecionadas, setPecasSelecionadas] = useState([]);
  const [erro, setErro] = useState(null);

  const adicionarPeca = () => {
    if (!codigoPeca.trim()) {
      setErro("Digite o código da peça.");
      return;
    }

    // Verifica se a peça já foi adicionada
    if (pecasSelecionadas.some(p => p.codigo === codigoPeca)) {
      setErro("Esta peça já foi adicionada.");
      return;
    }

    const novaPeca = {
      id: Math.random().toString(36).substr(2, 9), // ID temporário
      codigo: codigoPeca,
      quantidade: quantidade
    };

    setPecasSelecionadas([...pecasSelecionadas, novaPeca]);
    // Resetar campos
    setCodigoPeca("");
    setQuantidade(1);
    setErro(null);
  };

  const removerPeca = (id) => {
    setPecasSelecionadas(pecasSelecionadas.filter(p => p.id !== id));
  };

  const salvarPecas = () => {
    if (pecasSelecionadas.length === 0) {
      setErro("Adicione pelo menos uma peça.");
      return;
    }

    // Fechar o modal e retornar à tela principal
    onPeçasAdicionadas(pecasSelecionadas);
    onClose();
  };

  return (
    <div className="modal-adicionar">
      <div className="conteudo-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Adicionar Peças</h2>
        {erro && <p className="erro">{erro}</p>}
        
        <div className="form-row">
          <input
            type="text"
            placeholder="Código da peça (ex: MEMRIARAM-CORSAIR-DDR42666HZ)"
            value={codigoPeca}
            onChange={(e) => setCodigoPeca(e.target.value)}
            aria-label="Código da peça"
          />
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