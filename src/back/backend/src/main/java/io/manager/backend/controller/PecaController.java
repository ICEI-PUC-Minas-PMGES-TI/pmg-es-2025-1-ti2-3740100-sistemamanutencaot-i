package io.manager.backend.controller;

import io.manager.backend.model.Peca;
import io.manager.backend.service.PecaService;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/peca")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})

public class PecaController {
    private final PecaService PecaService;

    public PecaController(PecaService PecaService) {
        this.PecaService = PecaService;
    }

    @GetMapping("/all")
    public List<Peca> getAllPecas() {
        return PecaService.getAllPecas();
    }

    @GetMapping("/{id}")
    public Optional<Peca> getPecaById(@PathVariable Integer id) {
        return PecaService.getPecaById(id);
    }

    @PostMapping("/add")
    public Peca addPeca(@RequestBody Peca peca) {
        return PecaService.savePeca(peca);
    }

    @PutMapping("/update/{id}")
    public Peca updatePeca(@PathVariable Integer id, @RequestBody Peca peca) {
        return PecaService.updatePeca(id, peca);
    }

    @DeleteMapping("/delete/{id}")
    public void deletePeca(@PathVariable Integer id) {
        PecaService.deletePeca(id);
    }

}