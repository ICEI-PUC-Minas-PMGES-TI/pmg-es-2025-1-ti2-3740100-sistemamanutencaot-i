package io.manager.backend.controller;

import io.manager.backend.model.Loja;
import io.manager.backend.service.LojaService;
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

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Integer id) {
        lojaService.deletar(id);
    }
}
