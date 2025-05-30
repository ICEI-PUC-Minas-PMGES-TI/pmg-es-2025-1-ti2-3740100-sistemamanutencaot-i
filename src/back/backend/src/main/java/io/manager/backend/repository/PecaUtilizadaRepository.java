package io.manager.backend.repository;

import io.manager.backend.model.PecaUtilizada;
import io.manager.backend.model.PecaUtilizadaId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PecaUtilizadaRepository extends JpaRepository<PecaUtilizada, PecaUtilizadaId> {
}
