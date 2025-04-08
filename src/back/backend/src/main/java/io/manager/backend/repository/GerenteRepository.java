package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Gerente;

@Repository
public interface GerenteRepository extends JpaRepository<Gerente, Integer> {

}