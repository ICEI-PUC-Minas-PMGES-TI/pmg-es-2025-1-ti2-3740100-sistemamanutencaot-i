package io.manager.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class peca{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)

private int id;
private String nome;
private String tipo;
private String marca;
private Integer quantidade;
private Dooble preco;
private Integer quantidade_estoque;

public peca() {
}

public peca(int id, String nome, String tipo, String marca, Integer quantidade, String preco, Integer quantidade_estoque) {
    this.id = id;
    this.nome = nome;
    this.tipo = tipo;
    this.marca = marca;
    this.quantidade = quantidade;
    this.preco = preco;
    this.quantidade_estoque = quantidade_estoque;

}

public int getId() {
    return id;
}

public void setId(int id) {
    this.id = id;
}

public String getNome() {
    return nome;
}

public void setNome(String nome) {
    this.nome = nome;
}

public String getTipo() {
    return tipo;
}

public void setTipo(String tipo) {
    this.tipo = tipo;
}

public String getMarca() {
    return marca;
}

public void setMarca(String marca) {
    this.marca = marca;
}

public Integer getQuantidade() {
    return quantidade;
}

public void setQuantidade(Integer quantidade) {
    this.quantidade = quantidade;
}

public String getPreco() {
    return preco;
}

public void setPreco(String preco) {
    this.preco = preco;
}

public Integer getQuantidade_estoque() {
    return quantidade_estoque;
}

public void setQuantidade_estoque(Integer quantidade_estoque) {
    this.quantidade_estoque = quantidade_estoque;
}

@Override

public String toString() {
    return "peca{" +
            "id=" + id +
            ", nome='" + nome + '\'' +
            ", tipo='" + tipo + '\'' +
            ", marca='" + marca + '\'' +
            ", quantidade=" + quantidade +
            ", preco='" + preco + '\'' +
            ", quantidade_estoque=" + quantidade_estoque +
            '}';
  }

}