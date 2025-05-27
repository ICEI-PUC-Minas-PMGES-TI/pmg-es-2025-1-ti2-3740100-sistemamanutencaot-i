package io.manager.backend.service;

import io.manager.backend.model.Computador;
import io.manager.backend.repository.ComputadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComputadorService {

    @Autowired
    private ComputadorRepository computadorRepository;

    public List<Computador> listarTodos() {
        return computadorRepository.findAll();
    }

    public Optional<Computador> buscarPorId(int id) {
        return computadorRepository.findById(id);
    }

    public Computador salvar(Computador computador) {
        return computadorRepository.save(computador);
    }

    public Computador atualizar(int id, Computador computadorAtualizado) {
        Optional<Computador> existente = computadorRepository.findById(id);
        if (existente.isPresent()) {
            Computador c = existente.get();
            c.setClienteId(computadorAtualizado.getClienteId());
            c.setTipo(computadorAtualizado.getTipo());
            c.setMarca(computadorAtualizado.getMarca());
            c.setModelo(computadorAtualizado.getModelo());
            c.setDescricaoProblema(computadorAtualizado.getDescricaoProblema());
            return computadorRepository.save(c);
        } else {
            return null;
        }
    }

    public void deletar(int id) {
        computadorRepository.deleteById(id);
    }
}
