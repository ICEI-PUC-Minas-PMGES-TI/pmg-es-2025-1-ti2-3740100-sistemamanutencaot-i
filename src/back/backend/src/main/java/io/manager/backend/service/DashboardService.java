package io.manager.backend.service;

import io.manager.backend.dto.CartoesDashboardResponse;
import io.manager.backend.dto.EstoqueAtualDTO;
import io.manager.backend.dto.ProdutoDestaqueDTO;
import io.manager.backend.dto.TaxaAtrasoMensalDTO;
import io.manager.backend.dto.VendaDiariaDTO;

import org.springframework.stereotype.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

@Service
public class DashboardService {

    @Autowired
    private OrdemServicoService ordemServicoService;

    @Autowired
    private PecaUtilizadaService pecaUtilizadaService;

    @Autowired
    private PecaService pecaService;

    public CartoesDashboardResponse getCartoes(int mes, int ano) {
        double totalVendas = ordemServicoService.calcularTotalVendas(mes, ano);
        long reparos = ordemServicoService.contarReparosConcluidos(mes, ano);
        double ticketMedio = ordemServicoService.calcularTicketMedio(mes, ano);
        double taxaAtraso = ordemServicoService.calcularTaxaAtraso(mes, ano);

        return new CartoesDashboardResponse(totalVendas, reparos, ticketMedio, taxaAtraso);
    }

    public List<VendaDiariaDTO> getVendasDiarias(int mes, int ano) {
        return ordemServicoService.listarVendasDiarias(mes, ano);
    }

    public List<ProdutoDestaqueDTO> getProdutosDestaque(int mes, int ano) {
        return pecaUtilizadaService.listarProdutosDestaque(mes, ano);
    }

    public List<TaxaAtrasoMensalDTO> getTaxaAtrasoPorMes(int ano) {
        return ordemServicoService.calcularTaxaAtrasoMensal(ano);
    }

    public List<EstoqueAtualDTO> getEstoqueAtual() {
        return pecaService.getEstoqueParaDashboard();
    }
}
