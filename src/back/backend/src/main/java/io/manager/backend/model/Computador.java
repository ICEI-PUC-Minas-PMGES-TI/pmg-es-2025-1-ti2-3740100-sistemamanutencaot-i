package io.manager.backend.model;

import jakarta.persistence.*;

@Entity
public class Computador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    private String tipo;

    @Column(length = 30)
    private String marca;

    @Column(length = 50)
    private String modelo;

    public Computador() {}

    public Computador(Cliente cliente, String tipo, String marca, String modelo) {
        this.cliente = cliente;
        this.tipo = tipo;
        this.marca = marca;
        this.modelo = modelo;
    }

    public Integer getId() {
        return id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
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

    @Override
    public String toString() {
        return "Computador{id=" + id + ", cliente=" + cliente + ", tipo='" + tipo + "', marca='" + marca + "', modelo='" + modelo + "'}";
    }
}
