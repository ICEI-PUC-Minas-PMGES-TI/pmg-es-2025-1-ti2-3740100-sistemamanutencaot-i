package io.manager.backend.service;

import io.manager.backend.model.PessoaJuridica;
import io.manager.backend.repository.PessoaJuridicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PessoaJuridicaService {

    @Autowired
    private PessoaJuridicaRepository pessoaJuridicaRepository;

    public List<PessoaJuridica> findAll() {
        return pessoaJuridicaRepository.findAll();
    }

    public Optional<PessoaJuridica> findById(Integer id) {
        return pessoaJuridicaRepository.findById(id);
    }

    public PessoaJuridica save(PessoaJuridica pessoaJuridica) {
        return pessoaJuridicaRepository.save(pessoaJuridica);
    }

    public boolean deleteById(Integer id) {
        Optional<PessoaJuridica> pessoaJuridica = pessoaJuridicaRepository.findById(id);
        if (pessoaJuridica.isPresent()) {
            pessoaJuridicaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
