package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class Tecnico extends PessoaFisica {

    private String cargo;
    private String email;

    @ManyToOne
    @JoinColumn(name = "loja_id")
    private Loja loja;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    public Tecnico() {}

    public Tecnico(String nome, String cpf, String cargo, String email, Loja loja, Usuario usuario) {
        super(nome, cpf);
        this.cargo = cargo;
        this.email = email;
        this.loja = loja;
        this.usuario = usuario;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }

    public Loja getLoja() {
        return loja;
    }

    public void setLoja(Loja loja) {
        this.loja = loja;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
