package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Computador;

@Repository
public interface ComputadorRepository extends JpaRepository<Computador, Integer>{
    
}
