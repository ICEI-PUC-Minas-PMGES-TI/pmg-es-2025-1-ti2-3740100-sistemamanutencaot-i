package io.manager.backend.service;

import io.manager.backend.model.Cliente;
import io.manager.backend.model.Pessoa;
import io.manager.backend.model.PessoaFisica;
import io.manager.backend.model.PessoaJuridica;
import io.manager.backend.repository.ClienteRepository;
import io.manager.backend.repository.PessoaRepository;
import io.manager.backend.dto.ClienteRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final PessoaRepository pessoaRepository;

    public ClienteService(ClienteRepository clienteRepository, PessoaRepository pessoaRepository) {
        this.clienteRepository = clienteRepository;
        this.pessoaRepository = pessoaRepository;
    }

    public List<Cliente> getAllClientes() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> getClienteById(Integer id) {
        return clienteRepository.findById(id);
    }

    public Cliente criarCliente(ClienteRequest dto) {
        Pessoa pessoa;

        if ("PF".equalsIgnoreCase(dto.getTipoPessoa())) {
            PessoaFisica pf = new PessoaFisica(dto.getNome(), dto.getCpf());
            pessoa = pessoaRepository.save(pf);
        } else if ("PJ".equalsIgnoreCase(dto.getTipoPessoa())) {
            PessoaJuridica pj = new PessoaJuridica(dto.getNome(), dto.getCnpj(), dto.getInscricaoJudicial());
            pessoa = pessoaRepository.save(pj);
        } else {
            throw new IllegalArgumentException("Tipo de pessoa inválido: " + dto.getTipoPessoa());
        }

        Cliente cliente = new Cliente(pessoa, dto.getTelefone());
        return clienteRepository.save(cliente);
    }

    public Optional<Cliente> atualizarCliente(Integer id, ClienteRequest dto) {
        return clienteRepository.findById(id).map(cliente -> {
            Pessoa pessoa = cliente.getPessoa();
            pessoa.setNome(dto.getNome());

            if (pessoa instanceof PessoaFisica pf && dto.getCpf() != null) {
                pf.setCpf(dto.getCpf());
            } else if (pessoa instanceof PessoaJuridica pj && dto.getCnpj() != null) {
                pj.setCnpj(dto.getCnpj());
                pj.setInscricaoJudicial(dto.getInscricaoJudicial());
            }

            pessoaRepository.save(pessoa);

            cliente.setTelefone(dto.getTelefone());
            return clienteRepository.save(cliente);
        });
    }

    public void deleteCliente(Integer id) {
        clienteRepository.deleteById(id);
    }

    public List<Cliente> buscarPorNome(String nome) {
        if (nome == null || nome.trim().isEmpty()) {
            return List.of(); // Retorna lista vazia se o nome for inválido
        }
        return clienteRepository.findByPessoaNomeContainingIgnoreCase(nome);
    }
}

