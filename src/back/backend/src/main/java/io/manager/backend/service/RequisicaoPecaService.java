/*package io.manager.backend.service;

import io.manager.backend.model.*;
import io.manager.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
import java.util.Optional;

@Service
public class RequisicaoPecaService {
    @Autowired
    private RequisicaoPecaRepository requisicaoRepo;
    @Autowired
    private OrdemServicoRepository ordemRepo;
    @Autowired
    private PecaRepository pecaRepo;

    @PreAuthorize("hasRole('TECNICO')")
    public RequisicaoPeca criarRequisicao(Integer ordemServicoId, Integer pecaId, Integer quantidade) {
        if (quantidade == null || quantidade <= 0)
            throw new IllegalArgumentException("Quantidade deve ser positiva.");

        OrdemServico ordem = ordemRepo.findById(ordemServicoId)
            .orElseThrow(() -> new IllegalArgumentException("Ordem de Serviço não encontrada."));
        Peca peca = pecaRepo.findById(pecaId)
            .orElseThrow(() -> new IllegalArgumentException("Peça não encontrada."));

        // Aqui você pode integrar com o sistema de estoque, se houver

        RequisicaoPeca req = new RequisicaoPeca();
        req.setOrdemServico(ordem);
        req.setPeca(peca);
        req.setQuantidade(quantidade);
        return requisicaoRepo.save(req);
    }

    public List<RequisicaoPeca> listarPorOrdemServico(Integer ordemServicoId) {
        return requisicaoRepo.findByOrdemServicoId(ordemServicoId);
    }

    public void remover(Integer id) {
        requisicaoRepo.deleteById(id);
    }

    public RequisicaoPeca atualizar(Integer id, Integer quantidade) {
        RequisicaoPeca req = requisicaoRepo.findById(id)
            .orElseThrow(() -> new IllegalArgumentException("Requisição não encontrada."));
        if (quantidade == null || quantidade <= 0)
            throw new IllegalArgumentException("Quantidade deve ser positiva.");
        req.setQuantidade(quantidade);
        return requisicaoRepo.save(req);
    }
}
*/