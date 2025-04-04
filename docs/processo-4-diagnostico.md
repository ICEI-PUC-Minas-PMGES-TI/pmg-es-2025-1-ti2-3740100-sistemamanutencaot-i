### Processo 4 – Diagnostico

Este processo representa o fluxo de gestão de manutenção na empresa. As oportunidades de melhoria incluem a automação do registro de solicitações, a integração com um sistema de monitoramento e a notificação automática de status para os clientes.

![Modelo BPMN do Processo](/docs/images/processos/novo/Diagnostico%20BPMN.png)
#### Detalhamento das atividades

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_


### **Atividade 1 – Identificar o Problema**

| **Campo**             | **Tipo** | **Restrições** | **Valor default** |
|----------------------|---------|--------------|----------------|
| Descrição do problema | Área de Texto   | Obrigatório  | -              |

**Comandos:**

| **Comando**            | **Destino**                                | **Tipo**  |
|------------------------|-------------------------------------------|-----------|
| Confirmar | Confirmar problema da máquina | Default   |

---

### **Atividade 2 – Listar Peças Necessárias para Manutenção**

| **Campo**            | **Tipo** | **Restrições** | **Valor default** |
|---------------------|---------|--------------|----------------|
| Peças necessárias  | Lista   | Obrigatório  | -              |
| Quantidade         | Número  | Obrigatório  | -              |

**Comandos:**

| **Comando**        | **Destino**                         | **Tipo**  |
|-------------------|------------------------------------|-----------|
| Confirmar         | Confirmar listagem   | Default   |

---

### **Atividade 3 – Definir Prazo para a Manutenção**

| **Campo**       | **Tipo** | **Restrições** | **Valor default** |
|--------------|---------|--------------|----------------|
| Prazo estimado | Data    | Obrigatório  | -              |

**Comandos:**

| **Comando**      | **Destino**                           | **Tipo**  |
|-----------------|--------------------------------------|-----------|
| Prazo definido | Confirma o prazo e enviar mensagem ao cliente com status | Default   |

---

### **Atividade 4 – Enviar Mensagem ao Cliente com Status**

| **Campo**          | **Tipo** | **Restrições** | **Valor default** |
|-------------------|---------|--------------|----------------|
| Mensagem enviada | Texto   | Obrigatório  | -              |

**Comandos:**

| **Comando**          | **Destino**          | **Tipo**  |
|---------------------|---------------------|-----------|
| Mensagem confirmada | Fim do Processo     | Default   |

---
# Processo 4 - DIAGNÓSTICO

Este processo descreve o fluxo de diagnóstico técnico para identificar as peças necessárias para manutenção e a aprovação da compra dessas peças.

---

## Detalhamento das Atividades

### 1. Início do Diagnóstico
#### Descrição
Inicia o processo de diagnóstico técnico.

#### Botões de Entrada e Saída
| **Botão**               | **Tipo**        | **Ação**                                      | **Destino**                  |
|-------------------------|-----------------|-----------------------------------------------|------------------------------|
| Iniciar Diagnóstico     | Botão Primário  | Inicia o processo de diagnóstico             | Listar Peças Necessárias     |

---

### 2. Listar Peças Necessárias para Manutenção
#### Descrição
O técnico identifica e lista as peças necessárias para a manutenção.

#### Botões de Entrada e Saída
| **Botão**               | **Tipo**        | **Ação**                                      | **Destino**                  |
|-------------------------|-----------------|-----------------------------------------------|------------------------------|
| Listar Peças            | Botão Primário  | Salva a lista de peças necessárias           | Aprovar Compra das Peças     |

---

### 3. Aprovar Compra das Peças
#### Descrição
O gestor avalia e aprova a compra das peças listadas.

#### Botões de Entrada e Saída
| **Botão**               | **Tipo**        | **Ação**                                      | **Destino**                  |
|-------------------------|-----------------|-----------------------------------------------|------------------------------|
| Aprovar Compra          | Botão Primário  | Aprova a compra das peças                     | Fim                          |
| Rejeitar Compra         | Botão Secundário| Rejeita a compra das peças                    | Fim                          |

---

### 4. Fim do Processo
#### Descrição
Finaliza o processo de diagnóstico e aprovação de compra.

#### Botões de Entrada e Saída
| **Botão**               | **Tipo**        | **Ação**                                      | **Destino**                  |
|-------------------------|-----------------|-----------------------------------------------|------------------------------|
| Finalizar               | Botão Primário  | Encerra o processo                            | ---                          |

---

## Considerações Finais
Este processo visa garantir a eficiência na identificação e aprovação das peças necessárias para manutenção, promovendo a transparência e a agilidade na execução das atividades. A melhoria nos tipos de botões de entrada e saída facilita a navegação e a execução das etapas, proporcionando uma experiência mais intuitiva ao usuário.
