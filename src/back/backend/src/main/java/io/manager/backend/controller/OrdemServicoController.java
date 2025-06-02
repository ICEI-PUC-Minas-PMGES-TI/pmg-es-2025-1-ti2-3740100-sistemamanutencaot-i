package io.manager.backend.controller;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.service.OrdemServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/ordem-servicos")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class OrdemServicoController {

    @Autowired
    private OrdemServicoService ordemServicoService;

    @GetMapping
    public ResponseEntity<List<OrdemServico>> buscarTodasOrdensServicos() {
        List<OrdemServico> ordensServicos = ordemServicoService.listarTodos();
        return ResponseEntity.ok(ordensServicos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdemServico> buscarOrdemServicoPorId(@PathVariable Integer id) {
        return ordemServicoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<OrdemServico> criarOrdemServico(@RequestBody OrdemServico ordemServico) {
        // Permitir que o campo descricaoOS seja recebido e salvo, se existir no JSON
        // (Certifique-se de que o model OrdemServico tenha o campo descricaoOS)
        OrdemServico criada = ordemServicoService.salvar(ordemServico);
        return ResponseEntity.status(201).body(criada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrdemServico> atualizarOrdemServico(@PathVariable Integer id, @RequestBody OrdemServico ordemServico) {
        OrdemServico atualizada = ordemServicoService.atualizar(id, ordemServico);
        if (atualizada != null) {
            return ResponseEntity.ok(atualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarOrdemServico(@PathVariable Integer id) {
        ordemServicoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

}