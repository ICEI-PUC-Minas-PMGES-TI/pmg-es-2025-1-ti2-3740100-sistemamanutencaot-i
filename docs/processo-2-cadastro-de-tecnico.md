### Processo 2 – CADASTRO DE TÉCNICO

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 2](/docs/images/processos/cadastroDeTecnicoBPMN.png "Modelo BPMN do Processo 2.")

#### Detalhamento das atividades

**Solicitação de Informações do Técnico**

| **Campo**      | **Tipo**         | **Restrições**                | **Valor default** |
|---------------|-----------------|--------------------------------|-------------------|
| Nome         | Caixa de Texto   | Obrigatório                    |                   |
| CPF          | Caixa de Texto   | Formato numérico (###.###.###-##) |                   |
| Email        | Caixa de Texto   | Formato de e-mail              |                   |

| **Comandos**  | **Destino**                   | **Tipo** |
|--------------|------------------------------|---------|
| Enviar       | Validação das Informações    | default |

---

**Validação das Informações**

| **Campo**      | **Tipo**       | **Restrições**         | **Valor default** |
|---------------|---------------|-----------------------|-------------------|
| Status       | Seleção única  | Aprovado/Reprovado   |                   |
| Motivo       | Área de texto  | Obrigatório se reprovado |                   |

| **Comandos**  | **Destino**                      | **Tipo**   |
|--------------|---------------------------------|-----------|
| Aprovar      | Cadastro do Técnico             | default   |
| Reprovar     | Solicitação de Correção        | cancel    |

---

**Cadastro do Técnico**

| **Campo**      | **Tipo**         | **Restrições**              | **Valor default** |
|---------------|-----------------|----------------------------|-------------------|
| ID Técnico   | Número          | Gerado automaticamente     |                   |
| Data Cadastro | Data e Hora    | Automático                 |                   |

| **Comandos**  | **Destino**                   | **Tipo** |
|--------------|------------------------------|---------|
| Cadastrar    | Dar Acesso ao Quadro de Concerto | default |

---

**Dar Acesso ao Quadro de Concerto**

| **Campo**      | **Tipo**         | **Restrições**              | **Valor default** |
|---------------|-----------------|----------------------------|-------------------|
| Acesso Concedido | Seleção única  | Sim/Não                    |                   |

| **Comandos**  | **Destino**      | **Tipo** |
|--------------|-----------------|---------|
| Finalizar    | Fim do Processo | default |
