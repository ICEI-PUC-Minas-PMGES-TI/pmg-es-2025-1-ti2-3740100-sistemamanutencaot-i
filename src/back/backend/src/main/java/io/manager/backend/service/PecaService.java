package io.manager.backend.service;

import io.manager.backend.model.Peca;
import io.manager.backend.repository.PecaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PecaService {
    private final PecaRepository PecaRepository;

    public PecaService(PecaRepository PecaRepository) {
        this.PecaRepository = PecaRepository;
    }

    public List<Peca> getAllPecas() {
        return PecaRepository.findAll();
    }

    public Optional<Peca> getPecaById(Integer id) {
        return PecaRepository.findById(id);
    }

    public Peca savePeca(Peca peca) {
        return PecaRepository.save(peca);
    }

    public Peca updatePeca(Integer id, Peca peca) {
        if (!PecaRepository.existsById(id)) {
            return null; 
        }
        peca.setId(id);
        return PecaRepository.save(peca);
    }

    public void deletePeca(Integer id) {
        PecaRepository.deleteById(id);
    }
}