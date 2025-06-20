package io.manager.backend.dto;

public class CartoesDashboardResponse{
    private double totalVendas;
    private long reparos;
    private double ticketMedio;
    private double taxaAtraso;

    public CartoesDashboardResponse(double totalVendas, long reparos, double ticketMedio, double taxaAtraso) {
        this.totalVendas = totalVendas;
        this.reparos = reparos;
        this.ticketMedio = ticketMedio;
        this.taxaAtraso = taxaAtraso;
    }

    public double getTotalVendas() {
        return totalVendas;
    }

    public void setTotalVendas(double totalVendas) {
        this.totalVendas = totalVendas;
    }

    public long getReparos() {
        return reparos;
    }

    public void setReparos(long reparos) {
        this.reparos = reparos;
    }

    public double getTicketMedio() {
        return ticketMedio;
    }

    public void setTicketMedio(double ticketMedio) {
        this.ticketMedio = ticketMedio;
    }

    public double getTaxaAtraso() {
        return taxaAtraso;
    }

    public void setTaxaAtraso(double taxaAtraso) {
        this.taxaAtraso = taxaAtraso;
    }

    
}