package io.manager.backend.controller;

import io.manager.backend.dto.RequisicaoDTO;
import io.manager.backend.model.Requisicao;
import io.manager.backend.service.RequisicaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/requisicoes")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class RequisicaoController {

    @Autowired
    private RequisicaoService requisicaoService;

    // Listar todas as requisições como DTOs
    @GetMapping
    public List<RequisicaoDTO> listar() {
        List<Requisicao> lista = requisicaoService.listarTodas();
        return lista.stream()
                .map(RequisicaoDTO::new)
                .collect(Collectors.toList());
    }

    // Buscar uma requisição por id
    @GetMapping("/{id}")
    public ResponseEntity<RequisicaoDTO> buscarPorId(@PathVariable Integer id) {
        return requisicaoService.buscarPorId(id)
                .map(requisicao -> ResponseEntity.ok(new RequisicaoDTO(requisicao)))
                .orElse(ResponseEntity.notFound().build());
    }

    // Criar uma nova requisição (espera objeto JSON compatível com Requisicao)
    @PostMapping
    public ResponseEntity<RequisicaoDTO> criar(@RequestBody Requisicao requisicao) {
        Requisicao salva = requisicaoService.salvar(requisicao);
        return ResponseEntity.ok(new RequisicaoDTO(salva));
    }

    // Atualizar uma requisição existente
    @PutMapping("/{id}")
    public ResponseEntity<RequisicaoDTO> atualizar(@PathVariable Integer id, @RequestBody Requisicao requisicaoAtualizada) {
        if (!requisicaoService.existePorId(id)) {
            return ResponseEntity.notFound().build();
        }
        requisicaoAtualizada.setId(id);
        Requisicao salva = requisicaoService.salvar(requisicaoAtualizada);
        return ResponseEntity.ok(new RequisicaoDTO(salva));
    }

    // Deletar uma requisição
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        if (!requisicaoService.existePorId(id)) {
            return ResponseEntity.notFound().build();
        }
        requisicaoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
