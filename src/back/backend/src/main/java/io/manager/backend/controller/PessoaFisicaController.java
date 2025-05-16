package io.manager.backend.controller;

import io.manager.backend.model.PessoaFisica;
import io.manager.backend.repository.PessoaFisicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/pessoas/fisica")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class PessoaFisicaController {

    @Autowired
    private PessoaFisicaRepository pessoaFisicaRepository;

    @GetMapping
    public List<PessoaFisica> listarTodas() {
        return pessoaFisicaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PessoaFisica> buscarPorId(@PathVariable int id) {
        return pessoaFisicaRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public PessoaFisica criarPessoaFisica(@RequestBody PessoaFisica pessoaFisica) {
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PessoaFisica> atualizar(@PathVariable int id, @RequestBody PessoaFisica pessoaFisicaAtualizada) {
        return pessoaFisicaRepository.findById(id)
                .map(pessoa -> {
                    pessoa.setNome(pessoaFisicaAtualizada.getNome());
                    pessoa.setCpf(pessoaFisicaAtualizada.getCpf());
                    PessoaFisica pessoaFisicaSalva = pessoaFisicaRepository.save(pessoa);
                    return ResponseEntity.ok(pessoaFisicaSalva);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
