package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class Loja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private String cnpj;
    private String nome;
    private String endereco;

    @Column(name = "id_gerente")
    private Integer idGerente;

    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getCnpj() {
        return cnpj;
    }
    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getEndereco() {
        return endereco;
    }
    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }
    public Integer getIdGerente() {
        return idGerente;
    }
    public void setIdGerente(Integer idGerente) {
        this.idGerente = idGerente;
    }
    
}
