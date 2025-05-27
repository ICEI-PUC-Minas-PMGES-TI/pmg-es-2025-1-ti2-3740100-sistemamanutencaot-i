package io.manager.backend.controller;

import io.manager.backend.model.Computador;
import io.manager.backend.service.ComputadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/computadores")
public class ComputadorController {

    @Autowired
    private ComputadorService computadorService;

    @GetMapping
    public List<Computador> listarTodos() {
        return computadorService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Computador> buscarPorId(@PathVariable int id) {
        Optional<Computador> computador = computadorService.buscarPorId(id);
        return computador.map(ResponseEntity::ok)
                         .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Computador> salvar(@RequestBody Computador computador) {
        Computador novo = computadorService.salvar(computador);
        return ResponseEntity.ok(novo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Computador> atualizar(@PathVariable int id, @RequestBody Computador computadorAtualizado) {
        Computador atualizado = computadorService.atualizar(id, computadorAtualizado);
        if (atualizado != null) {
            return ResponseEntity.ok(atualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        computadorService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
