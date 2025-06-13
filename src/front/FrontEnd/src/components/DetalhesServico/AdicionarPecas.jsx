// components/DetalhesServico/AdicionarPecas.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AdicionarPecas.css";

const AdicionarPecas = ({ ordemId, onClose, onPeçasAdicionadas }) => {
  const [pecasDisponiveis, setPecasDisponiveis] = useState([]);
  const [pecasSelecionadas, setPecasSelecionadas] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/pecas')
      .then(res => setPecasDisponiveis(res.data))
      .catch(err => console.error("Erro ao buscar peças:", err));
  }, []);

  const adicionarPeca = (peca) => {
    const existente = pecasSelecionadas.find(p => p.id === peca.id);
    if (!existente) {
      setPecasSelecionadas([...pecasSelecionadas, { ...peca, quantidade: 1 }]);
    }
  };

  const alterarQuantidade = (pecaId, quantidade) => {
    if (quantidade < 1) return;
    setPecasSelecionadas(prev =>
      prev.map(p => p.id === pecaId ? { ...p, quantidade } : p)
    );
  };

  const salvarPecas = async () => {
    setErro(null);
    try {
      // Validação de estoque
      for (const pecaSelecionada of pecasSelecionadas) {
        const pecaEstoque = pecasDisponiveis.find(p => p.id === pecaSelecionada.id);
        if (!pecaEstoque) {
          setErro(`Peça ${pecaSelecionada.nome} não encontrada no estoque.`);
          return;
        }
        if (pecaSelecionada.quantidade > pecaEstoque.estoque) {
          setErro(`Quantidade insuficiente para a peça ${pecaSelecionada.nome}. Disponível: ${pecaEstoque.estoque}`);
          return;
        }
      }

      // Salvar e atualizar estoque
      for (const pecaSelecionada of pecasSelecionadas) {
        // Salvar peça utilizada
        await axios.post('http://localhost:8080/pecas-utilizadas', {
          ordemId: ordemId,
          pecaId: pecaSelecionada.id,
          precoUnitario: pecaSelecionada.preco,
          quantidade: pecaSelecionada.quantidade
        });

        // Atualizar estoque
        const pecaEstoqueAtual = pecasDisponiveis.find(p => p.id === pecaSelecionada.id);
        const novaQuantidade = pecaEstoqueAtual.estoque - pecaSelecionada.quantidade;
        await axios.put(`http://localhost:8080/pecas/${pecaSelecionada.id}`, {
          ...pecaEstoqueAtual,
          estoque: novaQuantidade
        });
      }

      onPeçasAdicionadas();
      onClose();
    } catch (err) {
      console.error("Erro ao salvar peças:", err);
      setErro("Erro ao salvar peças. Tente novamente.");
    }
  };

  return (
    <div className="modal-adicionar">
      <div className="conteudo-modal">
        <h2>Selecionar Peças</h2>
        {erro && <p className="erro">{erro}</p>}
        <ul className="lista-pecas">
          {pecasDisponiveis.map(peca => (
            <li key={peca.id}>
              <div>
                <strong>{peca.nome}</strong> - {peca.codigo} ({peca.estoque} em estoque)
              </div>
              <button onClick={() => adicionarPeca(peca)}>Adicionar</button>
            </li>
          ))}
        </ul>

        <h3>Peças Selecionadas</h3>
        <ul className="lista-selecionadas">
          {pecasSelecionadas.map(p => (
            <li key={p.id}>
              {p.nome} - Qtd:
              <input
                type="number"
                min="1"
                max={pecasDisponiveis.find(pd => pd.id === p.id)?.estoque || 1}
                value={p.quantidade}
                onChange={(e) => alterarQuantidade(p.id, parseInt(e.target.value))}
              />
            </li>
          ))}
        </ul>

        <div className="botoes-modal">
          <button onClick={salvarPecas}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default AdicionarPecas;
