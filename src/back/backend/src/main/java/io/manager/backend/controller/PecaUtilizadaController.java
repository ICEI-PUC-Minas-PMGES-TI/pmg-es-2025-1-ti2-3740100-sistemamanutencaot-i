package io.manager.backend.controller;

import io.manager.backend.dto.PecaUtilizadaDTO;
import io.manager.backend.model.OrdemServico;
import io.manager.backend.service.OrdemServicoService;
import io.manager.backend.service.PecaService;
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

    @Autowired
    private OrdemServicoService osService;

    @Autowired
    private PecaService pecaService;


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

    @GetMapping("/ordem/{ordemId}")
    public ResponseEntity<List<PecaUtilizada>> listarPorOrdem(@PathVariable int ordemId) {
        return ResponseEntity.ok(service.listarPorOrdem(ordemId));
    }

    @PostMapping
    public ResponseEntity<?> salvarPecaUtilizada(@RequestBody PecaUtilizadaDTO dto) {
        OrdemServico ordem = osService.buscarPorId(dto.getOrdemId())
            .orElseThrow(() -> new RuntimeException("Ordem não encontrada"));
        Peca peca = pecaService.getPecaById(dto.getPecaId())
        .orElseThrow(() -> new RuntimeException("Peça não encontrada"));

        PecaUtilizada pecaUtilizada = new PecaUtilizada();
        pecaUtilizada.setOrdemServico(ordem);
        pecaUtilizada.setPeca(peca);
        pecaUtilizada.setPrecoUnitario(dto.getPrecoUnitario());
        pecaUtilizada.setQuantidade(dto.getQuantidade());

        service.salvar(pecaUtilizada);

        return ResponseEntity.ok().build();
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