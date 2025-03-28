### Processo 4 – Diagnostico

Este processo representa o fluxo de gestão de manutenção na empresa. As oportunidades de melhoria incluem a automação do registro de solicitações, a integração com um sistema de monitoramento e a notificação automática de status para os clientes.

![Modelo BPMN do Processo](/docs/images/processos/novo/DiagnosticoBPMN.png)
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
| Descrição do problema | Texto   | Obrigatório  | -              |

**Comandos:**

| **Comando**            | **Destino**                                | **Tipo**  |
|------------------------|-------------------------------------------|-----------|
| Problema identificado | Listar peças necessárias para manutenção | Default   |

---

### **Atividade 2 – Listar Peças Necessárias para Manutenção**

| **Campo**            | **Tipo** | **Restrições** | **Valor default** |
|---------------------|---------|--------------|----------------|
| Peças necessárias  | Lista   | Obrigatório  | -              |

**Comandos:**

| **Comando**        | **Destino**                         | **Tipo**  |
|-------------------|------------------------------------|-----------|
| Lista concluída  | Definir prazo para a manutenção   | Default   |

---

### **Atividade 3 – Definir Prazo para a Manutenção**

| **Campo**       | **Tipo** | **Restrições** | **Valor default** |
|--------------|---------|--------------|----------------|
| Prazo estimado | Data    | Obrigatório  | -              |

**Comandos:**

| **Comando**      | **Destino**                           | **Tipo**  |
|-----------------|--------------------------------------|-----------|
| Prazo definido | Enviar mensagem ao cliente com status | Default   |

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
# Processo 4 – Diagnóstico

Este processo representa o fluxo de gestão de manutenção na empresa.  
As oportunidades de melhoria incluem:
- Automação do registro de solicitações.
- Integração com um sistema de monitoramento.
- Notificação automática de status para os clientes.

---

## Atividade 1 – Identificar o Problema

### Campos:
- **Descrição do problema**  
  - Tipo: Texto  
  - Restrições: Obrigatório  
  - Valor default: -

### Comandos:
- **Problema identificado**  
  - Destino: Listar peças necessárias para manutenção  
  - Tipo: Default

---

## Atividade 2 – Listar Peças Necessárias para Manutenção

### Campos:
- **Peças necessárias**  
  - Tipo: Lista  
  - Restrições: Obrigatório  
  - Valor default: -

### Comandos:
- **Lista concluída**  
  - Destino: Definir prazo para a manutenção  
  - Tipo: Default

---

## Atividade 3 – Definir Prazo para a Manutenção

### Campos:
- **Prazo estimado**  
  - Tipo: Data  
  - Restrições: Obrigatório  
  - Valor default: -

### Comandos:
- **Prazo definido**  
  - Destino: Enviar mensagem ao cliente com status  
  - Tipo: Default

---

## Atividade 4 – Enviar Mensagem ao Cliente com Status

### Campos:
- **Mensagem enviada**  
  - Tipo: Texto  
  - Restrições: Obrigatório  
  - Valor default: -

### Comandos:
- **Mensagem confirmada**  
  - Destino: Fim do Processo  
  - Tipo: Default

---

## Fluxo Resumido:

1. **Identificar o problema** → Listar peças necessárias para manutenção.
2. **Listar peças necessárias** → Definir prazo para a manutenção.
3. **Definir prazo** → Enviar mensagem ao cliente com status.
4. **Enviar mensagem** → Fim do processo.

