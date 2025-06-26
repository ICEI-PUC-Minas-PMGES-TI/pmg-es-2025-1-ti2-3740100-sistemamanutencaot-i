package io.manager.backend.model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Requisicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String status;

    @ManyToMany
    @JoinTable(
        name = "requisicao_peca",
        joinColumns = @JoinColumn(name = "requisicao_id"),
        inverseJoinColumns = @JoinColumn(name = "peca_id")
    )
    private List<Peca> pecasRequeridas;

    private String observacao;

    @Temporal(TemporalType.TIMESTAMP)
    private Date dataSolicitacao;

    @ManyToOne
    @JoinColumn(name = "tecnico_id", nullable = false)
    private Tecnico tecnico;

    // Getters e Setters 

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<Peca> getPecasRequeridas() {
        return pecasRequeridas;
    }

    public void setPecasRequeridas(List<Peca> pecasRequeridas) {
        this.pecasRequeridas = pecasRequeridas;
    }

    public String getObservacao() {
        return observacao;
    }

    public void setObservacao(String observacao) {
        this.observacao = observacao;
    }

    public Date getDataSolicitacao() {
        return dataSolicitacao;
    }

    public void setDataSolicitacao(Date dataSolicitacao) {
        this.dataSolicitacao = dataSolicitacao;
    }

    public Tecnico getTecnico() {
        return tecnico;
    }

    public void setTecnico(Tecnico tecnico) {
        this.tecnico = tecnico;
    }
}
