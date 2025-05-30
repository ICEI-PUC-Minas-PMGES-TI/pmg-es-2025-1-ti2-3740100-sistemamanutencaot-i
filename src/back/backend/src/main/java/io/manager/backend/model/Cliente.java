package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class Cliente extends PessoaFisica{

    @Id
    @Column(name = "pessoa_id")
    private Integer id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "pessoa_id")
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
