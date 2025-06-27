import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Cabecalho from './Cabecalho';
import RequisicaoCard from './RequisicaoCard';
import DetalhesRequisicaoModal from './DetalhesRequisicaoModal';
import Swal from 'sweetalert2';
import noRequestsImage from '../../assets/images/solicitacaoNaoEncontrada.png'; // Ajuste o caminho conforme necessário

const API_URL = 'http://localhost:8080/api/requisicoes'; // ajuste para sua URL real

const RequisicaoDePecas = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Todos');
  const [requisicaoSelecionada, setRequisicaoSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [requisicoesList, setRequisicoesList] = useState([]);

  // Pega os dados da API no carregamento
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log("🔧 JSON recebido da API:", data); // 👈 Aqui imprime o JSON
        setRequisicoesList(data);
      })
      .catch(err => {
        console.error("Erro ao carregar requisições:", err);
        Swal.fire('Erro', 'Não foi possível carregar as requisições', 'error');
      });
  }, []);


  const requisicoesFiltradas = filtroSelecionado === 'Todos'
    ? requisicoesList
    : requisicoesList.filter(r => 
        (filtroSelecionado === 'Pendentes' && r.status === 'Pendente') ||
        (filtroSelecionado === 'Aceitos' && r.status === 'Aceito') ||
        (filtroSelecionado === 'Rejeitados' && r.status === 'Rejeitado')
      );

  const abrirDetalhes = (requisicao) => {
    setRequisicaoSelecionada(requisicao);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setRequisicaoSelecionada(null);
  };

  // Atualiza status localmente e no backend
  const atualizarStatusRequisicao = (id, novoStatus) => {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...requisicoesList.find(r => r.id === id), status: novoStatus }),
    })
      .then(res => {
        if (!res.ok) throw new Error('Erro ao atualizar');
        return res.json();
      })
      .then(atualizada => {
        setRequisicoesList(prevList =>
          prevList.map(req => (req.id === id ? atualizada : req))
        );
      })
      .catch(err => {
        console.error(err);
        Swal.fire('Erro', 'Não foi possível atualizar a requisição', 'error');
      });
  };

  const handleAceitar = async () => {
    const confirmacao = await Swal.fire({
      title: 'Confirmar aceitação',
      text: `Deseja realmente aceitar a requisição #${requisicaoSelecionada.id}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#43a047',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, aceitar!',
      cancelButtonText: 'Cancelar'
    });

    if (confirmacao.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:8080/api/requisicoes/${requisicaoSelecionada.id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'Aceito' })  // só envia o status
        });

        if (!response.ok) throw new Error('Erro ao atualizar status');

        const dataAtualizada = await response.json();

        // Atualiza a lista local com o status atualizado
        setRequisicoesList(prevList =>
          prevList.map(req => (req.id === dataAtualizada.id ? dataAtualizada : req))
        );

        Swal.fire({
          icon: 'success',
          title: 'Requisição Aceita!',
          text: `Requisição #${requisicaoSelecionada.id} aceita com sucesso.`,
          confirmButtonColor: '#43a047',
        });
        fecharModal();
      } catch (error) {
        console.error('Erro ao aceitar requisição:', error);
        Swal.fire('Erro', 'Não foi possível aceitar a requisição', 'error');
      }
    }
  };

  const handleRecusar = async () => {
    const confirmacao = await Swal.fire({
      title: 'Confirmar recusa',
      text: `Deseja realmente recusar a requisição #${requisicaoSelecionada.id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e53935',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, recusar!',
      cancelButtonText: 'Cancelar'
    });

    if (confirmacao.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:8080/api/requisicoes/${requisicaoSelecionada.id}/status`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ status: 'Rejeitado' })  // só envia o status
        });

        if (!response.ok) throw new Error('Erro ao atualizar status');

        const dataAtualizada = await response.json();

        setRequisicoesList(prevList =>
          prevList.map(req => (req.id === dataAtualizada.id ? dataAtualizada : req))
        );

        Swal.fire({
          icon: 'error',
          title: 'Requisição Recusada!',
          text: `Requisição #${requisicaoSelecionada.id} foi recusada.`,
          confirmButtonColor: '#e53935',
        });
        fecharModal();
      } catch (error) {
        console.error('Erro ao recusar requisição:', error);
        Swal.fire('Erro', 'Não foi possível recusar a requisição', 'error');
      }
    }
  };


  return (
    <div className={styles.screenContainer}>
      <Cabecalho
        filtroSelecionado={filtroSelecionado}
        setFiltroSelecionado={setFiltroSelecionado}
      />

      <div className={styles.cardGrid}>
        {requisicoesFiltradas.length > 0 ? (
          requisicoesFiltradas.map(requisicao => (
            <RequisicaoCard 
              key={requisicao.id} 
              requisicao={requisicao} 
              onVerDetalhes={() => abrirDetalhes(requisicao)}
            />
          ))
        ) : (
          <div className={styles.noRequestsContainer}>
            <img 
              src={noRequestsImage} 
              alt="Nenhuma solicitação encontrada" 
              className={styles.noRequestsImage}
            />
            <p className={styles.noRequestsText}>Nenhuma solicitação encontrada</p>
          </div>
        )}
      </div>

      {modalAberto && (
        <DetalhesRequisicaoModal 
          requisicao={requisicaoSelecionada}
          onClose={fecharModal}
          onAceitar={handleAceitar}
          onRecusar={handleRecusar}
        />
      )}
    </div>
  );
};

export default RequisicaoDePecas;
