package io.manager.backend.dto;

public class ProdutoDestaqueDTO {
    private String nome;
    private double valor;
    private long quantidade;
    private String cor;
    private int porcentagem;

    public ProdutoDestaqueDTO(String nome, double valor, long quantidade, String cor, int porcentagem) {
        this.nome = nome;
        this.valor = valor;
        this.quantidade = quantidade;
        this.cor = cor;
        this.porcentagem = porcentagem;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getValor() {
        return valor;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getPorcentagem() {
        return porcentagem;
    }

    public void setPorcentagem(int porcentagem) {
        this.porcentagem = porcentagem;
    }

    public long getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(long quantidade) {
        this.quantidade = quantidade;
    }    
}