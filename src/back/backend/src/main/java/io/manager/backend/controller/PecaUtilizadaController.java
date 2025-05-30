package io.manager.backend.controller;

import io.manager.backend.model.PecaUtilizada;
import io.manager.backend.model.PecaUtilizadaId;
import io.manager.backend.service.PecaUtilizadaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pecas-utilizadas")
public class PecaUtilizadaController {

    @Autowired
    private PecaUtilizadaService service;

    @GetMapping
    public List<PecaUtilizada> listar() {
        return service.listarTodas();
    }

    @GetMapping("/{ordemId}/{pecaId}")
    public Optional<PecaUtilizada> buscarPorId(@PathVariable int ordemId, @PathVariable int pecaId) {
        PecaUtilizadaId id = new PecaUtilizadaId(ordemId, pecaId);
        return service.buscarPorId(id);
    }

    @PostMapping
    public PecaUtilizada criar(@RequestBody PecaUtilizada pecaUtilizada) {
        return service.salvar(pecaUtilizada);
    }

    @DeleteMapping("/{ordemId}/{pecaId}")
    public void deletar(@PathVariable int ordemId, @PathVariable int pecaId) {
        PecaUtilizadaId id = new PecaUtilizadaId(ordemId, pecaId);
        service.deletar(id);
    }
}
