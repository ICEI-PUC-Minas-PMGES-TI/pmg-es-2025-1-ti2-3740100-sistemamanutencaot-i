### Processo 5 – PROCESSO FINANCEIRO

O processo financeiro do aplicativo trata da finalização do pagamento após a conclusão de uma manutenção. O fluxo envolve a geração de um boleto, seu pagamento pelo cliente e a confirmação antes da liberação do equipamento.

Oportunidades de melhoria incluem a automatização da confirmação do pagamento e a implementação de lembretes automáticos para clientes que não concluíram a transação.

![Modelo BPMN do Processo Financeiro](/docs/images/processos/processoFinanceiroBPMN.png "Modelo BPMN do Processo Financeiro.")

#### Detalhamento das atividades

### Atividade 1 – Diagnóstico Concluído

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Diagnóstico | Texto   | Obrigatório    | - |

**Comandos:**

| **Comando**       | **Destino**           | **Tipo**   |
|------------------|----------------------|-----------|
| Prosseguir      | Orçar Custos         | Default   |

---

### Atividade 2 – Orçar Custos

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Valor estimado | Número | Obrigatório    | - |

**Comandos:**

| **Comando**       | **Destino**                   | **Tipo**   |
|------------------|------------------------------|-----------|
| Orçamento pronto | Enviar Orçamento ao Cliente  | Default   |

---

### Atividade 3 – Enviar Orçamento ao Cliente

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Orçamento  | Documento | Obrigatório    | - |

**Comandos:**

| **Comando**           | **Destino**            | **Tipo**   |
|----------------------|-----------------------|-----------|
| Orçamento enviado   | Analisar Orçamento    | Default   |

---

### Atividade 4 – Analisar Orçamento

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Aprovação  | Seleção Única   | Sim / Não     | - |

**Comandos:**

| **Comando**         | **Destino**                 | **Tipo**   |
|--------------------|---------------------------|-----------|
| Sim               | Verificar estoque          | Default   |
| Não               | Fim do Processo            | Default   |

---

### Atividade 5 – Verificar Estoque

| **Campo**    | **Tipo**      | **Restrições**  | **Valor default**  |
|--------------|--------------|----------------|-------------------|
| Peças em estoque | Seleção Única | Sim / Não     | - |

**Comandos:**

| **Comando**      | **Destino**                     | **Tipo**   |
|-----------------|--------------------------------|-----------|
| Sim            | Iniciar Processo de Manutenção | Default   |
| Não            | Processo de Requisição de Peças | Default   |

---

### Atividade 6 – Processo de Requisição de Peças

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Prazo de entrega | Data   | Obrigatório    | - |

**Comandos:**

| **Comando**    | **Destino**                  | **Tipo**   |
|--------------|-----------------------------|-----------|
| Peças recebidas | Iniciar Processo de Manutenção  | Default   |

---

### Atividade 7 – Iniciar Processo de Manutenção

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Status     | Texto   | Obrigatório    | Em andamento |

**Comandos:**

| **Comando**         | **Destino**                  | **Tipo**   |
|--------------------|----------------------------|-----------|
| Manutenção concluída | Conferir Orçamento        | Default   |

---

### Atividade 8 – Conferir Orçamento

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Valor Final | Número        | Obrigatório    | - |

**Comandos:**

| **Comando**         | **Destino**                         | **Tipo**   |
|--------------------|-----------------------------------|-----------|
| Orçamento conferido | Solicitar forma de pagamento  | Default   |

---

### Atividade 9 – Solicitar Forma de Pagamento

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Método    | Seleção Única   | Cartão / Boleto / Pix | - |

**Comandos:**

| **Comando**           | **Destino**                          | **Tipo**   |
|----------------------|------------------------------------|-----------|
| Forma de pagamento informada | Solicitar link de pagamento | Default   |

---

### Atividade 10 – Gerar Link de Pagamento

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Link      | URL      | Obrigatório    | - |

**Comandos:**

| **Comando**      | **Destino**             | **Tipo**   |
|-----------------|-----------------------|-----------|
| Link gerado    | Encaminhar ao Cliente  | Default   |

---

### Atividade 11 – Encaminhar Link ao Cliente

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Link      | URL      | Obrigatório    | - |

**Comandos:**

| **Comando**      | **Destino**                  | **Tipo**   |
|-----------------|-----------------------------|-----------|
| Link recebido  | Pagamento Realizado         | Default   |

---

### Atividade 12 – Pagamento Realizado

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Status    | Seleção Única | Pago / Pendente | - |

**Comandos:**

| **Comando**       | **Destino**                                   | **Tipo**   |
|------------------|---------------------------------------------|-----------|
| Pagamento confirmado | Notificar disponibilidade para retirada  | Default   |

---

### Atividade 13 – Notificar Cliente sobre Retirada

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Mensagem  | Texto   | Obrigatório    | - |

**Comandos:**

| **Comando**       | **Destino**                  | **Tipo**   |
|------------------|----------------------------|-----------|
| Notificação enviada | Cliente retira computador | Default   |

---

### Atividade 14 – Cliente Retira o Computador

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Status    | Seleção Única | Retirado / Não Retirado | - |

**Comandos:**

| **Comando**  | **Destino** | **Tipo**   |
|-------------|-----------|-----------|
| Computador retirado | Fim do Processo | Default   |


