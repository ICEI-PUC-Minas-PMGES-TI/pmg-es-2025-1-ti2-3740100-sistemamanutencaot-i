### Processo 6 – **PROCESSO FINANCEIRO**

O processo financeiro do aplicativo trata da finalização do pagamento após a conclusão de uma manutenção. O fluxo envolve a geração de um boleto, seu pagamento pelo cliente e a confirmação antes da liberação do equipamento.

Oportunidades de melhoria incluem a automatização da confirmação do pagamento e a implementação de lembretes automáticos para clientes que não concluíram a transação.

![Modelo BPMN do Processo Financeiro](/docs/images/processos/novo/processoFinanceiroBPMN.png "Modelo BPMN do Processo Financeiro.")

#### Detalhamento das atividades

---

### **Atividade 1 – Enviar Orçamento ao Cliente**


| **Campo**   | **Tipo**   | **Restrições**  | **Valor Default** |
|-------------|------------|-----------------|-------------------|
| Peças necessarias| Caixa de texto | -      | -                 |
| Quantidade de peças| Número | -         | -                 |
| Valor       | Número     | -               | -                 |
| Orçamento   | Arquivo    | -               | -                 |

**Comandos:**

| **Comando**         | **Destino**                    | **Tipo**  |
|---------------------|--------------------------------|-----------|
| Enviar              | Enviar Orçamento ao Cliente e atualiza valor da OS no sistema     | Default   |
| Selecionar Arquivo  | Explorador de Arquivos          | Default   |
| Cancelar            | Cancela o envio do orçamento    | Cancel    |

---

### **Atividade 2 – Processo de Requisição de Peças**

| **Campo**   | **Tipo**   | **Restrições**  | **Valor Default** |
|-------------|------------|-----------------|-------------------|
| Peças necessarias| Caixa de texto | -      | -                 |
| Quantidade de peças| Número | -            | -                 |


**Comandos:**

| **Comando**         | **Destino**                           | **Tipo**   |
|---------------------|---------------------------------------|------------|
| Enviar             | Iniciar Processo de Requisição de Peças| Default    |
| Cancelar           | cancela o inicio do processo           | Cancel     |

---

### **Atividade 3 – Processo de Manutenção**

**Comandos:**

| **Comando**         | **Destino**                       | **Tipo**   |
|---------------------|-----------------------------------|------------|
| Iniciar             | Inicia processo de manutenção e manda solicitação automatica para o cliente   | Default   |
| Cancelar            | Cancela o inicio do processo      | Cancel     |


---

### **Atividade 4 – Gerar Boleto**

| **Campo**   | **Tipo**   | **Restrições**  | **Valor Default** |
|-------------|------------|-----------------|-------------------|
| Valor total | Número     | -               | -                 |

**Comandos:**

| **Comando**         | **Destino**                      | **Tipo**   |
|---------------------|----------------------------------|------------|
| Gerar               | Gerar o Boleto do Cliente        | Default     |
| Confirmar informações| confirma as informaçôes do boleto | Default     |
| Cancelar             | Cancela a criação do boleto        | Cancel    |

---

### **Atividade 5 – Finalizar Ordem de Serviço**

**Comandos:**

| **Comando**         | **Destino**                                              | **Tipo**   |
|---------------------|---------------------------------------------------------|-----------|
| Finalizar           | Fecha a ordem de orçamento e envia uma mensagem automática para o cliente | Default   |
| Cancelar             | Cancela a finzalização da OS       | Cancel    |
