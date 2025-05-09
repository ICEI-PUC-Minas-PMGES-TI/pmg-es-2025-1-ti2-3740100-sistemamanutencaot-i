package io.manager.backend.service;

import io.manager.backend.model.PessoaFisica;
import io.manager.backend.repository.PessoaFisicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PessoaFisicaService {

    @Autowired
    private PessoaFisicaRepository pessoaFisicaRepository;

    public List<PessoaFisica> listarTodas() {
        return pessoaFisicaRepository.findAll();
    }

    public Optional<PessoaFisica> buscarPorId(int id) {
        return pessoaFisicaRepository.findById(id);
    }

    public PessoaFisica criar(PessoaFisica pessoaFisica) {
        return pessoaFisicaRepository.save(pessoaFisica);
    }

    public Optional<PessoaFisica> atualizar(int id, PessoaFisica pessoaFisicaAtualizada) {
        return pessoaFisicaRepository.findById(id).map(pessoaFisica -> {
            pessoaFisica.setNome(pessoaFisicaAtualizada.getNome());
            pessoaFisica.setCpf(pessoaFisicaAtualizada.getCpf());
            return pessoaFisicaRepository.save(pessoaFisica);
        });
    }

    public boolean deletar(int id) {
        return pessoaFisicaRepository.findById(id).map(pessoaFisica -> {
            pessoaFisicaRepository.delete(pessoaFisica);
            return true;
        }).orElse(false);
    }
}
