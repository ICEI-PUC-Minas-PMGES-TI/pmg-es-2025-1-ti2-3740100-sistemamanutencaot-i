import React, { useState } from 'react';
import styles from './index.module.css';
import Cabecalho from './Cabecalho';
import RequisicaoCard from './RequisicaoCard';
import { requisicoes } from './data/requisicoes';
import DetalhesRequisicaoModal from './DetalhesRequisicaoModal';

const RequisicaoDePecas = () => {
  const [filtroSelecionado, setFiltroSelecionado] = useState('Todos');
  const [requisicaoSelecionada, setRequisicaoSelecionada] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);

  const requisicoesFiltradas = filtroSelecionado === 'Todos'
    ? requisicoes
    : requisicoes.filter(r => 
        (filtroSelecionado === 'Pendentes' && r.status === 'Pendente') ||
        (filtroSelecionado === 'Aceitos' && r.status === 'Aceito') ||
        (filtroSelecionado === 'Rejeitados' && r.status === 'Rejeitado')
      );

  const abrirDetalhes = (requisicao) => {
  console.log('Abrindo detalhes para:', requisicao.id);
  setRequisicaoSelecionada(requisicao);
  setModalAberto(true);
};

  const fecharModal = () => {
    setModalAberto(false);
    setRequisicaoSelecionada(null);
  };

  const handleAceitar = () => {
    // Lógica para aceitar a requisição
    console.log('Requisição aceita:', requisicaoSelecionada.id);
    fecharModal();
  };

  const handleRecusar = () => {
    // Lógica para recusar a requisição
    console.log('Requisição recusada:', requisicaoSelecionada.id);
    fecharModal();
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
        console.log('Renderizando modal para:', requisicaoSelecionada?.id),
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