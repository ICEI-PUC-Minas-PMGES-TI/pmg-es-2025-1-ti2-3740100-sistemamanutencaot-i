package io.manager.backend.repository;

import io.manager.backend.dto.ProdutoDestaqueDTO;
import io.manager.backend.model.PecaUtilizada;
import io.manager.backend.model.PecaUtilizadaId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PecaUtilizadaRepository extends JpaRepository<PecaUtilizada, PecaUtilizadaId> {
    @Query("""
       SELECT new io.manager.backend.dto.ProdutoDestaqueDTO(
            p.peca.nome,
            SUM(p.precoUnitario * p.quantidade),
            CAST(SUM(p.quantidade) AS long),
            '',
            0
        )
        FROM PecaUtilizada p
        WHERE MONTH(p.ordemServico.dataEntrada) = :mes
          AND YEAR(p.ordemServico.dataEntrada) = :ano
        GROUP BY p.peca.nome
        ORDER BY SUM(p.quantidade) DESC
    """)
    List<ProdutoDestaqueDTO> buscarProdutosDestaque(@Param("mes") int mes, @Param("ano") int ano);
}
