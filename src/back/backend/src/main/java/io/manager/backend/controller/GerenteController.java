package io.manager.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.manager.backend.repository.GerenteRepository;
import io.manager.backend.model.Gerente;

import java.util.List;

@RestController
@RequestMapping("/gerentes")
@CrossOrigin(origins = "http://localhost:5173")
public class GerenteController {

    @Autowired
    private GerenteRepository gerenteRepository;

    @GetMapping
    public List<Gerente> listarTodos() {
        return gerenteRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Gerente> buscarPorId(@PathVariable Integer id) {
        return gerenteRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Gerente criarGerente(@RequestBody Gerente gerente) {
        return gerenteRepository.save(gerente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Gerente> atualizarGerente(@PathVariable Integer id, @RequestBody Gerente gerenteAtualizado) {
        return gerenteRepository.findById(id)
                .map(gerente -> {
                    gerente.setNome(gerenteAtualizado.getNome());
                    gerente.setEmail(gerenteAtualizado.getEmail());
                    gerente.setSenha(gerenteAtualizado.getSenha());
                    gerenteRepository.save(gerente);
                    return ResponseEntity.ok(gerente);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarGerente(@PathVariable Integer id) {
        if (gerenteRepository.existsById(id)) {
            gerenteRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}