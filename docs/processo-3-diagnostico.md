### Processo 3 – Diagnostico

Este processo representa o fluxo de gestão de manutenção na empresa. As oportunidades de melhoria incluem a automação do registro de solicitações, a integração com um sistema de monitoramento e a notificação automática de status para os clientes.

![Modelo BPMN do Processo](/docs/images/processos/gestaoManutençãoBPMN.png "Modelo BPMN do Processo.")

#### Detalhamento das atividades
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

