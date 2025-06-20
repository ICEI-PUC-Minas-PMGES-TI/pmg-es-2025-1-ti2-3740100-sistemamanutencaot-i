package io.manager.backend.dto;

public class TaxaAtrasoMensalDTO {
    private String mes;
    private double taxa;

    public TaxaAtrasoMensalDTO(String mes, double taxa) {
        this.mes = mes;
        this.taxa = taxa;
    }

    public String getMes() {
        return mes;
    }

    public void setMes(String mes) {
        this.mes = mes;
    }

    public double getTaxa() {
        return taxa;
    }

    public void setTaxa(double taxa) {
        this.taxa = taxa;
    }
}
