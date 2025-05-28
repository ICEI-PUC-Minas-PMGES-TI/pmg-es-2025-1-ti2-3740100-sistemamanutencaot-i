package io.manager.backend.service;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.repository.OrdemServicoRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrdemServicoService {
    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    // Mapa de peças por ordem de serviço
    private static final Map<Integer, List<Map<String, Object>>> pecasPorOrdem = new ConcurrentHashMap<>();

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

    // Lista peças da ordem
    public List<Map<String, Object>> listarPecas(int ordemId) {
        if (!ordemServicoRepository.existsById(ordemId)) return null;
        return pecasPorOrdem.getOrDefault(ordemId, new ArrayList<>());
    }

    // Adiciona peça à ordem
    public List<Map<String, Object>> adicionarPeca(int ordemId, Map<String, Object> peca) {
        if (!ordemServicoRepository.existsById(ordemId)) return null;
        pecasPorOrdem.putIfAbsent(ordemId, new ArrayList<>());
        pecasPorOrdem.get(ordemId).add(peca);
        return pecasPorOrdem.get(ordemId);
    }

    // Remove peça da ordem (por índice)
    public List<Map<String, Object>> removerPeca(int ordemId, int index) {
        if (!ordemServicoRepository.existsById(ordemId)) return null;
        List<Map<String, Object>> lista = pecasPorOrdem.get(ordemId);
        if (lista != null && index >= 0 && index < lista.size()) {
            lista.remove(index);
        }
        return lista;
    }

    // Simula envio de solicitação de peças
    public boolean enviarSolicitacaoPecas(int ordemId) {
        if (!ordemServicoRepository.existsById(ordemId)) return false;
        // Aqui poderia enviar email, notificação, etc.
        return true;
    }
}

