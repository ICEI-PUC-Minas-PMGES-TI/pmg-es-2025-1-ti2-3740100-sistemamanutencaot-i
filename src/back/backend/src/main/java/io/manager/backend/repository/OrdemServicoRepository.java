package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.dto.VendaDiariaDTO;
import java.util.List;

@Repository
public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Integer>{
    @Query("SELECT o FROM OrdemServico o WHERE o.tecnico IS NULL")
    List<OrdemServico> findAllSemTecnico();

    @Query("SELECT o FROM OrdemServico o WHERE o.tecnico.id = :tecnicoId")
    List<OrdemServico> findByTecnicoId(Integer tecnicoId);

    @Query("SELECT COALESCE(SUM(o.valorTotal), 0) FROM OrdemServico o " +
           "WHERE FUNCTION('MONTH', o.dataFinalizacao) = :mes " +
           "AND FUNCTION('YEAR', o.dataFinalizacao) = :ano")
    double totalVendas(@Param("mes") int mes, @Param("ano") int ano);

    @Query("SELECT COUNT(o) FROM OrdemServico o " +
           "WHERE o.status = :status " +
           "AND FUNCTION('MONTH', o.dataFinalizacao) = :mes " +
           "AND FUNCTION('YEAR', o.dataFinalizacao) = :ano")
    long contadorTotalReparos(@Param("status") String status,
                              @Param("mes") int mes,
                              @Param("ano") int ano);

    @Query("SELECT COALESCE(AVG(o.valorTotal), 0) FROM OrdemServico o " +
           "WHERE FUNCTION('MONTH', o.dataFinalizacao) = :mes " +
           "AND FUNCTION('YEAR', o.dataFinalizacao) = :ano")
    double ticketMedio(@Param("mes") int mes, @Param("ano") int ano);

   @Query("""
       SELECT COALESCE(
              (COUNT(o) * 100.0) / 
              (SELECT COUNT(o2) FROM OrdemServico o2 
              WHERE FUNCTION('MONTH', o2.dataFinalizacao) = :mes 
              AND FUNCTION('YEAR', o2.dataFinalizacao) = :ano 
              AND o2.status = 'Concluído'), 
       0)
       FROM OrdemServico o
       WHERE o.dataFinalizacao > o.prazo
       AND FUNCTION('MONTH', o.dataFinalizacao) = :mes
       AND FUNCTION('YEAR', o.dataFinalizacao) = :ano
       AND o.status = 'Concluído'
       """)
       Double taxaAtraso(@Param("mes") int mes, @Param("ano") int ano);


    @Query("SELECT new io.manager.backend.dto.VendaDiariaDTO(DAY(o.dataFinalizacao), SUM(o.valorTotal)) " +
           "FROM OrdemServico o " +
           "WHERE FUNCTION('MONTH', o.dataFinalizacao) = :mes " +
           "AND FUNCTION('YEAR', o.dataFinalizacao) = :ano " +
           "GROUP BY DAY(o.dataFinalizacao) " +
           "ORDER BY DAY(o.dataFinalizacao)")
    List<VendaDiariaDTO> vendasPorDia(@Param("mes") int mes, @Param("ano") int ano);

    @Query("""
       SELECT COUNT(o) FROM OrdemServico o
       WHERE FUNCTION('MONTH', o.dataFinalizacao) = :mes
       AND FUNCTION('YEAR', o.dataFinalizacao) = :ano
       """)
       int contarFinalizadasPorMesEAno(@Param("mes") int mes, @Param("ano") int ano);

       @Query("""
       SELECT COUNT(o) FROM OrdemServico o
       WHERE o.dataFinalizacao > o.prazo
       AND FUNCTION('MONTH', o.dataFinalizacao) = :mes
       AND FUNCTION('YEAR', o.dataFinalizacao) = :ano
       """)
       int contarAtrasadasPorMesEAno(@Param("mes") int mes, @Param("ano") int ano);

}
