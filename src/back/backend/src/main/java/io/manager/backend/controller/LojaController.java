package io.manager.backend.controller;

import io.manager.backend.dto.LoginRequest;
import io.manager.backend.model.Loja;
import io.manager.backend.service.LojaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/lojas")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class LojaController {

    private final LojaService lojaService;

    public LojaController(LojaService lojaService) {
        this.lojaService = lojaService;
    }

    @GetMapping
    public List<Loja> listar() {
        return lojaService.listar();
    }

    @GetMapping("/{id}")
    public Optional<Loja> buscarPorId(@PathVariable Integer id) {
        return lojaService.buscarPorId(id);
    }

    @PostMapping
    public Loja criar(@RequestBody Loja loja) {
        return lojaService.criar(loja);
    }

    @PutMapping("/{id}")
    public Loja atualizar(@PathVariable Integer id, @RequestBody Loja lojaAtualizada) {
        return lojaService.atualizar(id, lojaAtualizada);
    }

    @PatchMapping("/{id}")
    public Loja atualizarParcialmente(@PathVariable Integer id, @RequestBody Loja lojaParcial) {
        return lojaService.atualizarParcialmente(id, lojaParcial);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        Optional<Loja> lojaOptional = lojaService.buscarPorId(id);

        if (lojaOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        try {
            lojaService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/login-loja")
    public ResponseEntity<Loja> loginLoja(@RequestBody LoginRequest loginRequest) {
        Loja loja = lojaService.autenticar(loginRequest.getEmail(), loginRequest.getSenha());
        if (loja != null) {
            return ResponseEntity.ok(loja);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}
