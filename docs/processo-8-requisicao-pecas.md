### Processo 8 – Requisição de peças

O processo de manutenção incluem a seleção e o concerto da máquina pelo técnico, também possui as notificações da etapa de manutenção.

Oportunidades de melhoria incluem relatórios sobre o processo.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/novo/requisicaoPecasBPMN.png "Modelo BPMN do Cadastro de Cliente.")

#### Detalhamento das atividades

## Atividade 1 – Preencher Formulário  
### Campos:
| **Campo**        | **Tipo**        | **Restrições**          |
|-----------------|----------------|-------------------------|
| Peça necessária | Área de texto   | Obrigatório             |
| Quantidade      | Número          | Obrigatório, Positivo   |
| Técnico         | Área de texto   | Obrigatório             |

### Comandos:
| **Comando**        | **Destino**             |
|-------------------|------------------------|
| Enviar requisição | Validação dos dados    |
| Cancelar          | Fim do processo        |

---

## Atividade 2 – Validação dos Dados  
### Campos:
| **Campo**       | **Tipo**        | **Restrições**       |
|-----------------|----------------|----------------------|
| Dados válidos   | Seleção única   | Obrigatório         |

### Comandos:
| **Comando**   | **Destino**         |
|--------------|---------------------|
| Sim          | Analisar pedido     |
| Não          | Fim do processo     |
| Voltar       | Preencher Formulário |
| Cancelar     | Fim do processo     |

---

## Atividade 3 – Analisar Pedido  
### Campos:
| **Campo**        | **Tipo**        | **Restrições**    |
|------------------|----------------|-------------------|
| Pedido aprovado  | Seleção única   | Obrigatório       |

### Comandos:
| **Comando**   | **Destino**         |
|--------------|---------------------|
| Sim          | Confirmar compra    |
| Não          | Fim do processo     |
| Voltar       | Validação dos dados |
| Cancelar     | Fim do processo     |

---

## Atividade 4 – Confirmar Compra  
### Campos:
| **Campo**     | **Tipo**       | **Restrições**         |
|--------------|---------------|------------------------|
| Peça         | Área de texto  | Obrigatório           |
| Quantidade   | Número         | Obrigatório, Positivo |

### Comandos:
| **Comando**     | **Destino**        |
|----------------|--------------------|
| Compra feita   | Produto entregue   |
| Voltar         | Analisar pedido    |
| Cancelar       | Fim do processo    |

---

## Atividade 5 – Produto Entregue  
### Campos:
| **Campo**         | **Tipo**        | **Restrições**    |
|------------------|----------------|-------------------|
| Produto recebido | Seleção única   | Obrigatório       |

### Comandos:
| **Comando**  | **Destino**                              |
|-------------|------------------------------------------|
| Sim         | Registrar no estoque e arquivar pedido   |
| Voltar      | Confirmar compra                         |
| Cancelar    | Fim do processo                          |

---

## Atividade 6 – Registrar no Estoque e Arquivar Pedido  
### Campos:
| **Campo**         | **Tipo**       | **Restrições**         |
|------------------|----------------|------------------------|
| Peça             | Seleção Única  | Obrigatório            |
| Número do pedido | Número         | Obrigatório            |
| Quantidade       | Número         | Obrigatório, Positivo  |

### Comandos:
| **Comando**      | **Destino**        |
|------------------|--------------------|
| Registro feito   | Fim do processo    |
| Voltar           | Produto entregue   |
| Cancelar         | Fim do processo    |
