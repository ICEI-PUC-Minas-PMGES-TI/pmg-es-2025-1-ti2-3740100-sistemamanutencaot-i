package io.manager.backend.repository;

import io.manager.backend.model.PessoaJuridica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PessoaJuridicaRepository extends JpaRepository<PessoaJuridica, Integer> {
    List<PessoaJuridica> findByNomeContainingIgnoreCase(String nomeFantasia);
}

