package io.manager.backend.model;

import jakarta.persistence.*;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Requisicao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String status;

    @OneToMany(mappedBy = "requisicao", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference(value = "requisicao-requisicaoPeca")
    private List<RequisicaoPeca> requisicaoPecas;

    private String observacao;

    @Temporal(TemporalType.DATE)
    private Date dataSolicitacao;

    @ManyToOne
    @JoinColumn(name = "tecnico_id")
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

    public List<RequisicaoPeca> getRequisicaoPecas() {
    return requisicaoPecas;
}

    public void setRequisicaoPecas(List<RequisicaoPeca> requisicaoPecas) {
        this.requisicaoPecas = requisicaoPecas;
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
