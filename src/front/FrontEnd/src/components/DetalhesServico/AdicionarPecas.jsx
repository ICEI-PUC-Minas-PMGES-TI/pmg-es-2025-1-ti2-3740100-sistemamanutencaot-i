import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./AdicionarPecas.css";

const AdicionarPecas = ({ ordemId, onClose, onPeçasAdicionadas }) => {
  const [pecaIdSelecionada, setPecaIdSelecionada] = useState("");
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
  
  // Tipos de peças pré-definidos (mesmo do estoque)
  const tiposDePecas = [
    "Processador",
    "Memória RAM",
    "Placa de Vídeo",
    "Placa Mãe",
    "Armazenamento (SSD/HDD)",
    "Fonte",
    "Gabinete",
    "Cooler",
    "Monitor",
    "Teclado",
    "Mouse",
    "Headset",
    "Outros"
  ];

  useEffect(() => {
    axios.get("http://localhost:8080/pecas")
      .then(response => {
        console.log("response.data:", response.data);
        setPecasDisponiveis(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar peças:", error);
      });
  }, []);
  const adicionarPeca = () => {
    if (!pecaIdSelecionada.trim()) {
      setErro("Selecione uma peça.");
      return;
    }

    const pecaSelecionada = pecasDisponiveis.find(p => p.id === parseInt(pecaIdSelecionada));
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

    if (pecasSelecionadas.some(p => p.peca_id === pecaSelecionada.id)) {
      setErro("Esta peça já foi adicionada.");
      return;
    }

    const novaPeca = {
      id: Math.random().toString(36).substr(2, 9),
      peca_id: pecaSelecionada.id,
      tipo: pecaSelecionada.tipo,
      marca: pecaSelecionada.marca,
      modelo: pecaSelecionada.modelo,
      preco_unitario: pecaSelecionada.preco,
      quantidade: quantidade,
      estoqueAtual: pecaSelecionada.quantidade
    };

    setPecasSelecionadas([...pecasSelecionadas, novaPeca]);
    setPecaIdSelecionada("");
    setQuantidade(1);
    setErro(null);
  };

  const solicitarPeca = () => {
    if (!pecaIdSelecionada.trim()) {
      setErro("Selecione uma peça.");
      return;
    }

    const pecaSelecionada = pecasDisponiveis.find(p => p.id === parseInt(pecaIdSelecionada));
    if (!pecaSelecionada) {
      setErro("Peça não encontrada. Deseja solicitar uma nova?");
      return;
    }

    if (pecasSelecionadas.some(p => p.peca_id === pecaSelecionada.id)) {
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
    setPecaIdSelecionada("");
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

    // Criando o código temporário no formato "tipo - marca - modelo"
    const codigoTemporario = `${tipo} - ${marca} - ${modelo}`;

    const novaSolicitacao = {
      id: Math.random().toString(36).substr(2, 9),
      tipo,
      modelo,
      marca,
      segmento,
      quantidade,
      codigo: codigoTemporario,  // <-- aqui
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

    const tipoUsuario = localStorage.getItem("tipoUsuario");
    const tecnicoId = tipoUsuario === "tecnico" ? localStorage.getItem("id_tecnico") : null;

    try {
      // Primeiro, cadastra as peças novas e guarda seus IDs
      const pecasNovas = pecasSelecionadas.filter(p => p.novaPeca);

      // Mapa para guardar ID da peça nova criada: { id temporário do front : id gerado pela API }
      const mapaIdsNovasPecas = {};

      for (const pecaNova of pecasNovas) {
        const resposta = await axios.post("http://localhost:8080/pecas", {
          tipo: pecaNova.tipo,
          modelo: pecaNova.modelo,
          marca: pecaNova.marca,
          segmento: pecaNova.segmento,
          preco: 0, // ou algum valor padrão
          quantidade: 0
        });

        // Guarda o ID real retornado do backend
        mapaIdsNovasPecas[pecaNova.id] = resposta.data.id;
      }

      // Enviar peças normais (não solicitadas)
      const pecasNormais = pecasSelecionadas.filter(p => !p.solicitada && !p.novaPeca);
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
        let pecaIdParaEnviar = solicitacao.peca_id;

        // Se for peça nova, pega o ID gerado na API
        if (solicitacao.novaPeca) {
          pecaIdParaEnviar = mapaIdsNovasPecas[solicitacao.id];
        }

      const payloadRequisicao = {
        observacao: "Solicitação automática de peça",
        tecnicoId: tecnicoId ? parseInt(tecnicoId) : null,
        pecas: solicitacoes.map(solicitacao => ({
          pecaId: solicitacao.novaPeca ? mapaIdsNovasPecas[solicitacao.id] : solicitacao.peca_id,
          quantidade: solicitacao.quantidade
        }))
      };
      await axios.post("http://localhost:8080/api/requisicoes", payloadRequisicao);
      }

      onPeçasAdicionadas(pecasSelecionadas);
      onClose();

    } catch (err) {
      setErro("Erro ao salvar peças. Tente novamente.");
      console.error(err);
    }
  };


  const pecasFiltradas = pecasDisponiveis.filter(peca => 
    peca.tipo.toLowerCase().includes(busca.toLowerCase())

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
              <label className="input-label">Tipo:</label>
              <select
                value={novaPeca.tipo}
                onChange={(e) => setNovaPeca({...novaPeca, tipo: e.target.value})}
                className="form-input"
                required
              >
                <option value="">Selecione um tipo</option>
                {tiposDePecas.map((tipo, index) => (
                  <option key={index} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-row">
              <label className="input-label">Modelo:</label>
              <input
                type="text"
                placeholder="Modelo (ex: DDR4 8GB)"
                value={novaPeca.modelo}
                onChange={(e) => setNovaPeca({...novaPeca, modelo: e.target.value})}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-row">
              <label className="input-label">Marca:</label>
              <input
                type="text"
                placeholder="Marca"
                value={novaPeca.marca}
                onChange={(e) => setNovaPeca({...novaPeca, marca: e.target.value})}
                className="form-input"
                required
              />
            </div>
            
            <div className="form-row">
              <p className="radio-label">Segmento:</p>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="segmento"
                    value="notebook"
                    checked={novaPeca.segmento === "notebook"}
                    onChange={(e) => setNovaPeca({...novaPeca, segmento: e.target.value})}
                  />
                  <span>Notebook</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="segmento"
                    value="computador"
                    checked={novaPeca.segmento === "computador"}
                    onChange={(e) => setNovaPeca({...novaPeca, segmento: e.target.value})}
                  />
                  <span>Computador</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="segmento"
                    value="outros"
                    checked={novaPeca.segmento === "outros"}
                    onChange={(e) => setNovaPeca({...novaPeca, segmento: e.target.value})}
                  />
                  <span>Outros</span>
                </label>
              </div>
            </div>
            
            <div className="form-row">
              <label className="input-label">Quantidade:</label>
              <input
                type="number"
                min="1"
                value={novaPeca.quantidade}
                onChange={(e) => setNovaPeca({...novaPeca, quantidade: parseInt(e.target.value) || 1})}
                className="form-input"
                required
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
                value={pecaIdSelecionada}
                onChange={(e) => setPecaIdSelecionada(e.target.value)}
              >
                <option value="">Selecione uma peça</option>
                {pecasFiltradas.map(peca => (
                  <option key={peca.id} value={peca.id}>
                    {peca.tipo} - {peca.marca} - {peca.modelo} - (Estoque: {peca.quantidade})
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

            {!pecaIdSelecionada && (
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
                      <strong>{peca.tipo} - {peca.marca} - {peca.modelo}</strong>
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
