package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.peca;

@Repository

public interface PecaRepository extends JpaRepository<peca, Integer> {

}
