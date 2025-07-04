package io.manager.backend.dto;

import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;

public class OrdemServicoRequest {
    private Integer computadorId;
    private Integer tecnicoId;
    private String status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") //Formatar pra data brasileira
    private Date dataEntrada;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") //Formatar pra data brasileira
    private Date dataFinalizacao;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") //Formatar pra data brasileira
    private Date prazo;

    private Double valorTotal;
    private String descricaoOs;
    private String solucaoOs;

    // Getters e Setters
    public Integer getComputadorId() {
        return computadorId;
    }

    public void setComputadorId(Integer computadorId) {
        this.computadorId = computadorId;
    }

    public Integer getTecnicoId() {
        return tecnicoId;
    }

    public void setTecnicoId(Integer tecnicoId) {
        this.tecnicoId = tecnicoId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDataEntrada() {
        return dataEntrada;
    }

    public void setDataEntrada(Date dataEntrada) {
        this.dataEntrada = dataEntrada;
    }

    public Date getDataFinalizacao() {
        return dataFinalizacao;
    }

    public void setDataFinalizacao(Date dataFinalizacao) {
        this.dataFinalizacao = dataFinalizacao;
    }

    public Date getPrazo() {
        return prazo;
    }

    public void setPrazo(Date prazo) {
        this.prazo = prazo;
    }

    public Double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(Double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public String getDescricaoOs() {
        return descricaoOs;
    }

    public void setDescricaoOs(String descricaoOs) {
        this.descricaoOs = descricaoOs;
    }

    public String getSolucaoOs() {
        return solucaoOs;
    }

    public void setSolucaoOs(String solucaoOs) {
        this.solucaoOs = solucaoOs;
    }
}
