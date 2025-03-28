### Processo 6 – **PROCESSO FINANCEIRO**

O processo financeiro do aplicativo trata da finalização do pagamento após a conclusão de uma manutenção. O fluxo envolve a geração de um boleto, seu pagamento pelo cliente e a confirmação antes da liberação do equipamento.

Oportunidades de melhoria incluem a automatização da confirmação do pagamento e a implementação de lembretes automáticos para clientes que não concluíram a transação.

![Modelo BPMN do Processo Financeiro](/docs/images/processos/novo/processoFinanceiroBPMN.png "Modelo BPMN do Processo Financeiro.")

#### Detalhamento das atividades

---

### **Atividade 1 – Enviar Orçamento ao Cliente**

| **Campo**   | **Tipo**   | **Restrições**  | **Valor Default** |
|-------------|------------|-----------------|-------------------|
| Orçamento  | Arquivo    | -               | -                 |

**Comandos:**

| **Comando**         | **Destino**                    | **Tipo**   |
|---------------------|--------------------------------|-----------|
| Enviar             | Enviar Orçamento ao Cliente     | Default   |
| Selecionar Arquivo | Explorador de Arquivos         | Default   |

---

### **Atividade 2 – Processo de Requisição de Peças**

**Comandos:**

| **Comando**         | **Destino**                           | **Tipo**   |
|---------------------|--------------------------------------|-----------|
| Enviar             | Iniciar Processo de Requisição de Peças | Default   |

---

### **Atividade 3 – Processo de Manutenção**

**Comandos:**

| **Comando**         | **Destino**                       | **Tipo**   |
|---------------------|-----------------------------------|-----------|
| Enviar             | Iniciar Processo de Manutenção    | Default   |

---

### **Atividade 4 – Gerar Boleto**

**Comandos:**

| **Comando**         | **Destino**                      | **Tipo**   |
|---------------------|----------------------------------|-----------|
| Gerar              | Gerar o Boleto do Cliente        | Default   |

---

### **Atividade 5 – Finalizar Ordem de Serviço**

**Comandos:**

| **Comando**         | **Destino**                                              | **Tipo**   |
|---------------------|---------------------------------------------------------|-----------|
| Finalizar          | Fecha a ordem de orçamento e envia uma mensagem automática para o cliente | Default   |
