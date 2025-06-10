package io.manager.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import io.manager.backend.model.OrdemServico;
import java.util.List;

@Repository
public interface OrdemServicoRepository extends JpaRepository<OrdemServico, Integer>{
    @Query("SELECT o FROM OrdemServico o WHERE o.tecnico IS NULL")
    List<OrdemServico> findAllSemTecnico();

    @Query("SELECT o FROM OrdemServico o WHERE o.tecnico.id = :tecnicoId")
    List<OrdemServico> findByTecnicoId(Integer tecnicoId);
}
