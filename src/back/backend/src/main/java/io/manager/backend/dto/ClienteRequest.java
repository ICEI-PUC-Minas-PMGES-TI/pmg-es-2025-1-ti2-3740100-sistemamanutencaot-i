package io.manager.backend.dto;

public class ClienteRequest {
    private String nome;
    private String tipoPessoa; // Fisica ou Juridica
    private String cpf;
    private String cnpj;
    private String inscricaoJudicial;
    private String telefone;

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getTipoPessoa() {
        return tipoPessoa;
    }
    public void setTipoPessoa(String tipoPessoa) {
        this.tipoPessoa = tipoPessoa;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getCnpj() {
        return cnpj;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public String getInscricaoJudicial() {
        return inscricaoJudicial;
    }
    public void setInscricaoJudicial(String inscricaoJudicial) {
        this.inscricaoJudicial = inscricaoJudicial;
    }
    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    
}
