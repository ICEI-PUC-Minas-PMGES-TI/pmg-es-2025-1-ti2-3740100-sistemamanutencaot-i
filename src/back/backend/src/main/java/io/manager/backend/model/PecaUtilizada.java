package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
@IdClass(PecaUtilizadaId.class)
public class PecaUtilizada {

    @Id
    @ManyToOne
    @JoinColumn(name = "ordem_id", nullable = false)
    private OrdemServico ordemServico;

    @Id
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "peca_id", nullable = false)
    private Peca peca;

    private Integer quantidade;

    @Column(name = "preco_unitario")
    private Double precoUnitario;

    // Getters e Setters
    public OrdemServico getOrdemServico() {
        return ordemServico;
    }

    public void setOrdemServico(OrdemServico ordemServico) {
        this.ordemServico = ordemServico;
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

    public Double getPrecoUnitario() {
        return precoUnitario;
    }

    public void setPrecoUnitario(Double precoUnitario) {
        this.precoUnitario = precoUnitario;
    }
}
