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
    private int clienteId;
    private String tipo;
    private String marca;
    private String modelo;
    private String descricaoProblema;

    public Computador(int id, int clienteId, String tipo, String marca, String modelo, String descricaoProblema) {
        this.id = id;
        this.clienteId = clienteId;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
        this.descricaoProblema = descricaoProblema;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getClienteId() {
        return clienteId;
    }

    public void setClienteId(int clienteId) {
        this.clienteId = clienteId;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
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

    public String getDescricaoProblema() {
        return descricaoProblema;
    }

    public void setDescricaoProblema(String descricaoProblema) {
        this.descricaoProblema = descricaoProblema;
    }

    @Override
    public String toString() {
        return "Computador [id=" + id + ", clienteId=" + clienteId + ", tipo=" + tipo + ", marca=" + marca + ", modelo="
                + modelo + ", descricaoProblema=" + descricaoProblema + "]";
    }
}
