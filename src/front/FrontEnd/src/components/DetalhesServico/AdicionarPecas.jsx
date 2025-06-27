import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./AdicionarPecas.css";

const AdicionarPecas = ({ ordemId, onClose, onPeçasAdicionadas }) => {
  const [codigoPeca, setCodigoPeca] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [pecasSelecionadas, setPecasSelecionadas] = useState([]);
  const [erro, setErro] = useState(null);
  const [busca, setBusca] = useState("");
  const [pecasDisponiveis, setPecasDisponiveis] = useState([]);
  const [estoqueInsuficiente, setEstoqueInsuficiente] = useState(false);
  const [solicitandoNovaPeca, setSolicitandoNovaPeca] = useState(false);
  const [novaPeca, setNovaPeca] = useState({
    tipo: "",
    modelo: "",
    marca: "",
    segmento: "",
    quantidade: 1
  });

  useEffect(() => {
    axios.get("http://localhost:8080/pecas")
      .then(response => {
        setPecasDisponiveis(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar peças:", error);
      });
  }, []);

  const adicionarPeca = () => {
    if (!codigoPeca.trim()) {
      setErro("Selecione o código da peça.");
      return;
    }

    const pecaSelecionada = pecasDisponiveis.find(p => p.codigo === codigoPeca);
    if (!pecaSelecionada) {
      setErro("Peça não encontrada. Deseja solicitar uma nova?");
      return;
    }

    if (quantidade > pecaSelecionada.quantidade) {
      setEstoqueInsuficiente(true);
      setErro(`Estoque insuficiente! Disponível: ${pecaSelecionada.quantidade}`);
      return;
    } else {
      setEstoqueInsuficiente(false);
    }

    if (pecasSelecionadas.some(p => p.codigo === codigoPeca)) {
      setErro("Esta peça já foi adicionada.");
      return;
    }

    const novaPeca = {
      id: Math.random().toString(36).substr(2, 9),
      peca_id: pecaSelecionada.id,
      codigo: pecaSelecionada.codigo,
      nome: pecaSelecionada.nome,
      preco_unitario: pecaSelecionada.preco,
      quantidade: quantidade,
      estoqueAtual: pecaSelecionada.quantidade
    };

    setPecasSelecionadas([...pecasSelecionadas, novaPeca]);
    setCodigoPeca("");
    setQuantidade(1);
    setErro(null);
  };

  const solicitarPeca = () => {
    if (!codigoPeca.trim()) {
      setErro("Selecione o código da peça.");
      return;
    }

    const pecaSelecionada = pecasDisponiveis.find(p => p.codigo === codigoPeca);
    if (!pecaSelecionada) {
      setErro("Peça não encontrada. Deseja solicitar uma nova?");
      return;
    }

    if (pecasSelecionadas.some(p => p.codigo === codigoPeca)) {
      setErro("Esta peça já foi adicionada.");
      return;
    }

    const novaPeca = {
      id: Math.random().toString(36).substr(2, 9),
      peca_id: pecaSelecionada.id,
      codigo: pecaSelecionada.codigo,
      nome: pecaSelecionada.nome,
      preco_unitario: pecaSelecionada.preco,
      quantidade: quantidade,
      estoqueAtual: pecaSelecionada.quantidade,
      solicitada: true
    };

    setPecasSelecionadas([...pecasSelecionadas, novaPeca]);
    setCodigoPeca("");
    setQuantidade(1);
    setErro(null);
    setEstoqueInsuficiente(false);
  };

  const iniciarSolicitacaoNovaPeca = () => {
    setSolicitandoNovaPeca(true);
    setErro(null);
  };

  const cancelarSolicitacaoNovaPeca = () => {
    setSolicitandoNovaPeca(false);
    setNovaPeca({
      tipo: "",
      modelo: "",
      marca: "",
      segmento: "",
      quantidade: 1
    });
  };

  const adicionarSolicitacaoNovaPeca = () => {
    const { tipo, modelo, marca, segmento, quantidade } = novaPeca;
    
    if (!tipo || !modelo || !marca || !segmento || !quantidade) {
      setErro("Preencha todos os campos da peça");
      return;
    }

    const novaSolicitacao = {
      id: Math.random().toString(36).substr(2, 9),
      tipo,
      modelo,
      marca,
      segmento,
      quantidade,
      novaPeca: true,
      solicitada: true
    };

    setPecasSelecionadas([...pecasSelecionadas, novaSolicitacao]);
    setSolicitandoNovaPeca(false);
    setNovaPeca({
      tipo: "",
      modelo: "",
      marca: "",
      segmento: "",
      quantidade: 1
    });
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
      // Enviar peças normais
      const pecasNormais = pecasSelecionadas.filter(p => !p.solicitada);
      for (const peca of pecasNormais) {
        await axios.post("http://localhost:8080/pecas-utilizadas", {
          ordemId: ordemId,
          pecaId: peca.peca_id,
          precoUnitario: peca.preco_unitario,
          quantidade: peca.quantidade
        });
      }

      // Enviar solicitações de peças (existentes e novas)
      const solicitacoes = pecasSelecionadas.filter(p => p.solicitada);
      for (const solicitacao of solicitacoes) {
        if (solicitacao.novaPeca) {
          // Enviar solicitação para peça não cadastrada
          await axios.post("http://localhost:8080/solicitacoes-novas-pecas", {
            ordemId: ordemId,
            tipo: solicitacao.tipo,
            modelo: solicitacao.modelo,
            marca: solicitacao.marca,
            segmento: solicitacao.segmento,
            quantidade: solicitacao.quantidade
          });
        } else {
          // Enviar solicitação para peça existente
          await axios.post("http://localhost:8080/solicitacoes-pecas", {
            ordemId: ordemId,
            pecaId: solicitacao.peca_id,
            quantidade: solicitacao.quantidade
          });
        }
      }

      onPeçasAdicionadas(pecasSelecionadas);
      onClose();
    } catch (err) {
      setErro("Erro ao salvar peças. Tente novamente.");
      console.error(err);
    }
  };

  const pecasFiltradas = pecasDisponiveis.filter(peca => 
    peca.codigo.toLowerCase().includes(busca.toLowerCase()) || 
    peca.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="modal-adicionar">
      <div className="conteudo-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Adicionar Peças</h2>
        {erro && <p className="erro">{erro}</p>}
        
        {solicitandoNovaPeca ? (
          <div className="formulario-nova-peca">
            <h3>Solicitar Nova Peça</h3>
            
            <div className="form-row">
              <input
                type="text"
                placeholder="Tipo (ex: Memória RAM)"
                value={novaPeca.tipo}
                onChange={(e) => setNovaPeca({...novaPeca, tipo: e.target.value})}
              />
            </div>
            
            <div className="form-row">
              <input
                type="text"
                placeholder="Modelo (ex: DDR4 8GB)"
                value={novaPeca.modelo}
                onChange={(e) => setNovaPeca({...novaPeca, modelo: e.target.value})}
              />
            </div>
            
            <div className="form-row">
              <input
                type="text"
                placeholder="Marca"
                value={novaPeca.marca}
                onChange={(e) => setNovaPeca({...novaPeca, marca: e.target.value})}
              />
            </div>
            
            <div className="form-row">
              <input
                type="text"
                placeholder="Segmento (ex: Computador)"
                value={novaPeca.segmento}
                onChange={(e) => setNovaPeca({...novaPeca, segmento: e.target.value})}
              />
            </div>
            
            <div className="form-row">
              <input
                type="number"
                min="1"
                value={novaPeca.quantidade}
                onChange={(e) => setNovaPeca({...novaPeca, quantidade: parseInt(e.target.value) || 1})}
                placeholder="Quantidade"
                style={{ width: '100px' }}
              />
            </div>
            
            <div className="botoes-modal">
              <button onClick={adicionarSolicitacaoNovaPeca} className="botao-salvar">
                Adicionar Solicitação
              </button>
              <button onClick={cancelarSolicitacaoNovaPeca} className="botao-cancelar">
                Cancelar
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="form-row">
              <input
                type="text"
                placeholder="Buscar peça por código ou nome..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                style={{ flex: 2 }}
              />
            </div>
            
            <div className="form-row">
              <select
                value={codigoPeca}
                onChange={(e) => setCodigoPeca(e.target.value)}
                aria-label="Selecionar peça"
                style={{ flex: 2 }}
              >
                <option value="">Selecione uma peça</option>
                {pecasFiltradas.map(peca => (
                  <option 
                    key={peca.id} 
                    value={peca.codigo}
                    className={peca.quantidade === 0 ? "opcao-esgotada" : ""}
                  >
                    {peca.codigo} - {peca.nome} 
                    {peca.quantidade === 0 ? " (ESGOTADO)" : ` (Estoque: ${peca.quantidade})`}
                  </option>
                ))}
              </select>
              
              <input
                type="number"
                min="1"
                value={quantidade}
                onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                style={{ width: '100px' }}
                aria-label="Quantidade"
              />
              
              {estoqueInsuficiente ? (
                <button 
                  type="button" 
                  onClick={solicitarPeca} 
                  className="add-peca-btn"
                  style={{ backgroundColor: '#ff9500' }}
                >
                  Solicitar
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={adicionarPeca} 
                  className="add-peca-btn"
                >
                  Adicionar
                </button>
              )}
            </div>

            {!codigoPeca && (
              <div className="form-row">
                <button 
                  onClick={iniciarSolicitacaoNovaPeca} 
                  className="add-peca-btn"
                  style={{ backgroundColor: '#4d5bf9' }}
                >
                  Solicitar Peça Não Cadastrada
                </button>
              </div>
            )}
          </>
        )}

        <h3>Peças Selecionadas</h3>
        <ul className="lista-selecionadas">
          {pecasSelecionadas.map(peca => (
            <li 
              key={peca.id} 
              className={peca.solicitada ? "peca-solicitada" : ""}
            >
              <div className="peca-info">
                <div>
                  {peca.novaPeca ? (
                    <>
                      <strong>Nova Solicitação:</strong><br />
                      Tipo: {peca.tipo}<br />
                      Modelo: {peca.modelo}<br />
                      Marca: {peca.marca}<br />
                      Segmento: {peca.segmento}
                    </>
                  ) : (
                    <>
                      <strong>{peca.codigo}</strong> - {peca.nome}
                      {peca.solicitada && <span className="solicitada-tag"> (SOLICITADA)</span>}
                    </>
                  )}
                </div>
                <div>
                  Qtd: {peca.quantidade} 
                  {!peca.solicitada && !peca.novaPeca && ` | Estoque: ${peca.estoqueAtual}`}
                </div>
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
          
          {pecasSelecionadas.length === 0 && (
            <li className="lista-vazia">
              Nenhuma peça selecionada. Adicione peças acima.
            </li>
          )}
        </ul>

        <div className="botoes-modal">
          <button onClick={salvarPecas} className="botao-salvar">
            Salvar Peças
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