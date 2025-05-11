package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class Tecnico extends PessoaFisica {

    private String cargo;
    private String email;
    private String senha;

    @ManyToOne
    @JoinColumn(name = "loja_id")
    private Loja loja;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Tecnico() {}

    public Tecnico(String nome, String cpf, String cargo, String email, String senha, Loja loja) {
        super(nome, cpf);
        this.cargo = cargo;
        this.email = email;
        this.senha = senha;
        this.loja = loja;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Loja getLoja() {
        return loja;
    }

    public void setLoja(Loja loja) {
        this.loja = loja;
    }
}
