### Processo 7 – Manutenção

O processo de manutenção incluem a seleção e o concerto da máquina pelo técnico, também possui as notificações da etapa de manutenção.

Oportunidades de melhoria incluem relatórios sobre o processo.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/novo/manutencaoBPMN.png "Modelo BPMN da Manutenção.")

#### Detalhamento das atividades

## Atividade 1 – Selecionar a O.S para manutenção  
### Campos:
| **Campo**         | **Tipo**        | **Restrições**          |
|------------------|----------------|-------------------------|
| Ordem de Serviço | Seleção Única   | Obrigatório             |

### Comandos:
| **Comando**           | **Destino**                    |
|----------------------|---------------------------------|
| Iniciar manutenção    | Tempo da manutenção             |
| Cancelar              | Fim do processo                 |

---

## Atividade 2 – Tempo da Manutenção  
### Campos:
| **Campo**       | **Tipo**        | **Restrições**            |
|-----------------|----------------|---------------------------|
| Tempo estimado  | Número          | Obrigatório, Positivo     |

### Comandos:
| **Comando**             | **Destino**                  |
|------------------------|------------------------------|
| Concluir manutenção     | Manutenção bem sucedida?     |
| Voltar                  | Selecionar a O.S para manutenção |
| Cancelar                | Fim do processo              |

---

## Atividade 3 – Manutenção Bem Sucedida?  
### Campos:
| **Campo**                | **Tipo**        | **Restrições**    |
|--------------------------|----------------|-------------------|
| Manutenção bem-sucedida? | Seleção única   | Obrigatório       |

### Comandos:
| **Comando**   | **Destino**                  |
|--------------|-----------------------------|
| Sim          | Alterar status no sistema   |
| Não          | Executar diagnóstico        |
| Voltar       | Tempo da manutenção         |
| Cancelar     | Fim do processo             |

---

## Atividade 4 – Executar Diagnóstico  
### Campos:
| **Campo**               | **Tipo**        | **Restrições**    |
|------------------------|----------------|-------------------|
| Diagnóstico realizado? | Seleção única   | Obrigatório       |

### Comandos:
| **Comando**           | **Destino**                         |
|----------------------|--------------------------------------|
| Repetir manutenção    | Selecionar a O.S para manutenção     |
| Voltar                | Manutenção bem sucedida?            |
| Cancelar              | Fim do processo                     |

---

## Atividade 5 – Alterar Status no Sistema  
### Campos:
| **Campo**           | **Tipo**        | **Restrições**    |
|---------------------|----------------|-------------------|
| Status atualizado?  | Seleção única   | Obrigatório       |

### Comandos:
| **Comando**   | **Destino**      |
|--------------|------------------|
| Finalizar    | Fim do processo  |
| Voltar       | Manutenção bem sucedida? |
| Cancelar     | Fim do processo  |
