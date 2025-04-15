package io.manager.backend.controller;

import io.manager.backend.model.Peca;
import io.manager.backend.service.PecaServise;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/peca")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})

public class PecaController {
    private final PecaServise pecaServise;

    public PecaController(PecaServise pecaServise) {
        this.pecaServise = pecaServise;
    }

    @GetMapping("/all")
    public List<Peca> getAllPecas() {
        return pecaServise.getAllPecas();
    }

    @GetMapping("/{id}")
    public Optional<Peca> getPecaById(@PathVariable Long id) {
        return pecaServise.getPecaById(id);
    }

    @PostMapping("/add")
    public Peca addPeca(@RequestBody Peca peca) {
        return pecaServise.addPeca(peca);
    }

    @PutMapping("/update/{id}")
    public Peca updatePeca(@PathVariable Long id, @RequestBody Peca peca) {
        return pecaServise.updatePeca(id, peca);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePeca(@PathVariable Long id) {
        pecaServise.deletePeca(id);
    }

}