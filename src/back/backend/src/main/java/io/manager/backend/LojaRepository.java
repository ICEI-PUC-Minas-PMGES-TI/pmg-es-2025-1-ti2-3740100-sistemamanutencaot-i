package io.manager.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LojaRepository extends JpaRepository<Loja, Long> {
}