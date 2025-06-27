package io.manager.backend.dto;

import io.manager.backend.model.RequisicaoPeca;

public class RequisicaoPecaDTO {
    private PecaDTO peca;
    private Integer quantidade;

    public RequisicaoPecaDTO(RequisicaoPeca requisicaoPeca) {
        this.peca = new PecaDTO(requisicaoPeca.getPeca());
        this.quantidade = requisicaoPeca.getQuantidade();
    }

    public PecaDTO getPeca() {
        return peca;
    }

    public Integer getQuantidade() {
        return quantidade;
    }
}
