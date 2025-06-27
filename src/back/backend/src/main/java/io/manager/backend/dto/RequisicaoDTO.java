package io.manager.backend.dto;

import io.manager.backend.model.Requisicao;
 import com.fasterxml.jackson.annotation.JsonFormat;
 
 import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class RequisicaoDTO {
    private String id; // já formatado como "001", "045", etc.
    private String status;
    private String observacao;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy") // Formatando data
    private Date dataSolicitacao;

    private String tecnicoNome;

    private List<RequisicaoPecaDTO> requisicaoPecas; // nova lista de peças no DTO

    public RequisicaoDTO(Requisicao requisicao) {
        this.id = String.format("%03d", requisicao.getId());
        this.status = requisicao.getStatus();
        this.observacao = requisicao.getObservacao();
        this.dataSolicitacao = requisicao.getDataSolicitacao();
        this.tecnicoNome = requisicao.getTecnico() != null ? requisicao.getTecnico().getNome() : null;
        this.requisicaoPecas = requisicao.getRequisicaoPecas() == null ? new ArrayList<>() : requisicao.getRequisicaoPecas().stream().map(RequisicaoPecaDTO::new)
        .collect(Collectors.toList());
    }

    // Getters
    public String getId() { return id; }
    public String getStatus() { return status; }
    public String getObservacao() { return observacao; }
    public Date getDataSolicitacao() { return dataSolicitacao; }
    public String getTecnicoNome() { return tecnicoNome; }
    public List<RequisicaoPecaDTO> getRequisicaoPecas() { return requisicaoPecas; }
}
