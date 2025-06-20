package io.manager.backend.dto;

public class CartoesDashboardResponse{
    private String totalVendas;
    private long reparos;
    private String ticketMedio;
    private String taxaAtraso;

    public CartoesDashboardResponse(double totalVendas, long reparos, double ticketMedio, double taxaAtraso) {
        this.totalVendas = String.format("R$ %.2f", totalVendas);
        this.reparos = reparos;
        this.ticketMedio = String.format("R$ %.2f", ticketMedio);
        this.taxaAtraso = String.format("%.0f%%", taxaAtraso);
    }

    public String getTotalVendas() {
        return totalVendas;
    }

    public void setTotalVendas(String totalVendas) {
        this.totalVendas = totalVendas;
    }

    public long getReparos() {
        return reparos;
    }

    public void setReparos(long reparos) {
        this.reparos = reparos;
    }

    public String getTicketMedio() {
        return ticketMedio;
    }

    public void setTicketMedio(String ticketMedio) {
        this.ticketMedio = ticketMedio;
    }

    public String getTaxaAtraso() {
        return taxaAtraso;
    }

    public void setTaxaAtraso(String taxaAtraso) {
        this.taxaAtraso = taxaAtraso;
    }

    
}