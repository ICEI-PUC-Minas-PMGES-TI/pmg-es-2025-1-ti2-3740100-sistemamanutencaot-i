package io.manager.backend;

import jakarta.persistence.*;

@Entity
public class Loja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String cnpj;
    private String nome;
    private String endereco;
    private Long gerenteId;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
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
    public Long getGerenteId() {
        return gerenteId;
    }
    public void setGerenteId(Long gerenteId) {
        this.gerenteId = gerenteId;
    }
    
}
