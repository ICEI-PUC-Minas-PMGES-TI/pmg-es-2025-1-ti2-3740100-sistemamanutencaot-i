package io.manager.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.manager.backend.dto.CartoesDashboardResponse;
import io.manager.backend.dto.EstoqueAtualDTO;
import io.manager.backend.dto.ProdutoDestaqueDTO;
import io.manager.backend.dto.TaxaAtrasoMensalDTO;
import io.manager.backend.dto.VendaDiariaDTO;
import io.manager.backend.service.DashboardService;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/cartoes")
    public ResponseEntity<CartoesDashboardResponse> getCartoes(
            @RequestParam int mes,
            @RequestParam int ano
    ) {
        try {
            CartoesDashboardResponse response = dashboardService.getCartoes(mes, ano);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            e.printStackTrace(); // para ver no console do backend o erro
            return ResponseEntity.status(500).build();
        }
    }

    @GetMapping("/vendas-diarias")
    public ResponseEntity<List<VendaDiariaDTO>> getVendasDiarias(
            @RequestParam int mes,
            @RequestParam int ano
    ) {
        return ResponseEntity.ok(dashboardService.getVendasDiarias(mes, ano));
    }

    @GetMapping("/produtos-destaque")
    public ResponseEntity<List<ProdutoDestaqueDTO>> getProdutosDestaque(
            @RequestParam int mes,
            @RequestParam int ano
    ) {
        return ResponseEntity.ok(dashboardService.getProdutosDestaque(mes, ano));
    }

    @GetMapping("/taxa-atraso")
    public ResponseEntity<List<TaxaAtrasoMensalDTO>> getTaxaAtrasoPorMes(
            @RequestParam int ano
    ) {
        return ResponseEntity.ok(dashboardService.getTaxaAtrasoPorMes(ano));
    }

    @GetMapping("/estoque-atual")
    public ResponseEntity<List<EstoqueAtualDTO>> getEstoque() {
        return ResponseEntity.ok(dashboardService.getEstoqueAtual());
    }
}
