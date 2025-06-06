package io.manager.backend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class OrdemServico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "computador_id")
    private Computador computador;

    @ManyToOne(optional = true)
    @JoinColumn(name = "tecnico_id")
    private Tecnico tecnico;

    private String status;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dataEntrada;

    @Temporal(TemporalType.DATE)
    private Date prazo;

    private Double valorTotal;

    private String descricaoOs;

    private String solucaoOs;

    public OrdemServico() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Computador getComputador() {
        return computador;
    }

    public void setComputador(Computador computador) {
        this.computador = computador;
    }

    public Tecnico getTecnico() {
        return tecnico;
    }

    public void setTecnico(Tecnico tecnico) {
        this.tecnico = tecnico;
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

    @Override
    public String toString() {
        return "OrdemServico{id=" + id + ", computador=" + computador + ", tecnico=" + tecnico +
                ", status='" + status + "', dataEntrada=" + dataEntrada + ", prazo=" + prazo +
                ", valorTotal=" + valorTotal + ", descricaoOs='" + descricaoOs + "', solucaoOs='" + solucaoOs + "'}";
    }
}