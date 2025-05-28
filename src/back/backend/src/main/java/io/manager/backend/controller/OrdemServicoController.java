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
        List<OrdemServico> ordensServicos = ordemServicoService.listarTodas();
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

    // ====== FUNCIONALIDADES DE PEÇAS ======

    // Listar peças necessárias de uma ordem de serviço
    @GetMapping("/{id}/pecas")
    public ResponseEntity<List<Map<String, Object>>> listarPecas(@PathVariable Integer id) {
        List<Map<String, Object>> pecas = ordemServicoService.listarPecas(id);
        if (pecas != null) {
            return ResponseEntity.ok(pecas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Adicionar peça à ordem de serviço
    @PostMapping("/{id}/pecas")
    public ResponseEntity<List<Map<String, Object>>> adicionarPeca(
            @PathVariable Integer id,
            @RequestBody Map<String, Object> peca) {
        List<Map<String, Object>> pecas = ordemServicoService.adicionarPeca(id, peca);
        if (pecas != null) {
            return ResponseEntity.ok(pecas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Remover peça da ordem de serviço (por índice)
    @DeleteMapping("/{id}/pecas/{index}")
    public ResponseEntity<List<Map<String, Object>>> removerPeca(
            @PathVariable Integer id,
            @PathVariable Integer index) {
        List<Map<String, Object>> pecas = ordemServicoService.removerPeca(id, index);
        if (pecas != null) {
            return ResponseEntity.ok(pecas);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Enviar solicitação de peças (finalizar)
    @PostMapping("/{id}/pecas/enviar")
    public ResponseEntity<Map<String, String>> enviarSolicitacaoPecas(@PathVariable Integer id) {
        boolean enviado = ordemServicoService.enviarSolicitacaoPecas(id);
        if (enviado) {
            Map<String, String> resp = new HashMap<>();
            resp.put("mensagem", "Solicitação de peças enviada com sucesso!");
            return ResponseEntity.ok(resp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
