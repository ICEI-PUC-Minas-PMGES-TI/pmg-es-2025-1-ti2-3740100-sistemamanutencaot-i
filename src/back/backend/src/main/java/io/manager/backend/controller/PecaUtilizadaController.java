package io.manager.backend.controller;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.model.Peca;
import io.manager.backend.model.PecaUtilizada;
import io.manager.backend.model.PecaUtilizadaId;
import io.manager.backend.service.PecaUtilizadaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pecas-utilizadas")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class PecaUtilizadaController {

    @Autowired
    private PecaUtilizadaService service;

    @GetMapping
    public ResponseEntity<List<PecaUtilizada>> listar() {
        List<PecaUtilizada> lista = service.listarTodas();
        return ResponseEntity.ok(lista);
    }

    @GetMapping("/{ordemId}/{pecaId}")
    public ResponseEntity<PecaUtilizada> buscarPorId(@PathVariable int ordemId, @PathVariable int pecaId) {
        OrdemServico ordem = new OrdemServico();
        ordem.setId(ordemId);

        Peca peca = new Peca();
        peca.setId(pecaId);

        PecaUtilizadaId id = new PecaUtilizadaId(ordem, peca);

        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PecaUtilizada> criar(@RequestBody PecaUtilizada pecaUtilizada) {
        PecaUtilizada novaPeca = service.salvar(pecaUtilizada);
        return ResponseEntity.ok(novaPeca);
    }

    @DeleteMapping("/{ordemId}/{pecaId}")
    public ResponseEntity<Void> deletar(@PathVariable int ordemId, @PathVariable int pecaId) {
        OrdemServico ordem = new OrdemServico();
        ordem.setId(ordemId);

        Peca peca = new Peca();
        peca.setId(pecaId);

        PecaUtilizadaId id = new PecaUtilizadaId(ordem, peca);

        if (service.buscarPorId(id).isPresent()) {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}