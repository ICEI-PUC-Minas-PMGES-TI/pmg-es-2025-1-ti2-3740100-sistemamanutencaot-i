package io.manager.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Column;

@Entity
@Table(name = "requisicao_peca")
public class RequisicaoPeca {
    @ManyToOne
    @JoinColumn(name = "requisicao_id")
    private Requisicao requisicao;

    @ManyToOne
    @JoinColumn(name = "peca_id")
    private Peca peca;

    @Column(nullable = false)
    private Integer quantidade;

    public Requisicao getRequisicao() {
        return requisicao;
    }

    public void setRequisicao(Requisicao requisicao) {
        this.requisicao = requisicao;
    }

    public Peca getPeca() {
        return peca;
    }

    public void setPeca(Peca peca) {
        this.peca = peca;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }
}
