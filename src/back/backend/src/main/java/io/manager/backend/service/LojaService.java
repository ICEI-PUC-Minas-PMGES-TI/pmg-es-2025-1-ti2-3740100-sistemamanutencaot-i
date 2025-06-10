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
            loja.setNome(lojaAtualizada.getNome()); // herdado de Pessoa
            loja.setCnpj(lojaAtualizada.getCnpj()); // herdado de PessoaJuridica
            loja.setInscricaoJudicial(lojaAtualizada.getInscricaoJudicial()); // herdado de PessoaJuridica
            loja.setEndereco(lojaAtualizada.getEndereco());
            loja.setTelefone(lojaAtualizada.getTelefone());
            loja.setEmail(lojaAtualizada.getEmail());
            loja.setSenha(lojaAtualizada.getSenha());
            return lojaRepository.save(loja);
        }).orElseThrow(() -> new RuntimeException("Loja não encontrada"));
    }

    public Loja atualizarParcialmente(Integer id, Loja lojaParcial) {
        return lojaRepository.findById(id).map(loja -> {
            // Atualiza somente os campos telefone, email e senha se forem fornecidos
            if (lojaParcial.getTelefone() != null) {
                loja.setTelefone(lojaParcial.getTelefone());
            }
            if (lojaParcial.getEmail() != null) {
                loja.setEmail(lojaParcial.getEmail());
            }
            if (lojaParcial.getSenha() != null) {
                loja.setSenha(lojaParcial.getSenha());
            }
            return lojaRepository.save(loja);
        }).orElseThrow(() -> new RuntimeException("Loja não encontrada"));
    }

    public Loja autenticar(String email, String senha) {
        return lojaRepository.findByEmailAndSenha(email, senha)
                .orElse(null);
    }

    public void deletar(Integer id) {
        lojaRepository.deleteById(id);
    }
}
