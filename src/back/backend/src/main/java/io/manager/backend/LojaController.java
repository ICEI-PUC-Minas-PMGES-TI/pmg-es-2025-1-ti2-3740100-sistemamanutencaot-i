package io.manager.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lojas")
public class LojaController {

    @Autowired
    private LojaRepository lojaRepository;

    @GetMapping
    public List<Loja> listar() {
        return lojaRepository.findAll();
    }

    @PostMapping
    public Loja criar(@RequestBody Loja loja) {
        return lojaRepository.save(loja);
    }
}