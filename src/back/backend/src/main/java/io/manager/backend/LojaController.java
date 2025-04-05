package io.manager.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/lojas")
public class LojaController {

    @Autowired
    private LojaRepository lojaRepository;

    @GetMapping
    public List<Loja> listar() {
        return lojaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Loja> buscarPorId(@PathVariable Long id) {
        return lojaRepository.findById(id);
    }

    @PostMapping
    public Loja criar(@RequestBody Loja loja) {
        return lojaRepository.save(loja);
    }

    @PutMapping("/{id}")
    public Loja atualizar(@PathVariable Long id, @RequestBody Loja lojaAtualizada) {
        return lojaRepository.findById(id).map(loja -> {
            loja.setNome(lojaAtualizada.getNome());
            loja.setCnpj(lojaAtualizada.getCnpj());
            loja.setEndereco(lojaAtualizada.getEndereco());
            loja.setGerenteId(lojaAtualizada.getGerenteId());
            return lojaRepository.save(loja);
        }).orElseThrow(() -> new RuntimeException("Loja não encontrada"));
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        lojaRepository.deleteById(id);
    }
}
