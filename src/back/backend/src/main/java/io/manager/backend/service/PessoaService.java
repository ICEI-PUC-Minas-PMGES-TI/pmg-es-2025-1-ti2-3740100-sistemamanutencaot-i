package io.manager.backend.service;

import io.manager.backend.model.Pessoa;
import io.manager.backend.repository.PessoaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PessoaService {

    @Autowired
    private PessoaRepository pessoaRepository;

    public List<Pessoa> listarTodas() {
        return pessoaRepository.findAll();
    }

    public Optional<Pessoa> buscarPorId(int id) {
        return pessoaRepository.findById(id);
    }

    public Pessoa criar(Pessoa pessoa) {
        return pessoaRepository.save(pessoa);
    }

    public Optional<Pessoa> atualizar(int id, Pessoa pessoaAtualizada) {
        return pessoaRepository.findById(id).map(pessoa -> {
            pessoa.setNome(pessoaAtualizada.getNome());
            pessoa.setCpf(pessoaAtualizada.getCpf());
            return pessoaRepository.save(pessoa);
        });
    }

    public boolean deletar(int id) {
        return pessoaRepository.findById(id).map(pessoa -> {
            pessoaRepository.delete(pessoa);
            return true;
        }).orElse(false);
    }
}
