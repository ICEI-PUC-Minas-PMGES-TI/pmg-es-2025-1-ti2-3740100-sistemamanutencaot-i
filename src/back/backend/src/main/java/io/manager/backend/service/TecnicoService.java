package io.manager.backend.service;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.model.Tecnico;
import io.manager.backend.repository.TecnicoRepository;
import io.manager.backend.repository.OrdemServicoRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TecnicoService {

    @Autowired
    private TecnicoRepository tecnicoRepository;

    @Autowired
    private OrdemServicoRepository ordemServicoRepository;

    public List<Tecnico> listarTodos() {
        return tecnicoRepository.findAll();
    }

    public Tecnico buscarPorId(Integer id) {
        return tecnicoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado com ID: " + id));
    }

    public Tecnico buscarPorEmail(String email) {
        return tecnicoRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado com e-mail: " + email));
    }

    public Tecnico salvar(Tecnico tecnico) {
        return tecnicoRepository.save(tecnico);
    }

    public Tecnico atualizar(Integer id, Tecnico dadosAtualizados) {
        Tecnico existente = buscarPorId(id);
        existente.setNome(dadosAtualizados.getNome());
        existente.setEmail(dadosAtualizados.getEmail());
        existente.setCargo(dadosAtualizados.getCargo());
        return tecnicoRepository.save(existente);
    }

    @Transactional
    public void deletar(Integer id) {
        Optional<Tecnico> tecnicoOptional = tecnicoRepository.findById(id);
        if (tecnicoOptional.isPresent()) {
            Tecnico tecnico = tecnicoOptional.get();

            // Setar tecnico como null nas ordens dele
            List<OrdemServico> ordens = ordemServicoRepository.findByTecnicoId(id);
            for (OrdemServico os : ordens) {
                os.setTecnico(null);
            }
            ordemServicoRepository.saveAll(ordens);

            tecnicoRepository.delete(tecnico);
        } else {
            throw new EntityNotFoundException("Técnico não encontrado.");
        }
    }

    public void atualizarSenha(Integer id, String senhaAntiga, String senhaNova) {
        Tecnico tecnico = buscarPorId(id);
        String senhaBanco = tecnico.getSenha() != null ? tecnico.getSenha().trim() : "";
        String senhaRecebida = senhaAntiga != null ? senhaAntiga.trim() : "";
        System.out.println("DEBUG TROCA SENHA TECNICO | Senha antiga digitada: '" + senhaRecebida + "' | Senha no banco: '" + senhaBanco + "'");
        // Se não houver senha cadastrada, permite trocar sem exigir senha antiga
        if (senhaBanco.isEmpty()) {
            tecnico.setSenha(senhaNova);
            tecnicoRepository.save(tecnico);
            return;
        }
        // Se a senha digitada for igual à do banco (ignorando case e espaços)
        if (senhaBanco.equalsIgnoreCase(senhaRecebida)) {
            tecnico.setSenha(senhaNova);
            tecnicoRepository.save(tecnico);
            return;
        }
        throw new RuntimeException("Senha atual incorreta");
    }
}

