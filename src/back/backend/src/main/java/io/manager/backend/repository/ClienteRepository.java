package io.manager.backend.repository;

import io.manager.backend.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

    @Query("SELECT c FROM Cliente c WHERE LOWER(c.pessoa.nome) LIKE LOWER(CONCAT('%', :nome, '%'))")
    List<Cliente> findByPessoaNomeContainingIgnoreCase(@Param("nome") String nome);
}
