package io.manager.backend.model;

import jakarta.persistence.*;


@Entity
public class Loja extends PessoaJuridica{

    @Id
    private Integer id; // mesmo ID da PessoaJuridica

    @Column(nullable = false)
    private String endereco;

    @Column(nullable = true)
    private String telefone;

    private String email;
    private String senha;

    // Getters e Setters
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public String getTelefone() {
        return telefone;
    }
    public void setTelefone(String telefone) {
        this.telefone = telefone;
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

    
}
