package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @OneToOne 
    @JoinColumn(name = "pessoa_id", nullable = false)
    private Pessoa pessoa;

    @Column(length = 20)
    private String telefone;

    public Cliente() {}

    public Cliente(Pessoa pessoa, String telefone) {
        this.pessoa = pessoa;
        this.telefone = telefone;
    }

    public Integer getId() {
        return id;
    }

    public Pessoa getPessoa() {
        return pessoa;
    }

    public void setPessoa(Pessoa pessoa) {
        this.pessoa = pessoa;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    @Override
    public String toString() {
        return "Cliente{id=" + id + ", pessoa=" + pessoa + ", telefone='" + telefone + "'}";
    }
}
