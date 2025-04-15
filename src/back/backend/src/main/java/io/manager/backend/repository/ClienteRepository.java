package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Cliente;

@Repository

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
List<Cliente> factoryByNome(String nome);
}   