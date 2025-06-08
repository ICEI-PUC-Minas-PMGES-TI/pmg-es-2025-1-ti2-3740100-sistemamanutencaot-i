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

    @GetMapping
    public List<Peca> getAllPecas() {
        return pecaService.getAllPecas();
    }

    @GetMapping("/{id}")
    public Optional<Peca> getPecaById(@PathVariable Integer id) {
        return pecaService.getPecaById(id);
    }

    @PostMapping
    public ResponseEntity<Peca> addPeca(@RequestBody Peca peca) {
        return pecaService.adicionarOuAtualizar(peca);
    }

    @PutMapping("/update/{id}")
    public Peca updatePeca(@PathVariable Integer id, @RequestBody Peca peca) {
        return pecaService.updatePeca(id, peca);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePeca(@PathVariable Integer id) {
        pecaService.deletePeca(id);
    }

}