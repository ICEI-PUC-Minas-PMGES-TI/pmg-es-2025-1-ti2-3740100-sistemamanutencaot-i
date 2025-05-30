package io.manager.backend.model;

import java.io.Serializable;
import java.util.Objects;

public class PecaUtilizadaId implements Serializable {
    private Integer ordemId;
    private Integer pecaId;

    public PecaUtilizadaId() {}

    public PecaUtilizadaId(Integer ordemId, Integer pecaId) {
        this.ordemId = ordemId;
        this.pecaId = pecaId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof PecaUtilizadaId)) return false;
        PecaUtilizadaId that = (PecaUtilizadaId) o;
        return Objects.equals(ordemId, that.ordemId) && Objects.equals(pecaId, that.pecaId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(ordemId, pecaId);
    }
}
