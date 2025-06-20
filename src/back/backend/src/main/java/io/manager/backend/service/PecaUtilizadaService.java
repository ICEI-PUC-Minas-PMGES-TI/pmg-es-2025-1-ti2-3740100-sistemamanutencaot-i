package io.manager.backend.service;

import io.manager.backend.dto.ProdutoDestaqueDTO;
import io.manager.backend.model.PecaUtilizada;
import io.manager.backend.model.PecaUtilizadaId;
import io.manager.backend.model.Peca;
import io.manager.backend.repository.PecaRepository;
import io.manager.backend.repository.PecaUtilizadaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PecaUtilizadaService {

    @Autowired
    private PecaUtilizadaRepository repository;
    
    @Autowired
    private PecaRepository pecaRepository;

    public List<PecaUtilizada> listarTodas() {
        return repository.findAll();
    }

    public Optional<PecaUtilizada> buscarPorId(PecaUtilizadaId id) {
        return repository.findById(id);
    }

    @Transactional
    public void salvar(PecaUtilizada pecaUtilizada) {
        Peca peca = pecaUtilizada.getPeca();
        int novaQuantidade = peca.getEstoque() - pecaUtilizada.getQuantidade();
        if (novaQuantidade < 0) {
            throw new IllegalArgumentException("Estoque insuficiente para a peça: " + peca.getNome());
        }
        peca.setEstoque(novaQuantidade);
        pecaRepository.save(peca);

        repository.save(pecaUtilizada);
    }
    

    public void deletar(PecaUtilizadaId id) {
        repository.deleteById(id);
    }

    public List<ProdutoDestaqueDTO> listarProdutosDestaque(int mes, int ano) {
        return repository.buscarProdutosDestaque(mes, ano);
    }
}
