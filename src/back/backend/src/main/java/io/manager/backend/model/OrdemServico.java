package io.manager.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.Date;

@Entity
public class OrdemServico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int computadorId;
    private int tecnicoId;
    private String status;
    private Date data_entrada; 
    private Date prazoEstimado;
    private double valorTotal;


    public OrdemServico(){}

    public OrdemServico(int computadorId, int tecnicoId, String status, Date dataEntrada, Date prazoEstimado){

    }

    public int getid() {
        return id;
    }

    public void setid(int id) {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getData_entrada() {
        return data_entrada;
    }

    public void setData_entrada(Date data_entrada) {
        this.data_entrada = data_entrada;
    }

    public Date getPrazoEstimado() {
        return prazoEstimado;
    }

    public void setPrazoEstimado(Date prazoEstimado) {
        this.prazoEstimado = prazoEstimado;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    @Override
    public String toString() {
        return "OrdemServico [id=" + id + ", computadorId=" + computadorId + ", tecnicoId=" + tecnicoId
                + ", status=" + status + ", data_entrada=" + data_entrada + ", prazoEstimado=" + prazoEstimado
                + ", valorTotal=" + valorTotal + "]";
    }

}
