package io.manager.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Computador {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int computadorId;
    private int tecnicoId;
    private String tipo;
    private String modelo;
    private String descricaoProblema;

    public Computador(int id, int computadorId, int tecnicoId, String tipo, String modelo, String descricaoProblema) {
        this.id = id;
        this.computadorId = computadorId;
        this.tecnicoId = tecnicoId;
        this.tipo = tipo;
        this.modelo = modelo;
        this.descricaoProblema = descricaoProblema;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getComputadorId() {
        return computadorId;
    }

    public void setComputadorId(int computadorId) {
        this.computadorId = computadorId;
    }

    public int getTecnicoId() {
        return tecnicoId;
    }

    public void setTecnicoId(int tecnicoId) {
        this.tecnicoId = tecnicoId;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getDescricaoProblema() {
        return descricaoProblema;
    }

    public void setDescricaoProblema(String descricaoProblema) {
        this.descricaoProblema = descricaoProblema;
    }

    @Override
    public String toString() {
        return "Computador [id=" + id + ", computadorId=" + computadorId + ", tecnicoId=" + tecnicoId + ", tipo=" + tipo
                + ", modelo=" + modelo + ", descricaoProblema=" + descricaoProblema + "]";
    }
}
