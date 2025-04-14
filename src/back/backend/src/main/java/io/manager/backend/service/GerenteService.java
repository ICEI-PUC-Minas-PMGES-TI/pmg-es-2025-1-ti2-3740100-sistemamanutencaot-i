package io.manager.backend.service;

import io.manager.backend.model.Gerente;
import io.manager.backend.repository.GerenteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GerenteService {

    private final GerenteRepository gerenteRepository;

    public GerenteService(GerenteRepository gerenteRepository) {
        this.gerenteRepository = gerenteRepository;
    }

    public List<Gerente> listar() {
        return gerenteRepository.findAll();
    }

    public Optional<Gerente> buscarPorId(Integer id) {
        return gerenteRepository.findById(id);
    }

    public Gerente criar(Gerente gerente) {
        return gerenteRepository.save(gerente);
    }

    public Gerente atualizar(Integer id, Gerente gerenteAtualizado) {
        return gerenteRepository.findById(id).map(gerente -> {
            gerente.setNome(gerenteAtualizado.getNome());
            gerente.setEmail(gerenteAtualizado.getEmail());
            gerente.setSenha(gerenteAtualizado.getSenha());
            return gerenteRepository.save(gerente);
        }).orElseThrow(() -> new RuntimeException("Gerente não encontrado"));
    }

    public void deletar(Integer id) {
        gerenteRepository.deleteById(id);
    }
}