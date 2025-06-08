package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Peca;
import java.util.Optional;

@Repository
public interface PecaRepository extends JpaRepository<Peca, Integer> {
    Optional<Peca> findByCodigo(String codigo);

}
