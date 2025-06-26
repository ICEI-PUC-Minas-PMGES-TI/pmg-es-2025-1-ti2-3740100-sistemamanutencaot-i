package io.manager.backend.dto;

import io.manager.backend.model.Peca;

public class PecaDTO {
    private int id;
    private Double preco;
    private String tipo;
    private String marca;
    private String modelo;
    private String segmento;
    private Integer quantidade;

    public PecaDTO(Peca peca) {
        this.id = peca.getId();
        this.preco = peca.getPreco();
        this.tipo = peca.getTipo();
        this.marca = peca.getMarca();
        this.modelo = peca.getModelo();
        this.segmento = peca.getSegmento();
        this.quantidade = peca.getQuantidade();
    }

    // Getters (se quiser, pode adicionar setters, mas geralmente DTOs são só leitura)
    public int getId() {
        return id;
    }

    public Double getPreco() {
        return preco;
    }

    public String getTipo() {
        return tipo;
    }

    public String getMarca() {
        return marca;
    }

    public String getModelo() {
        return modelo;
    }

    public String getSegmento() {
        return segmento;
    }

    public Integer getQuantidade() {
        return quantidade;
    }
}
