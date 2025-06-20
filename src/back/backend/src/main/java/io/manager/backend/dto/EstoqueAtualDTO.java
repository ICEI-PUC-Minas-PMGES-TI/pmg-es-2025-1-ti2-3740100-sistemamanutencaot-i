package io.manager.backend.dto;

public class EstoqueAtualDTO {
    private String nome;
    private int quantidade;
    private String status; // "aumento", "reducao", "neutro"

    public EstoqueAtualDTO(String nome, int quantidade, String status) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.status = status;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}