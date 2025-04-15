package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Tecnico;

@Repository
public interface TecnicoRepository extends JpaRepository< Tecnico, Long> {
    Optional<Tecnico> findByEmail(String email);
}