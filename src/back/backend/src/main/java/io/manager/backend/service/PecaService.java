package io.manager.backend.service;

import io.manager.backend.model.Peca;
import io.manager.backend.repository.PecaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PecaService {
    private final PecaRepository pecaRepository;

    public PecaService(PecaRepository pecaRepository) {
        this.pecaRepository = pecaRepository;
    }

    public List<Peca> getAllPecas() {
        return pecaRepository.findAll();
    }

    public Optional<Peca> getPecaById(Integer id) {
        return pecaRepository.findById(id);
    }

    public Peca savePeca(Peca peca) {
        return pecaRepository.save(peca);
    }

    public Peca updatePeca(Integer id, Peca peca) {
        if (!pecaRepository.existsById(id)) {
            return null; 
        }
        peca.setId(id);
        return pecaRepository.save(peca);
    }

    public void deletePeca(Integer id) {
        pecaRepository.deleteById(id);
    }
}