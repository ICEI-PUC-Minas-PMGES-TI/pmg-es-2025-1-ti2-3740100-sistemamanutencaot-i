import React from "react";
import styles from "../assets/css/PainelConfigGerente.module.css";
import edit from "../assets/images/edit.png";

function PainelConfigGerente() {
    return (
        <form action="">
            <div className={styles.conteinerPrincipal}>
                <div className={styles.field}>
                    <div className={styles.fieldText}>
                        <label className={styles.fieldLabel}>Email</label>
                        <span className={styles.fieldValue}>administrador@techlab.com.br</span>
                        
                    </div>
                    <button className={styles.editButton}>
                        <i className={styles.iconEdit}></i>
                    </button>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldText}>
                        <label className={styles.fieldLabel}>Senha</label>
                        <span className={styles.fieldValue}>
                            Última atualização em 21 de Setembro de 2024
                        </span>
                    </div>
                    <button className={styles.editButton}>
                        <i className={styles.iconEdit}></i>
                    </button>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldText}>
                        <label className={styles.fieldLabel}>Nome da Loja</label>
                        <span className={styles.fieldValue}>Tech Lab</span>
                    </div>
                    <button className={styles.editButton}>
                        <i className={styles.iconEdit}></i>
                    </button>
                </div>

                <div className={styles.field}>
                    <div className={styles.fieldText}>
                        <label className={styles.fieldLabel}>Endereço</label>
                        <span className={styles.fieldValue}>
                            Rua Comendador Francisco Baroni, 178 - Centro
                        </span>
                    </div>
                    <button className={styles.editButton}>
                        <i className={styles.iconEdit}></i>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default PainelConfigGerente;
