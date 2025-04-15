package io.manager.backend.service;

import io.manager.backend.model.Loja;
import io.manager.backend.repository.LojaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LojaService {

    private final LojaRepository lojaRepository;

    public LojaService(LojaRepository lojaRepository) {
        this.lojaRepository = lojaRepository;
    }

    public List<Loja> listar() {
        return lojaRepository.findAll();
    }

    public Optional<Loja> buscarPorId(Integer id) {
        return lojaRepository.findById(id);
    }

    public Loja criar(Loja loja) {
        return lojaRepository.save(loja);
    }

    public Loja atualizar(Integer id, Loja lojaAtualizada) {
        return lojaRepository.findById(id).map(loja -> {
            loja.setNome(lojaAtualizada.getNome());
            loja.setCnpj(lojaAtualizada.getCnpj());
            loja.setEndereco(lojaAtualizada.getEndereco());
            return lojaRepository.save(loja);
        }).orElseThrow(() -> new RuntimeException("Loja não encontrada"));
    }

    public void deletar(Integer id) {
        lojaRepository.deleteById(id);
    }
}