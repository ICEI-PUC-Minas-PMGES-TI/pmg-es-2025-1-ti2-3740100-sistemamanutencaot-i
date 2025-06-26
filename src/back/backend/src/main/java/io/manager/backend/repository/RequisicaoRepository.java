package io.manager.backend.repository;

import io.manager.backend.model.Requisicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequisicaoRepository extends JpaRepository<Requisicao, Integer> {
    // Adicionar consultas se precisar
}
