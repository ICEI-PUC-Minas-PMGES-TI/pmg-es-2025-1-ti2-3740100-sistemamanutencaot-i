package io.manager.backend.service;

import io.manager.backend.dto.EstoqueAtualDTO;
import io.manager.backend.model.Peca;
import io.manager.backend.repository.PecaRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

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

    public ResponseEntity<Peca> atualizar(Integer id, @RequestBody Peca pecaAtualizada) {
        Optional<Peca> pecaExistente = pecaRepository.findById(id);
        
        if (pecaExistente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Peca peca = pecaExistente.get();
        // Atualiza os campos desejados
        peca.setTipo(pecaAtualizada.getTipo());
        peca.setPreco(pecaAtualizada.getPreco());
        peca.setMarca(pecaAtualizada.getMarca());
        peca.setModelo(pecaAtualizada.getModelo());
        peca.setSegmento(pecaAtualizada.getSegmento());
        peca.setQuantidade(pecaAtualizada.getQuantidade());

        Peca atualizada = pecaRepository.save(peca);
        return ResponseEntity.ok(atualizada);
    }

    public ResponseEntity<Peca> adicionarEstoque(Integer id, Integer quantidadeAdicionar) {
        Optional<Peca> pecaExistente = pecaRepository.findById(id);
        if (pecaExistente.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Peca peca = pecaExistente.get();
        peca.setQuantidade(peca.getQuantidade() + quantidadeAdicionar);
        Peca atualizada = pecaRepository.save(peca);
        return ResponseEntity.ok(atualizada);
    }


    public ResponseEntity<Peca> adicionar(@RequestBody Peca novaPeca) {
        Peca criada = pecaRepository.save(novaPeca);
        return ResponseEntity.ok(criada);
    }

    public void deletePeca(Integer id) {
        pecaRepository.deleteById(id);
    }

    public List<EstoqueAtualDTO> getEstoqueParaDashboard() {
        return pecaRepository.listarEstoqueParaDashboard();
    }
}