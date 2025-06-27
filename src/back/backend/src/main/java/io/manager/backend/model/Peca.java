package io.manager.backend.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Peca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String tipo;
    private Double preco;
    private String marca;
    private String modelo;
    private String segmento;
    private Integer quantidade;

    @OneToMany(mappedBy = "peca")
    private List<RequisicaoPeca> requisicaoPecas;


    // Getters e Setters
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }
    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public Double getPreco() {
        return preco;
    }
    public void setPreco(Double preco) {
        this.preco = preco;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public String getSegmento() {
        return segmento;
    }
    public void setSegmento(String segmento) {
        this.segmento = segmento;
    }
    public Integer getQuantidade() {
        return quantidade;
    }
    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public List<RequisicaoPeca> getRequisicaoPecas() {
    return requisicaoPecas;
}

    public void setRequisicaoPecas(List<RequisicaoPeca> requisicaoPecas) {
        this.requisicaoPecas = requisicaoPecas;
    }
}
