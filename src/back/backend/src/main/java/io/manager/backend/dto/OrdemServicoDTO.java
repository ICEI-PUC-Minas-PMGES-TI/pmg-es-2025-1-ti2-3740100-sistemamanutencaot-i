package io.manager.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.manager.backend.model.OrdemServico;

import java.util.Date;

public class OrdemServicoDTO {
    private String id; // formatado como "001", "045", etc.
    private Integer computadorId;
    private Integer tecnicoId;
    private String status;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date dataEntrada;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date prazo;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
    private Date dataFinalizacao;

    private Double valorTotal;
    private String descricaoOs;
    private String solucaoOs;
    private String nomeCliente;
    private String computadorMarca;
    private String computadorModelo;
    private String tecnicoNome;

    public OrdemServicoDTO(OrdemServico os) {
        this.id = String.format("%03d", os.getId());
        this.computadorId = os.getComputador() != null ? os.getComputador().getId() : null;
        this.tecnicoId = os.getTecnico() != null ? os.getTecnico().getId() : null;
        this.status = os.getStatus();
        this.dataEntrada = os.getDataEntrada();
        this.prazo = os.getPrazo();
        this.dataFinalizacao = os.getDataFinalizacao();
        this.valorTotal = os.getValorTotal();
        this.descricaoOs = os.getDescricaoOs();
        this.solucaoOs = os.getSolucaoOs();

        // novo campo
        this.nomeCliente = os.getComputador() != null && os.getComputador().getCliente() != null
            ? os.getComputador().getCliente().getPessoa().getNome()
            : null;

        this.computadorMarca = os.getComputador() != null ? os.getComputador().getMarca() : null;
        this.computadorModelo = os.getComputador() != null ? os.getComputador().getModelo() : null;
        this.tecnicoNome = os.getTecnico() != null ? os.getTecnico().getNome() : null;
    }


    // Getters
    public String getId() { return id; }
    public Integer getComputadorId() { return computadorId; }
    public Integer getTecnicoId() { return tecnicoId; }
    public String getStatus() { return status; }
    public Date getDataEntrada() { return dataEntrada; }
    public Date getPrazo() { return prazo; }
    public Date getDataFinalizacao() { return dataFinalizacao; }
    public Double getValorTotal() { return valorTotal; }
    public String getDescricaoOs() { return descricaoOs; }
    public String getSolucaoOs() { return solucaoOs; }
    public String getNomeCliente() { return nomeCliente; }
    public String getComputadorMarca() { return computadorMarca; }
    public String getComputadorModelo() { return computadorModelo; }
    public String getTecnicoNome() { return tecnicoNome; }
    
}
