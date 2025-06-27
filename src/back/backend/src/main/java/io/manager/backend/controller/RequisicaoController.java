package io.manager.backend.controller;

import io.manager.backend.dto.RequisicaoDTO;
import io.manager.backend.dto.RequisicaoInputDTO;
import io.manager.backend.model.Peca;
import io.manager.backend.model.Requisicao;
import io.manager.backend.model.RequisicaoPeca;
import io.manager.backend.model.Tecnico;
import io.manager.backend.service.PecaService;
import io.manager.backend.service.RequisicaoService;
import io.manager.backend.service.TecnicoService;

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

    @Autowired
    private PecaService pecaService;

    @Autowired
    private TecnicoService tecnicoService;

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

   @PostMapping
    public ResponseEntity<RequisicaoDTO> criar(@RequestBody RequisicaoInputDTO inputDTO) {
        Requisicao requisicao = mapInputDtoToEntity(inputDTO);
        Requisicao salva = requisicaoService.salvar(requisicao);
        return ResponseEntity.ok(new RequisicaoDTO(salva));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RequisicaoDTO> atualizar(@PathVariable Integer id, @RequestBody RequisicaoInputDTO inputDTO) {
        if (!requisicaoService.existePorId(id)) {
            return ResponseEntity.notFound().build();
        }

        Requisicao requisicao = mapInputDtoToEntity(inputDTO);
        requisicao.setId(id);
        Requisicao salva = requisicaoService.salvar(requisicao);
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

    private Requisicao mapInputDtoToEntity(RequisicaoInputDTO inputDTO) {
        Requisicao requisicao = new Requisicao();
        requisicao.setStatus(inputDTO.getStatus());
        requisicao.setObservacao(inputDTO.getObservacao());

        if (inputDTO.getTecnicoId() != null) {
            Tecnico tecnico = tecnicoService.buscarPorId(inputDTO.getTecnicoId());
            requisicao.setTecnico(tecnico);
        }

        if (inputDTO.getPecas() != null) {
            List<RequisicaoPeca> requisicaoPecas = inputDTO.getPecas().stream().map(item -> {
                RequisicaoPeca rp = new RequisicaoPeca();
                Peca peca = pecaService.getPecaById(item.getPecaId())
                        .orElseThrow(() -> new RuntimeException("Peça não encontrada com ID: " + item.getPecaId()));
                rp.setPeca(peca);
                rp.setQuantidade(item.getQuantidade());
                rp.setRequisicao(requisicao); // importante para manter o relacionamento bidirecional
                return rp;
            }).collect(Collectors.toList());

            requisicao.setRequisicaoPecas(requisicaoPecas);
        }

        return requisicao;
    }

}
