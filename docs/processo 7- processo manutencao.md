### Processo 7 – Manutenção

O processo de manutenção incluem a seleção e o concerto da máquina pelo técnico, também possui as notificações da etapa de manutenção.

Oportunidades de melhoria incluem a automatização da validação de dados e a integração com bancos de dados externos para preenchimento automático de informações.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/manutencaoBPMN.png "Modelo BPMN do Cadastro de Cliente.")

#### Detalhamento das atividades

### Atividade 1 – Selecionar a máquina 

| **Campo**       | **Tipo**        | **Restrições**          | **Valor default** |
|-----------------|----------------|-------------------------|-------------------|
| Máquinas        | Seleção múltipla| Obrigatório, selecionar ao menos uma | -                 |

**Comandos:**

| **Comando**     | **Destino**               | **Tipo**   |
|---------------|--------------------------|-----------|
| Selecionar máquina | Envio de notificações| Default   |
| Cancelar | Fim do Processo| Cancel   |

### Atividade 2 – Envio de notificações

| **Campo**   | **Tipo**        | **Restrições**         | **Valor default** |
|------------|----------------|----------------------|-------------------|
| Status do serviço    | Seleção única | Obrigatório           | -       |
| Status da notificação| Caixa de texto| -           | -                 |


**Comandos:**

| **Comando**        | **Destino**                   | **Tipo**  |
|-------------------|--------------------------------|-----------|
| Atualizar status | Analisar diagnóstico            | Default   |

### Atividade 3 – Validar informações

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Dados corretos     | Seleção única   | Sim / Não         | -                 |

**Comandos:**

| **Comando**        | **Destino**                          | **Tipo**   |
|-------------------|-----------------------------------|-----------|
| Sim              | Cadastro concluído                | Default   |
