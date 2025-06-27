package io.manager.backend.dto;

public class StatusRequisicaoDTO {
    private String status;

    public StatusRequisicaoDTO() {}

    public StatusRequisicaoDTO(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
