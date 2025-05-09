package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class PessoaJuridica {

    @Id
    private int pessoaId;

    private String cnpj;

    @OneToOne
    @MapsId
    @JoinColumn(name = "pessoa_id")
    private Pessoa pessoa;

    public PessoaJuridica() {}

    public PessoaJuridica(Pessoa pessoa, String cnpj) {
        this.pessoa = pessoa;
        this.cnpj = cnpj;
    }

    public int getPessoaId() {
        return pessoaId;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }
}
