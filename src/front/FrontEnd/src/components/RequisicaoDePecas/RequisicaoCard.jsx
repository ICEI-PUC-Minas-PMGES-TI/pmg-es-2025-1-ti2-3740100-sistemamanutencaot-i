import React from 'react';
import styles from './RequisicaoCard.module.css';

const RequisicaoCard = ({ requisicao, onVerDetalhes }) => { // Adicione onVerDetalhes aqui
  const getStatusClass = () => {
    switch(requisicao.status) {
      case 'Pendente': return styles.statusPendente;
      case 'Aceito': return styles.statusAceito;
      case 'Rejeitado': return styles.statusRejeitado;
      default: return '';
    }
  };

  const getStatusColor = () => {
    switch(requisicao.status) {
      case 'Pendente': return '#f9a825';
      case 'Aceito': return '#43a047';
      case 'Rejeitado': return '#e53935';
      default: return '#0a1a4f';
    }
  };

  return (
    <div className={styles.requestCard}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardId}>#{requisicao.id}</h2>
        <div className={`${styles.cardStatus} ${getStatusClass()}`}>
          <span 
            className={styles.statusIndicator} 
            style={{ backgroundColor: getStatusColor() }}
          ></span>
          {requisicao.status}
        </div>
      </div>
      
      <p className={styles.cardDate}>
        {requisicao.dataSolicitacao}
      </p>
      
      <table className={styles.componentTable}>
        <thead>
          <tr>
            <th>Componente</th>
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
      
      <p className={styles.observationsLabel}>
        Observações:
      </p>
      <p className={styles.observationsText}>
        {requisicao.observacao}
      </p>
      
      <button
        className={styles.detailsButton}
        type="button"
        onClick={() => onVerDetalhes(requisicao)} // Corrigido aqui
      >
        Ver Detalhes <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default RequisicaoCard;