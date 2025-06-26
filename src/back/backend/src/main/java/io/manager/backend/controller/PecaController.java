package io.manager.backend.controller;

import io.manager.backend.model.Peca;
import io.manager.backend.service.PecaService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pecas")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})  
public class PecaController {
    private final PecaService pecaService;

    public PecaController(PecaService PecaService) {
        this.pecaService = PecaService;
    }

    @GetMapping()
    public List<Peca> getAllPecas() {
        return pecaService.getAllPecas();
    }

    @GetMapping("/{codigo}")
    public List<Peca> buscarPorCodigo(@PathVariable String codigo) {
        return pecaService.buscarCodigo(codigo);
    }

    @GetMapping("/{id}")
    public Optional<Peca> getPecaById(@PathVariable Integer id) {
        return pecaService.getPecaById(id);
    }

    @PostMapping
    public ResponseEntity<Peca> addPeca(@RequestBody Peca peca) {
        return pecaService.adicionar(peca);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Peca> atualizar(@PathVariable Integer id, @RequestBody Peca peca) {
        return pecaService.atualizar(id, peca);
    }

    @PatchMapping("/adicionarAoEstoque/{id}")
    public ResponseEntity<Peca> adicionarEstoque(@PathVariable Integer id, @RequestParam Integer quantidade) {
        return pecaService.adicionarEstoque(id, quantidade);
    }


    @DeleteMapping("/delete/{id}")
    public void deletePeca(@PathVariable Integer id) {
        pecaService.deletePeca(id);
    }

}