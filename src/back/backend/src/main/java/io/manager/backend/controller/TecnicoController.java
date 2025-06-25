package io.manager.backend.controller;

import io.manager.backend.model.Tecnico;
import io.manager.backend.service.TecnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.manager.backend.dto.LoginRequest;
import io.manager.backend.dto.SenhaUpdateRequest;

import java.util.List;

@RestController
@RequestMapping("/tecnicos")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class TecnicoController {

    @Autowired
    private TecnicoService tecnicoService;

    @GetMapping
    public ResponseEntity<List<Tecnico>> listarTodos() {
        return ResponseEntity.ok(tecnicoService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tecnico> buscarPorId(@PathVariable Integer id) {
        return ResponseEntity.ok(tecnicoService.buscarPorId(id));
    }

    @GetMapping("/email")
    public ResponseEntity<Tecnico> buscarPorEmail(@RequestParam String email) {
        return ResponseEntity.ok(tecnicoService.buscarPorEmail(email));
    }

    @PostMapping
    public ResponseEntity<Tecnico> criar(@RequestBody Tecnico tecnico) {
        Tecnico novo = tecnicoService.salvar(tecnico);
        return ResponseEntity.ok(novo);
    }

    // Adiciona @CrossOrigin específico aqui também e responde OPTIONS para preflight
    @CrossOrigin(origins = {
            "http://localhost:5173",
            "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
    })
    @RequestMapping(value = "/login-tecnico", method = {RequestMethod.POST, RequestMethod.OPTIONS})
    public ResponseEntity<?> loginTecnico(@RequestBody(required = false) LoginRequest loginRequest) {
        // Se for requisição OPTIONS, retorna cabeçalhos CORS e sucesso
        if (loginRequest == null) {
            HttpHeaders headers = new HttpHeaders();
            headers.add("Access-Control-Allow-Origin", "http://localhost:5173");
            headers.add("Access-Control-Allow-Methods", "POST, OPTIONS");
            headers.add("Access-Control-Allow-Headers", "Content-Type");
            return ResponseEntity.ok().headers(headers).build();
        }

        System.out.println("LoginRequest recebido: " + loginRequest);

        if (loginRequest.getEmail() == null || loginRequest.getSenha() == null) {
            return ResponseEntity.badRequest().body("Dados de login incompletos");
        }

        try {
            Tecnico tecnico = tecnicoService.buscarPorEmail(loginRequest.getEmail());

            if (tecnico.getSenha() == null) {
                return ResponseEntity.status(401).body("Senha não cadastrada");
            }

            if (!tecnico.getSenha().equals(loginRequest.getSenha())) {
                return ResponseEntity.status(401).body("Senha incorreta");
            }

            tecnico.setSenha(null);
            return ResponseEntity.ok(tecnico);

        } catch (RuntimeException e) {
            System.out.println("Erro: " + e.getMessage());
            return ResponseEntity.status(401).body("Usuário não encontrado");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Erro interno do servidor: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Tecnico> atualizar(@PathVariable Integer id, @RequestBody Tecnico tecnico) {
        Tecnico atualizado = tecnicoService.atualizar(id, tecnico);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        tecnicoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/senha")
    public ResponseEntity<?> atualizarSenha(@PathVariable Integer id, @RequestBody SenhaUpdateRequest request) {
        try {
            if (request.getSenhaAntiga() == null || request.getSenhaNova() == null) {
                return ResponseEntity.badRequest().body("Campos obrigatórios não informados");
            }
            tecnicoService.atualizarSenha(id, request.getSenhaAntiga(), request.getSenhaNova());
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }

}