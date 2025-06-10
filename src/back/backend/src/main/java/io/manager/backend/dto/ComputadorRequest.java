package io.manager.backend.dto;

import io.manager.backend.model.Cliente;
import io.manager.backend.model.Computador;

public class ComputadorRequest {
    private Integer clienteId;
    private String tipo;
    private String marca;
    private String modelo;
    
    public Integer getClienteId() {
        return clienteId;
    }
    public void setClienteId(Integer clienteId) {
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
    
    public Computador toComputador(Cliente cliente) {
        return new Computador(cliente, tipo, marca, modelo);
    }

    
}
