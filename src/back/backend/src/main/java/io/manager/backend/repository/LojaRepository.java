package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import io.manager.backend.model.Loja;
import java.util.Optional;

@Repository
public interface LojaRepository extends JpaRepository<Loja, Integer> {
    Optional<Loja> findByEmailAndSenha(String email, String senha);
}