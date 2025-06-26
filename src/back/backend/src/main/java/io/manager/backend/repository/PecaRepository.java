package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import io.manager.backend.model.Peca;
import io.manager.backend.dto.EstoqueAtualDTO;
import java.util.Optional;
import java.util.List;

@Repository
public interface PecaRepository extends JpaRepository<Peca, Integer> {

    @Query("""
        SELECT new io.manager.backend.dto.EstoqueAtualDTO(
            p.tipo,
            p.quantidade,
            CASE
                WHEN p.quantidade >= 10 THEN 'aumento'
                WHEN p.quantidade <= 3 THEN 'reducao'
                ELSE 'neutro'
            END
        )
        FROM Peca p
    """)
    List<EstoqueAtualDTO> listarEstoqueParaDashboard();

}
