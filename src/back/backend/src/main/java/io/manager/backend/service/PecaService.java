package io.manager.backend.service;

import io.manager.backend.dto.EstoqueAtualDTO;
import io.manager.backend.model.Peca;
import io.manager.backend.repository.PecaRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.text.Normalizer;
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

    public ResponseEntity<Peca> adicionarOuAtualizar(@RequestBody Peca novaPeca) {
        // Gera o código se não estiver presente
        if (novaPeca.getCodigo() == null || novaPeca.getCodigo().isEmpty()) {
            novaPeca.setCodigo(gerarCodigoPeca(novaPeca));
        }

        Optional<Peca> pecaExistente = pecaRepository.findByCodigo(novaPeca.getCodigo());

        if (pecaExistente.isPresent()) {
            Peca peca = pecaExistente.get();
            peca.setEstoque(peca.getEstoque() + novaPeca.getQuantidade());
            Peca atualizada = pecaRepository.save(peca);
            return ResponseEntity.ok(atualizada);
        } else {
            novaPeca.setEstoque(novaPeca.getQuantidade());
            Peca criada = pecaRepository.save(novaPeca);
            return ResponseEntity.ok(criada);
        }
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

    //Geram o código único para cada peça com base no nome, marca e modelo
    private String gerarCodigoPeca(Peca peca) {
        String nome = normalizar(peca.getNome());
        String marca = normalizar(peca.getMarca());
        String modelo = normalizar(peca.getModelo());
        
        return String.format("%s-%s-%s", nome, marca, modelo).toUpperCase();
    }

    private String normalizar(String valor) {
        String semAcento = Normalizer.normalize(valor, Normalizer.Form.NFD)
                                    .replaceAll("\\p{InCombiningDiacriticalMarks}+", "");
        return semAcento.trim()
                        .toLowerCase()
                        .replaceAll("[^a-z0-9]", "");
    }

    public List<EstoqueAtualDTO> getEstoqueParaDashboard() {
        return pecaRepository.listarEstoqueParaDashboard();
    }
}