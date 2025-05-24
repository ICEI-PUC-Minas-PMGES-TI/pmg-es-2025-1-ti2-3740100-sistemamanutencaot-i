package io.manager.backend.repository;

import io.manager.backend.model.RequisicaoPeca;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface RequisicaoPecaRepository extends JpaRepository<RequisicaoPeca, Integer> {
    List<RequisicaoPeca> findByOrdemServicoId(Integer ordemServicoId);
}