import React from 'react';
import styles from './DetalhesRequisicaoModal.module.css';

const DetalhesRequisicaoModal = ({ requisicao, onClose, onAceitar, onRecusar }) => {
  if (!requisicao) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <button
          aria-label="Fechar"
          className={styles.closeButton}
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>

        <h1 className={styles.modalTitle}>
          Requisição <span className={styles.modalId}>#{requisicao.id}</span>
        </h1>
        
        <p className={styles.solicitante}>
          Solicitado por: <span className={styles.solicitanteNome}>{requisicao.tecnicoNome}</span>
        </p>

        <div className={styles.infoContainer}>
          <div className={styles.infoBox}>
            <label className={styles.infoLabel}>Data da Solicitação:</label>
            <span className={styles.infoValue}>{requisicao.dataSolicitacao}</span>
          </div>
          <div className={styles.infoBox}>
            <label className={styles.infoLabel}>Status Atual:</label>
            <span className={`${styles.statusBadge} ${
              requisicao.status === 'Pendente' ? styles.pendente :
              requisicao.status === 'Aceito' ? styles.aceito : styles.rejeitado
            }`}>
              <i className={`fas ${
                requisicao.status === 'Pendente' ? 'fa-hourglass-half' :
                requisicao.status === 'Aceito' ? 'fa-check' : 'fa-times'
              }`}></i>
              {requisicao.status}
            </span>
          </div>
        </div>

        <table className={styles.detalhesTable}>
          <thead>
            <tr>
              <th>Componente</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {requisicao.requisicaoPecas.map((item) => (
              <tr key={item.peca.id}>
                <td>{`${item.peca.tipo} ${item.peca.marca} ${item.peca.modelo}`}</td>
                <td className={styles.componentQuantity}>{item.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.observacoesContainer}>
          <div className={styles.observacoesBox}>
            <label className={styles.observacoesLabel}>Observações:</label>
            <p className={styles.observacoesTexto}>
              {requisicao.observacao || 'Nenhuma observação a pontuar.'}
            </p>
          </div>
        </div>

        {requisicao.status === 'Pendente' && (
          <div className={styles.acoesContainer}>
            <button
              className={`${styles.acaoButton} ${styles.aceitarButton}`}
              onClick={onAceitar}
            >
              Aceitar <br />Requisição
            </button>
            <button
              className={`${styles.acaoButton} ${styles.recusarButton}`}
              onClick={onRecusar}
            >
              Recusar <br />Requisição
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetalhesRequisicaoModal;