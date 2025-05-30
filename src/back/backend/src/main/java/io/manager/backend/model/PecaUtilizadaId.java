package io.manager.backend.model;

import java.io.Serializable;
import java.util.Objects;

public class PecaUtilizadaId implements Serializable {
    private OrdemServico ordemServico;
    private Peca peca;

    public PecaUtilizadaId() {}

    public PecaUtilizadaId(OrdemServico ordemServico, Peca peca) {
        this.ordemServico = ordemServico;
        this.peca = peca;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PecaUtilizadaId)) return false;
        PecaUtilizadaId that = (PecaUtilizadaId) o;
        return Objects.equals(ordemServico, that.ordemServico) &&
               Objects.equals(peca, that.peca);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ordemServico, peca);
    }
}
