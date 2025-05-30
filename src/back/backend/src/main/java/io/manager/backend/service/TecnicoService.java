package io.manager.backend.service;

import io.manager.backend.model.Tecnico;
import io.manager.backend.repository.TecnicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TecnicoService {

    @Autowired
    private TecnicoRepository tecnicoRepository;

    public List<Tecnico> listarTodos() {
        return tecnicoRepository.findAll();
    }

    public Tecnico buscarPorId(Integer id) {
        return tecnicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado com ID: " + id));
    }

    public Tecnico buscarPorEmail(String email) {
        return tecnicoRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado com e-mail: " + email));
    }

    public Tecnico salvar(Tecnico tecnico) {
        return tecnicoRepository.save(tecnico);
    }

    public Tecnico atualizar(Integer id, Tecnico dadosAtualizados) {
        Tecnico existente = buscarPorId(id);
        existente.setNome(dadosAtualizados.getNome());
        existente.setCpf(dadosAtualizados.getCpf());
        existente.setCargo(dadosAtualizados.getCargo());
        return tecnicoRepository.save(existente);
    }

    public void deletar(Integer id) {
        Tecnico existente = buscarPorId(id);
        tecnicoRepository.delete(existente);
    }
}
