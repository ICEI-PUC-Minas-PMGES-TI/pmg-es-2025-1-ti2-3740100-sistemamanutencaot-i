package io.manager.backend.dto;

public class VendaDiariaDTO {
    private int dia;
    private double valor;

    public VendaDiariaDTO(int dia, double valor) {
        this.dia = dia;
        this.valor = valor;
    }

    public int getDia() {
        return dia;
    }

    public double getValor() {
        return valor;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public void setValor(double valor) {
        this.valor = valor;
    }
}
