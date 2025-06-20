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
            loja.setInscricaoJudicial(lojaAtualizada.getInscricaoJudicial());
            loja.setEndereco(lojaAtualizada.getEndereco());
            loja.setTelefone(lojaAtualizada.getTelefone());
            loja.setEmail(lojaAtualizada.getEmail());
            loja.setSenha(lojaAtualizada.getSenha());
            return lojaRepository.save(loja);
        }).orElseThrow(() -> new RuntimeException("Loja não encontrada"));
    }

    public Loja atualizarParcialmente(Integer id, Loja lojaParcial) {
        return lojaRepository.findById(id).map(loja -> {
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

    public Loja atualizarEmail(Integer id, String novoEmail, String senhaAtual) {
        Loja loja = lojaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loja não encontrada"));
        // Compara ignorando espaços e case sensitive
        String senhaBanco = loja.getSenha() != null ? loja.getSenha().trim() : "";
        String senhaRecebida = senhaAtual != null ? senhaAtual.trim() : "";
        System.out.println("Senha digitada: '" + senhaRecebida + "' | Senha no banco: '" + senhaBanco + "'");
        if (!senhaBanco.equalsIgnoreCase(senhaRecebida)) {
            throw new RuntimeException("Senha incorreta");
        }
        loja.setEmail(novoEmail);
        return lojaRepository.save(loja);
    }

    public void atualizarSenha(Integer id, String senhaAntiga, String senhaNova) {
        Loja loja = lojaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Loja não encontrada"));
        String senhaBanco = loja.getSenha() != null ? loja.getSenha().trim() : "";
        String senhaRecebida = senhaAntiga != null ? senhaAntiga.trim() : "";
        System.out.println("DEBUG TROCA SENHA | Senha antiga digitada: '" + senhaRecebida + "' | Senha no banco: '" + senhaBanco + "'");
        // Se não houver senha cadastrada, permite trocar sem exigir senha antiga
        if (senhaBanco.isEmpty()) {
            loja.setSenha(senhaNova);
            lojaRepository.save(loja);
            return;
        }
        // Se a senha digitada for igual à do banco (ignorando case e espaços)
        if (senhaBanco.equalsIgnoreCase(senhaRecebida)) {
            loja.setSenha(senhaNova);
            lojaRepository.save(loja);
            return;
        }
        throw new RuntimeException("Senha atual incorreta");
    }
}
