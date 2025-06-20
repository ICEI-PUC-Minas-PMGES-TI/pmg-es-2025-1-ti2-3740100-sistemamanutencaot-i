package io.manager.backend.dto;

public class EmailUpdateRequest {
    private String novoValor;
    private String senhaAtual;

    public String getNovoValor() {
        return novoValor;
    }

    public void setNovoValor(String novoValor) {
        this.novoValor = novoValor;
    }

    public String getSenhaAtual() {
        return senhaAtual;
    }

    public void setSenhaAtual(String senhaAtual) {
        this.senhaAtual = senhaAtual;
    }
}
