package io.manager.backend.controller;

import io.manager.backend.model.Cliente;
import io.manager.backend.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/clientes")
@CrossOrigin (origins = {
    "http://localhost:5173",
    "https://pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.vercel.app"
})

public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<Cliente>> getAllClientes() {
        List<Cliente> clientes = clienteService.getAllClientes();
        return ResponseEntity.ok(clientes);
    }

    @GetMapping("/{id}")
    public Optional<Cliente> getClienteById(@PathVariable Integer id) {
        return clienteService.getClienteById(id);
    }

    @PostMapping
    public ResponseEntity<Cliente> createCliente(@RequestBody Cliente cliente) {
        Cliente createdCliente = clienteService.saveCliente(cliente);
        return ResponseEntity.status(201).body(createdCliente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Integer id, @RequestBody Cliente cliente) {
        Optional<Cliente> existingCliente = clienteService.getClienteById(id);

        if (existingCliente.isPresent()) {
            Cliente updatedCliente = existingCliente.get();
            
            updatedCliente.setNome(cliente.getNome());
            updatedCliente.setCpf(cliente.getCpf());
            updatedCliente.setTelefone(cliente.getTelefone());

            Cliente savedCliente = clienteService.saveCliente(updatedCliente);
    
            return ResponseEntity.ok(savedCliente);
        }

        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Integer id) {
        clienteService.deleteCliente(id);
        return ResponseEntity.noContent().build();
    }


}
