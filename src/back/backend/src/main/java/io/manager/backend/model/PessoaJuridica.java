package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class PessoaJuridica extends Pessoa {

    private String cnpj;
    private String inscricaoJudicial;

    public PessoaJuridica() {}

    public PessoaJuridica(String nome, String cnpj, String inscricaoJudicial) {
        super(null, nome);
        this.cnpj = cnpj;
        this.inscricaoJudicial = inscricaoJudicial;
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
}

