package io.manager.backend.controller;

import io.manager.backend.model.RequisicaoPeca;
import io.manager.backend.service.RequisicaoPecaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.access.prepost.PreAuthorize;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/pecas-requisicao")
@CrossOrigin(origins = "*")
public class RequisicaoPecaController {
    @Autowired
    private RequisicaoPecaService service;

    @PostMapping
    @PreAuthorize("hasRole('TECNICO')")
    public ResponseEntity<?> criar(@RequestBody Map<String, Object> body) {
        try {
            Integer ordemServicoId = (Integer) body.get("ordemServicoId");
            Integer pecaId = (Integer) body.get("pecaId");
            Integer quantidade = (Integer) body.get("quantidade");
            RequisicaoPeca req = service.criarRequisicao(ordemServicoId, pecaId, quantidade);
            return ResponseEntity.ok(req);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro interno ao criar requisição.");
        }
    }

    @GetMapping("/{ordemServicoId}")
    public ResponseEntity<?> listarPorOrdem(@PathVariable Integer ordemServicoId) {
        try {
            List<RequisicaoPeca> lista = service.listarPorOrdemServico(ordemServicoId);
            return ResponseEntity.ok(lista);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erro ao buscar requisições.");
        }
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('TECNICO')")
    public ResponseEntity<?> remover(@PathVariable Integer id) {
        try {
            service.remover(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Requisição não encontrada.");
        }
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('TECNICO')")
    public ResponseEntity<?> atualizar(@PathVariable Integer id, @RequestBody Map<String, Object> body) {
        try {
            Integer quantidade = (Integer) body.get("quantidade");
            RequisicaoPeca req = service.atualizar(id, quantidade);
            return ResponseEntity.ok(req);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Requisição não encontrada.");
        }
    }
}