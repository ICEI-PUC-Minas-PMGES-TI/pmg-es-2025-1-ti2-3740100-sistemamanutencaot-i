package io.manager.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class RequisicaoPeca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "ordem_servico_id", nullable = false)
    private OrdemServico ordemServico;

    @ManyToOne
    @JoinColumn(name = "peca_id", nullable = false)
    private Peca peca;

    private Integer quantidade;

    private LocalDateTime dataRequisicao = LocalDateTime.now();

    // getters e setters
}