package io.manager.backend.repository;

import io.manager.backend.model.RequisicaoPeca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RequisicaoPecaRepository extends JpaRepository<RequisicaoPeca, Integer> {
    List<RequisicaoPeca> findByOrdemServicoId(Integer ordemServicoId);
}