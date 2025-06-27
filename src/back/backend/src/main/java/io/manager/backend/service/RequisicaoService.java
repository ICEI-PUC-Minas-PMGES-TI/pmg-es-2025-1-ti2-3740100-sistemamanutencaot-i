package io.manager.backend.service;

import io.manager.backend.model.Requisicao;
import io.manager.backend.model.RequisicaoPeca;
import io.manager.backend.repository.RequisicaoPecaRepository;
import io.manager.backend.repository.RequisicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;
import java.util.Optional;

@Service
public class RequisicaoService {

    @Autowired
    private RequisicaoRepository requisicaoRepository;

    @Autowired
    private RequisicaoPecaRepository requisicaoPecaRepository;

    public List<Requisicao> listarTodas() {
        return requisicaoRepository.findAll();
    }

    public Optional<Requisicao> buscarPorId(Integer id) {
        return requisicaoRepository.findById(id);
    }

    public Requisicao salvar(Requisicao requisicao) {
        if (requisicao.getStatus() == null) {
            requisicao.setStatus("Pendente");
        }
        if (requisicao.getDataSolicitacao() == null) {
            requisicao.setDataSolicitacao(new Date());
        }

        // Salvar a requisição primeiro para garantir ID
        Requisicao salva = requisicaoRepository.save(requisicao);

        // Se houver peças relacionadas, salvar cada uma com referência à requisição salva
        if (requisicao.getRequisicaoPecas() != null) {
            for (RequisicaoPeca rp : requisicao.getRequisicaoPecas()) {
                rp.setRequisicao(salva);
                requisicaoPecaRepository.save(rp);
            }
        }

        // Atualizar a lista na entidade salva e retornar
        salva.setRequisicaoPecas(requisicao.getRequisicaoPecas());

        return salva;
    }


    public void deletar(Integer id) {
        requisicaoRepository.deleteById(id);
    }

    public boolean existePorId(Integer id) {
        return requisicaoRepository.existsById(id);
    }
}
