package io.manager.backend.controller;

import io.manager.backend.dto.OrdemServicoRequest;
import io.manager.backend.dto.OrdemServicoDTO;
import io.manager.backend.model.OrdemServico;
import io.manager.backend.service.OrdemServicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;

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
    public ResponseEntity<Page<OrdemServico>> buscarOrdensComPaginacao(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "8") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<OrdemServico> ordens = ordemServicoService.listarPaginado(pageable);
        return ResponseEntity.ok(ordens);
    }

    @GetMapping("/sem-tecnico")
    public List<OrdemServico> listarSemTecnico() {
        return ordemServicoService.listarSemTecnico();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdemServicoDTO> buscarPorId(@PathVariable Integer id) {
        OrdemServico ordem = ordemServicoService.buscarPorId(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordem não encontrada"));

        OrdemServicoDTO dto = new OrdemServicoDTO(ordem);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/tecnico/{tecnicoId}")
    public ResponseEntity<List<OrdemServico>> listarPorTecnico(@PathVariable Integer tecnicoId) {
        List<OrdemServico> ordens = ordemServicoService.buscarPorTecnicoId(tecnicoId);
        return ResponseEntity.ok(ordens);
    }

    @PostMapping
    public ResponseEntity<OrdemServico> criarOrdemServico(@RequestBody OrdemServicoRequest dto) {
        OrdemServico criada = ordemServicoService.salvar(dto);
        return ResponseEntity.status(201).body(criada);
    }

    @PutMapping("/{id}")
    public ResponseEntity<OrdemServico> atualizarOrdemServico(@PathVariable Integer id, @RequestBody OrdemServicoRequest ordemServico) {
        OrdemServico atualizada = ordemServicoService.atualizar(id, ordemServico);
        if (atualizada != null) {
            return ResponseEntity.ok(atualizada);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PatchMapping("/{id}/tecnico")
    public ResponseEntity<OrdemServico> atualizarTecnicoOrdemServico(
            @PathVariable Integer id,
            @RequestBody Map<String, Integer> payload) {

        Integer tecnicoId = payload.get("tecnicoId");
        if (tecnicoId == null) {
            return ResponseEntity.badRequest().build();
        }

        try {
            OrdemServico atualizada = ordemServicoService.atualizarTecnico(id, tecnicoId);
            return ResponseEntity.ok(atualizada);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }


    @PutMapping("/ordem-servicos/{id}")
    public ResponseEntity<OrdemServico> atualizar(@PathVariable Integer id, @RequestBody OrdemServicoRequest dto) {
        OrdemServico ordem = ordemServicoService.atualizar(id, dto);
        return ResponseEntity.ok(ordem);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarOrdemServico(@PathVariable Integer id) {
        ordemServicoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}