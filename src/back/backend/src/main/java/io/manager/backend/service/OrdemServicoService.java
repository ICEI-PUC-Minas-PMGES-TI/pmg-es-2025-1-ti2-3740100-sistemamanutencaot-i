package io.manager.backend.service;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.model.Computador;
import io.manager.backend.model.Tecnico;
import io.manager.backend.repository.OrdemServicoRepository;
import io.manager.backend.repository.ComputadorRepository;
import io.manager.backend.repository.TecnicoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrdemServicoService {

    private final OrdemServicoRepository ordemServicoRepository;
    private final ComputadorRepository computadorRepository;
    private final TecnicoRepository tecnicoRepository;

    public OrdemServicoService(OrdemServicoRepository ordemServicoRepository,
                              ComputadorRepository computadorRepository,
                              TecnicoRepository tecnicoRepository) {
        this.ordemServicoRepository = ordemServicoRepository;
        this.computadorRepository = computadorRepository;
        this.tecnicoRepository = tecnicoRepository;
    }

    public List<OrdemServico> listarTodos() {
        return ordemServicoRepository.findAll();
    }

    public Optional<OrdemServico> buscarPorId(Integer id) {
        return ordemServicoRepository.findById(id);
    }

    public OrdemServico salvar(OrdemServico ordemServico) {
        if (ordemServico.getComputador() != null) {
            Integer compId = ordemServico.getComputador().getId();
            Computador comp = computadorRepository.findById(compId)
                .orElseThrow(() -> new RuntimeException("Computador não encontrado"));
            ordemServico.setComputador(comp);
        }
        if (ordemServico.getTecnico() != null) {
            Integer tecnicoId = ordemServico.getTecnico().getId();
            Tecnico tecnico = tecnicoRepository.findById(tecnicoId)
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado"));
            ordemServico.setTecnico(tecnico);
        }
        return ordemServicoRepository.save(ordemServico);
    }

    public OrdemServico atualizar(Integer id, OrdemServico ordemAtualizada) {
        return ordemServicoRepository.findById(id).map(ordem -> {
            if (ordemAtualizada.getComputador() != null) {
                Integer compId = ordemAtualizada.getComputador().getId();
                Computador comp = computadorRepository.findById(compId)
                        .orElseThrow(() -> new RuntimeException("Computador não encontrado"));
                ordem.setComputador(comp);
            }
            if (ordemAtualizada.getTecnico() != null) {
                Integer tecnicoId = ordemAtualizada.getTecnico().getId();
                Tecnico tecnico = tecnicoRepository.findById(tecnicoId)
                        .orElseThrow(() -> new RuntimeException("Técnico não encontrado"));
                ordem.setTecnico(tecnico);
            }
            ordem.setStatus(ordemAtualizada.getStatus());
            ordem.setDataEntrada(ordemAtualizada.getDataEntrada());
            ordem.setPrazo(ordemAtualizada.getPrazo());
            ordem.setValorTotal(ordemAtualizada.getValorTotal());
            ordem.setDescricaoOs(ordemAtualizada.getDescricaoOs());
            ordem.setSolucaoOs(ordemAtualizada.getSolucaoOs());

            return ordemServicoRepository.save(ordem);
        }).orElseThrow(() -> new RuntimeException("Ordem de Serviço não encontrada"));
    }

    public void deletar(Integer id) {
        ordemServicoRepository.deleteById(id);
    }
}
