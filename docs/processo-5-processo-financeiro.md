### 3.3.1 Processo 5 – PROCESSO FINANCEIRO

O processo financeiro do aplicativo trata da finalização do pagamento após a conclusão de uma manutenção. O fluxo envolve a geração de um boleto, seu pagamento pelo cliente e a confirmação antes da liberação do equipamento.

Oportunidades de melhoria incluem a automatização da confirmação do pagamento e a implementação de lembretes automáticos para clientes que não concluíram a transação.

![Modelo BPMN do Processo Financeiro](/docs/images/images/processoFinanceiroBPMN.png "Modelo BPMN do Processo Financeiro.")

#### Detalhamento das atividades

### Atividade 1 – Solicitar a geração de um boleto

| **Campo**          | **Tipo**        | **Restrições**       | **Valor default** |
|--------------------|----------------|----------------------|-------------------|
| Valor do orçamento | Número         | Somente positivo     | -                 |
| ID da manutenção  | Número         | Obrigatório         | -                 |

**Comandos:**

| **Comando**     | **Destino**                     | **Tipo**   |
|---------------|--------------------------------|-----------|
| Gerar boleto  | Encaminhar boleto ao cliente | Default   |

### Atividade 2 – Pagar o boleto

| **Campo**         | **Tipo**        | **Restrições**       | **Valor default** |
|------------------|----------------|----------------------|-------------------|
| Código do boleto | Caixa de Texto | Obrigatório         | -                 |
| Data de pagamento | Data         | Obrigatório         | -                 |

**Comandos:**

| **Comando**        | **Destino**                | **Tipo**   |
|-------------------|---------------------------|-----------|
| Confirmar pagamento | Verificação de pagamento | Default   |

### Atividade 3 – Confirmar pagamento

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Status do pagamento | Seleção única   | Pago / Não pago    | -                 |

**Comandos:**

| **Comando**                | **Destino**                         | **Tipo**   |
|----------------------------|-----------------------------------|-----------|
| Pagamento confirmado       | Liberar equipamento para retirada | Default   |
| Pagamento não confirmado   | Contato com cliente               | Default   |

Esse processo garante a segurança financeira antes da liberação do equipamento, minimizando riscos de inadimplência e aumentando a eficiência do fluxo de pagamentos.
