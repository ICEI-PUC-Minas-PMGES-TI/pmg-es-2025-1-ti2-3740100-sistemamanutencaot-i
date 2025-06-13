package io.manager.backend.dto;

public class PecaUtilizadaDTO {
    private Integer ordemId;
    private Integer pecaId;
    private Double precoUnitario;
    private int quantidade;

    
    public Integer getOrdemId() {
        return ordemId;
    }
    public void setOrdemId(Integer ordemId) {
        this.ordemId = ordemId;
    }
    public Integer getPecaId() {
        return pecaId;
    }
    public void setPecaId(Integer pecaId) {
        this.pecaId = pecaId;
    }
    public Double getPrecoUnitario() {
        return precoUnitario;
    }
    public void setPrecoUnitario(Double precoUnitario) {
        this.precoUnitario = precoUnitario;
    }
    public int getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    
}