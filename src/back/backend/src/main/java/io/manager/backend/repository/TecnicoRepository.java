package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Tecnico;
import java.util.*;

@Repository
public interface TecnicoRepository extends JpaRepository< Tecnico, Integer> {
    Optional<Tecnico> findByEmail(String email); 
}