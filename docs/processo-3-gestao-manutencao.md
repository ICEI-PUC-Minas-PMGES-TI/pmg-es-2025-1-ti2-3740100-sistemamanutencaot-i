### Processo 3 – GESTÃO DE MANUTENÇÃO

Este processo representa o fluxo de gestão de manutenção na empresa. As oportunidades de melhoria incluem a automação do registro de solicitações, a integração com um sistema de monitoramento e a notificação automática de status para os clientes.

![Modelo BPMN do Processo](/docs/images/processos/gestaoManutençãoBPMN.png "Modelo BPMN do Processo.")

#### Detalhamento das atividades

**Abertura da Solicitação de Manutenção**

| **Campo**      | **Tipo**         | **Restrições**                | **Valor default** |
|---------------|-----------------|--------------------------------|-------------------|
| ID Solicitação | Número         | Gerado automaticamente        |                   |
| Nome Cliente  | Caixa de Texto  | Obrigatório                   |                   |
| Contato       | Caixa de Texto  | Formato numérico ( (##) #####-#### ) |                   |
| Descrição     | Área de Texto   | Obrigatório                   |                   |

| **Comandos**  | **Destino**                   | **Tipo** |
|--------------|------------------------------|---------|
| Enviar       | Avaliação da Solicitação     | default |

---

**Avaliação da Solicitação**

| **Campo**      | **Tipo**       | **Restrições**         | **Valor default** |
|---------------|---------------|-----------------------|-------------------|
| Status       | Seleção única  | Aprovado/Reprovado   |                   |
| Motivo       | Área de texto  | Obrigatório se reprovado |                   |

| **Comandos**  | **Destino**                      | **Tipo**   |
|--------------|---------------------------------|-----------|
| Aprovar      | Planejamento da Manutenção     | default   |
| Reprovar     | Solicitação de Ajustes         | cancel    |

---

**Planejamento da Manutenção**

| **Campo**      | **Tipo**         | **Restrições**              | **Valor default** |
|---------------|-----------------|----------------------------|-------------------|
| ID Técnico   | Número          | Seleção de técnico disponível |                   |
| Data Agendada | Data e Hora    | Obrigatório                 |                   |
| Prioridade   | Seleção única  | Alta/Média/Baixa           |                   |

| **Comandos**  | **Destino**                   | **Tipo** |
|--------------|------------------------------|---------|
| Confirmar    | Execução da Manutenção        | default |

---

**Execução da Manutenção**

| **Campo**      | **Tipo**         | **Restrições**              | **Valor default** |
|---------------|-----------------|----------------------------|-------------------|
| Status Execução | Seleção única  | Concluído/Pendente/Cancelado |                   |
| Observações   | Área de Texto   | Opcional                     |                   |

| **Comandos**  | **Destino**      | **Tipo** |
|--------------|-----------------|---------|
| Finalizar    | Fim do Processo | default |

