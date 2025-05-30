package io.manager.backend.service;

import io.manager.backend.model.PecaUtilizada;
import io.manager.backend.model.PecaUtilizadaId;
import io.manager.backend.repository.PecaUtilizadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PecaUtilizadaService {

    @Autowired
    private PecaUtilizadaRepository repository;

    public List<PecaUtilizada> listarTodas() {
        return repository.findAll();
    }

    public Optional<PecaUtilizada> buscarPorId(PecaUtilizadaId id) {
        return repository.findById(id);
    }

    public PecaUtilizada salvar(PecaUtilizada pecaUtilizada) {
        return repository.save(pecaUtilizada);
    }

    public void deletar(PecaUtilizadaId id) {
        repository.deleteById(id);
    }
}
