package io.manager.backend.model;

import jakarta.persistence.Entity;

@Entity
public class PessoaFisica extends Pessoa {

    private String cpf;

    public PessoaFisica() {}

    public PessoaFisica(String nome, String cpf) {
        super(null, nome);
        this.cpf = cpf;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}

