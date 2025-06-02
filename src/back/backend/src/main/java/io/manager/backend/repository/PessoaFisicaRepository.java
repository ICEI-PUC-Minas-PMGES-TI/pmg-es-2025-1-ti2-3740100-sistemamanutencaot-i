package io.manager.backend.repository;

import io.manager.backend.model.PessoaFisica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PessoaFisicaRepository extends JpaRepository<PessoaFisica, Integer> {
    List<PessoaFisica> findByNomeContainingIgnoreCase(String nome);
}