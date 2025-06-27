package io.manager.backend.dto;

import java.util.List;

public class RequisicaoInputDTO {
    private String status;
    private String observacao;
    private Integer tecnicoId;
    private List<ItemPecaDTO> pecas;
    
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }

    public String getObservacao() {
        return observacao;
    }
    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public Integer getTecnicoId() {
        return tecnicoId;
    }
    public void setTecnicoId(Integer tecnicoId) {
        this.tecnicoId = tecnicoId;
    }

    public List<ItemPecaDTO> getPecas() {
        return pecas;
    }
    public void setPecas(List<ItemPecaDTO> pecas) {
        this.pecas = pecas;
    }

    public static class ItemPecaDTO {
        private Integer pecaId;
        private Integer quantidade;

        public Integer getPecaId() {
            return pecaId;
        }
        public void setPecaId(Integer pecaId) {
            this.pecaId = pecaId;
        }
        public Integer getQuantidade() {
            return quantidade;
        }
        public void setQuantidade(Integer quantidade) {
            this.quantidade = quantidade;
        }
    }
}
