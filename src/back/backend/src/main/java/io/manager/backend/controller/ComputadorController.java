package io.manager.backend.controller;

import io.manager.backend.dto.ComputadorRequest;
import io.manager.backend.model.Cliente;
import io.manager.backend.model.Computador;
import io.manager.backend.repository.ClienteRepository;
import io.manager.backend.service.ComputadorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/computadores")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class ComputadorController {

    @Autowired
    private ComputadorService computadorService;

    @Autowired
    private ClienteRepository clienteRepository;

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
    public ResponseEntity<Computador> salvar(@RequestBody ComputadorRequest dto) {
        Optional<Cliente> clienteOpt = clienteRepository.findById(dto.getClienteId());
        if (!clienteOpt.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        Cliente cliente = clienteOpt.get();
        Computador computador = dto.toComputador(cliente);
        Computador salvo = computadorService.salvar(computador);
        return ResponseEntity.ok(salvo);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Computador> atualizar(@PathVariable int id, @RequestBody Computador computadorAtualizado) {
        try {
            Computador atualizado = computadorService.atualizar(id, computadorAtualizado);
            return ResponseEntity.ok(atualizado);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable int id) {
        try {
            computadorService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
