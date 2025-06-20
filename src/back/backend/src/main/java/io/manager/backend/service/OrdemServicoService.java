package io.manager.backend.service;

import io.manager.backend.model.OrdemServico;
import io.manager.backend.dto.OrdemServicoRequest;
import io.manager.backend.model.Computador;
import io.manager.backend.model.Tecnico;
import io.manager.backend.repository.OrdemServicoRepository;
import io.manager.backend.repository.ComputadorRepository;
import io.manager.backend.repository.TecnicoRepository;
import io.manager.backend.dto.VendaDiariaDTO;
import io.manager.backend.dto.TaxaAtrasoMensalDTO;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class OrdemServicoService {

    private final OrdemServicoRepository ordemServicoRepository;
    private final ComputadorRepository computadorRepository;
    private final TecnicoRepository tecnicoRepository;

    public OrdemServicoService(OrdemServicoRepository ordemServicoRepository,
                              ComputadorRepository computadorRepository,
                              TecnicoRepository tecnicoRepository) {
        this.ordemServicoRepository = ordemServicoRepository;
        this.computadorRepository = computadorRepository;
        this.tecnicoRepository = tecnicoRepository;
    }

    public List<OrdemServico> listarTodos() {
        return ordemServicoRepository.findAll();
    }

    public Optional<OrdemServico> buscarPorId(Integer id) {
        return ordemServicoRepository.findById(id);
    }

    public List<OrdemServico> buscarPorTecnicoId(Integer tecnicoId) {
        return ordemServicoRepository.findByTecnicoId(tecnicoId);
    }

    public Page<OrdemServico> listarPaginado(Pageable pageable) {
        return ordemServicoRepository.findAll(pageable);
    }

    public OrdemServico salvar(OrdemServicoRequest dto) {
        Computador comp = computadorRepository.findById(dto.getComputadorId())
            .orElseThrow(() -> new RuntimeException("Computador não encontrado"));

        OrdemServico ordem = new OrdemServico();
        ordem.setComputador(comp);

        if (dto.getTecnicoId() != null) {
            Tecnico tecnico = tecnicoRepository.findById(dto.getTecnicoId())
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado"));
            ordem.setTecnico(tecnico);
        } else {
            ordem.setTecnico(null); // explicitamente define como null
        }

        ordem.setStatus(dto.getStatus());
        ordem.setDataEntrada(dto.getDataEntrada());
        ordem.setPrazo(dto.getPrazo());
        ordem.setValorTotal(dto.getValorTotal());
        ordem.setDescricaoOs(dto.getDescricaoOs());
        ordem.setSolucaoOs(dto.getSolucaoOs());

        return ordemServicoRepository.save(ordem);
    }


    public OrdemServico atualizar(Integer id, OrdemServicoRequest dto) {
        OrdemServico ordem = ordemServicoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Ordem de Serviço não encontrada"));

        if (dto.getComputadorId() != null) {
            ordem.setComputador(computadorRepository.findById(dto.getComputadorId())
                .orElseThrow(() -> new RuntimeException("Computador não encontrado")));
        }

        if (dto.getTecnicoId() != null) {
            if (dto.getTecnicoId() == 0) {
                ordem.setTecnico(null); // remover o técnico
            } else {
                ordem.setTecnico(tecnicoRepository.findById(dto.getTecnicoId())
                    .orElseThrow(() -> new RuntimeException("Técnico não encontrado")));
            }
        }

        if (dto.getStatus() != null) ordem.setStatus(dto.getStatus());
        if (dto.getDataEntrada() != null) ordem.setDataEntrada(dto.getDataEntrada());
        if (dto.getPrazo() != null) ordem.setPrazo(dto.getPrazo());
        if (dto.getValorTotal() != null) ordem.setValorTotal(dto.getValorTotal());
        if (dto.getDescricaoOs() != null) ordem.setDescricaoOs(dto.getDescricaoOs());
        if (dto.getSolucaoOs() != null) ordem.setSolucaoOs(dto.getSolucaoOs());
        if (dto.getDataFinalizacao() != null) ordem.setDataFinalizacao(dto.getDataFinalizacao()); // ADICIONADO

        return ordemServicoRepository.save(ordem);
    }

    public List<OrdemServico> listarSemTecnico() {
        return ordemServicoRepository.findAllSemTecnico();
    }

    public OrdemServico atualizarTecnico(Integer id, Integer tecnicoId) {
        OrdemServico ordem = ordemServicoRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Ordem de Serviço não encontrada"));

        if (tecnicoId == null || tecnicoId == 0) {
            ordem.setTecnico(null); // remover técnico
        } else {
            Tecnico tecnico = tecnicoRepository.findById(tecnicoId)
                .orElseThrow(() -> new RuntimeException("Técnico não encontrado"));
            ordem.setTecnico(tecnico);
        }

        return ordemServicoRepository.save(ordem);
    }

    public void deletar(Integer id) {
        ordemServicoRepository.deleteById(id);
    }


    public double calcularTotalVendas(int mes, int ano) {
        return ordemServicoRepository.totalVendas(mes, ano);
    }

    public long contarReparosConcluidos(int mes, int ano) {
        return ordemServicoRepository.contadorTotalReparos("CONCLUIDO", mes, ano);
    }

    public double calcularTicketMedio(int mes, int ano) {
        return ordemServicoRepository.ticketMedio(mes, ano);
    }

    public double calcularTaxaAtraso(int mes, int ano) {
        Double taxa = ordemServicoRepository.taxaAtraso(mes, ano);
        if (taxa == null) {
            return 0.0; // ou algum valor padrão
        }
        return taxa.doubleValue();
    }


    public List<VendaDiariaDTO> listarVendasDiarias(int mes, int ano) {
        return ordemServicoRepository.vendasPorDia(mes, ano);
    }

    
    public List<TaxaAtrasoMensalDTO> calcularTaxaAtrasoMensal(int ano) {
        List<TaxaAtrasoMensalDTO> resultado = new ArrayList<>();

        String[] meses = {
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
            "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        };

        for (int mes = 1; mes <= 12; mes++) {
            int total = ordemServicoRepository.contarFinalizadasPorMesEAno(mes, ano);
            int atrasadas = ordemServicoRepository.contarAtrasadasPorMesEAno(mes, ano);

            double taxa = (total == 0) ? 0.0 : (atrasadas * 100.0) / total;
            resultado.add(new TaxaAtrasoMensalDTO(meses[mes - 1], taxa));
        }

        return resultado;
    }
}
