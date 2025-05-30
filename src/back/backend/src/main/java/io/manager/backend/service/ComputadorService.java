package io.manager.backend.service;

import io.manager.backend.model.Computador;
import io.manager.backend.model.Cliente;
import io.manager.backend.repository.ComputadorRepository;
import io.manager.backend.repository.ClienteRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComputadorService {

    private final ComputadorRepository computadorRepository;
    private final ClienteRepository clienteRepository;

    public ComputadorService(ComputadorRepository computadorRepository, ClienteRepository clienteRepository) {
        this.computadorRepository = computadorRepository;
        this.clienteRepository = clienteRepository;
    }

    public List<Computador> listarTodos() {
        return computadorRepository.findAll();
    }

    public Optional<Computador> buscarPorId(Integer id) {
        return computadorRepository.findById(id);
    }

    public Computador salvar(Computador computador) {
        if (computador.getCliente() != null) {
            Integer clienteId = computador.getCliente().getId();
            Cliente cliente = clienteRepository.findById(clienteId)
                    .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
            computador.setCliente(cliente);
        } else {
            throw new RuntimeException("Cliente é obrigatório para salvar Computador");
        }
        return computadorRepository.save(computador);
    }

    public Computador atualizar(Integer id, Computador computadorAtualizado) {
        return computadorRepository.findById(id).map(c -> {
            if (computadorAtualizado.getCliente() != null) {
                Integer clienteId = computadorAtualizado.getCliente().getId();
                Cliente cliente = clienteRepository.findById(clienteId)
                        .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
                c.setCliente(cliente);
            }
            c.setTipo(computadorAtualizado.getTipo());
            c.setMarca(computadorAtualizado.getMarca());
            c.setModelo(computadorAtualizado.getModelo());
            return computadorRepository.save(c);
        }).orElseThrow(() -> new RuntimeException("Computador não encontrado"));
    }

    public void deletar(Integer id) {
        computadorRepository.deleteById(id);
    }
}
