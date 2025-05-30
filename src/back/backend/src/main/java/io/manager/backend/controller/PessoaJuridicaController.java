package io.manager.backend.controller;

import io.manager.backend.model.PessoaJuridica;
import io.manager.backend.repository.PessoaJuridicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/pessoas/juridica")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class PessoaJuridicaController {

    @Autowired
    private PessoaJuridicaRepository pessoaJuridicaRepository;

    @GetMapping
    public List<PessoaJuridica> listarTodas() {
        return pessoaJuridicaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaJuridica> buscarPorId(@PathVariable int id) {
        return pessoaJuridicaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public PessoaJuridica criarPessoaJuridica(@RequestBody PessoaJuridica pessoaJuridica) {
        return pessoaJuridicaRepository.save(pessoaJuridica);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaJuridica> atualizar(@PathVariable int id, @RequestBody PessoaJuridica pessoaJuridicaAtualizada) {
        return pessoaJuridicaRepository.findById(id)
                .map(pessoa -> {
                    pessoa.setNome(pessoaJuridicaAtualizada.getNome());
                    pessoa.setCnpj(pessoaJuridicaAtualizada.getCnpj());
                    pessoa.setInscricaoJudicial(pessoaJuridicaAtualizada.getInscricaoJudicial());
                    PessoaJuridica pessoaJuridicaSalva = pessoaJuridicaRepository.save(pessoa);
                    return ResponseEntity.ok(pessoaJuridicaSalva);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
