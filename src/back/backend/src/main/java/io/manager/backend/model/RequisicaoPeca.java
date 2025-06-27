package io.manager.backend.model;

import jakarta.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "requisicao_peca")
public class RequisicaoPeca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;  // Id simples e gerado automaticamente

    @ManyToOne
    @JoinColumn(name = "requisicao_id", nullable = false)
    @JsonBackReference(value = "requisicao-requisicaoPeca")
    private Requisicao requisicao;

    @ManyToOne
    @JoinColumn(name = "peca_id", nullable = false)
    @JsonBackReference(value = "peca-requisicaoPeca")
    private Peca peca;

    @Column(nullable = false)
    private Integer quantidade;

    public RequisicaoPeca() {
    }

    // Getters e setters

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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
