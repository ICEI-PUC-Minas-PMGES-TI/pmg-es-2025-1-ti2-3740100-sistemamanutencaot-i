package io.manager.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.MapsId;
import jakarta.persistence.OneToOne;

@Entity
public class PessoaFisica {

    @Id
    private int pessoaId;

    private String cpf;

    @OneToOne
    @MapsId
    @JoinColumn(name = "pessoa_id")
    private Pessoa pessoa;

    public PessoaFisica() {}

    public PessoaFisica(Pessoa pessoa, String cpf) {
        this.pessoa = pessoa;
        this.cpf = cpf;
    }

    public int getPessoaId() {
        return pessoaId;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }
}
