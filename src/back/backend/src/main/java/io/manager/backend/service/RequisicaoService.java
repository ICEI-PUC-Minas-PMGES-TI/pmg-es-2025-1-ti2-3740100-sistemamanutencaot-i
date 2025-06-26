package io.manager.backend.service;

import io.manager.backend.model.Requisicao;
import io.manager.backend.repository.RequisicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RequisicaoService {

    @Autowired
    private RequisicaoRepository requisicaoRepository;

    public List<Requisicao> listarTodas() {
        return requisicaoRepository.findAll();
    }

    public Optional<Requisicao> buscarPorId(Integer id) {
        return requisicaoRepository.findById(id);
    }

    public Requisicao salvar(Requisicao requisicao) {
        return requisicaoRepository.save(requisicao);
    }

    public void deletar(Integer id) {
        requisicaoRepository.deleteById(id);
    }

    public boolean existePorId(Integer id) {
        return requisicaoRepository.existsById(id);
    }
}
