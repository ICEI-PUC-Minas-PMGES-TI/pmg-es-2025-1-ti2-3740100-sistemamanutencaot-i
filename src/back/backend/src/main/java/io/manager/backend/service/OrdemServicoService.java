package io.manager.backend.service;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.repository.OrdemServicoRepository;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdemServicoService {
    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    public List<OrdemServico> listarTodas() {
        return ordemServicoRepository.findAll();
    }

    public Optional<OrdemServico> buscarPorId(int id) {
        return ordemServicoRepository.findById(id);
    }

    public OrdemServico salvar(OrdemServico ordemServico) {
        return ordemServicoRepository.save(ordemServico);
    }

    public OrdemServico atualizar(int id, OrdemServico ordemAtualizada) {
        Optional<OrdemServico> existente = ordemServicoRepository.findById(id);
        if (existente.isPresent()) {
            OrdemServico os = existente.get();
            os.setComputadorId(ordemAtualizada.getComputadorId());
            os.setTecnicoId(ordemAtualizada.getTecnicoId());
            os.setStatus(ordemAtualizada.getStatus());
            os.setData_entrada(ordemAtualizada.getData_entrada());
            os.setPrazoEstimado(ordemAtualizada.getPrazoEstimado());
            os.setValorTotal(ordemAtualizada.getValorTotal());
            return ordemServicoRepository.save(os);
        } else {
            return null; // ou lançar exceção
        }
    }

    public void deletar(int id) {
        ordemServicoRepository.deleteById(id);
    }
}

