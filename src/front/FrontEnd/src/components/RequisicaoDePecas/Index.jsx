import React, { useState } from 'react';
import styles from './index.module.css';
import Cabecalho from './Cabecalho';
import RequisicaoCard from './RequisicaoCard';
import { requisicoes } from './data/requisicoes';
import DetalhesRequisicaoModal from './DetalhesRequisicaoModal';
import Swal from 'sweetalert2'; // Importação adicionada

const RequisicaoDePecas = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Todos');
  const [requisicaoSelecionada, setRequisicaoSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [requisicoesList, setRequisicoesList] = useState(requisicoes); // Estado para gerenciar requisições

  // Atualizado para usar o estado interno
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

  // Função para atualizar o status de uma requisição
  const atualizarStatusRequisicao = (id, novoStatus) => {
    setRequisicoesList(prevList => 
      prevList.map(req => 
        req.id === id ? { ...req, status: novoStatus } : req
      )
    );
  };

  const handleAceitar = () => {
    Swal.fire({
      title: 'Confirmar aceitação',
      text: `Deseja realmente aceitar a requisição #${requisicaoSelecionada.id}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#43a047',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, aceitar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Atualiza o status da requisição
        atualizarStatusRequisicao(requisicaoSelecionada.id, 'Aceito');
        
        Swal.fire({
          icon: 'success',
          title: 'Requisição Aceita!',
          text: `Requisição #${requisicaoSelecionada.id} aceita com sucesso.`,
          confirmButtonColor: '#43a047',
        });
        fecharModal();
      }
    });
  };

  const handleRecusar = () => {
    Swal.fire({
      title: 'Confirmar recusa',
      text: `Deseja realmente recusar a requisição #${requisicaoSelecionada.id}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e53935',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sim, recusar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Atualiza o status da requisição
        atualizarStatusRequisicao(requisicaoSelecionada.id, 'Rejeitado');
        
        Swal.fire({
          icon: 'error',
          title: 'Requisição Recusada!',
          text: `Requisição #${requisicaoSelecionada.id} foi recusada.`,
          confirmButtonColor: '#e53935',
        });
        fecharModal();
      }
    });
  };

  return (
    <div className={styles.screenContainer}>
      <Cabecalho
        filtroSelecionado={filtroSelecionado}
        setFiltroSelecionado={setFiltroSelecionado}
      />

      <div className={styles.cardGrid}>
        {requisicoesFiltradas.map(requisicao => (
          <RequisicaoCard 
            key={requisicao.id} 
            requisicao={requisicao} 
            onVerDetalhes={() => abrirDetalhes(requisicao)}
          />
        ))}
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