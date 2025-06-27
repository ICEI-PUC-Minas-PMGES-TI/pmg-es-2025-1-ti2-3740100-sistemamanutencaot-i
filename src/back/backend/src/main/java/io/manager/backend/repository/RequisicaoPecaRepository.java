package io.manager.backend.repository;

import io.manager.backend.model.RequisicaoPeca;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequisicaoPecaRepository extends JpaRepository<RequisicaoPeca, Integer> {
    // métodos customizados se precisar
}
