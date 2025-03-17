### Processo 7 – Manutenção

O processo de manutenção incluem a seleção e o concerto da máquina pelo técnico, também possui as notificações da etapa de manutenção.

Oportunidades de melhoria incluem relatórios sobre o processo.

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
| Inicio da manutenção| Analisar diagnóstico         | Default   |
| Finalização da manutenção| Fim do processo         | Default   |



### Atividade 3 - Analisar diagnóstico

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Peça necessária     | Área de texto   | Obrigatório         | -                 |
| Descrição do problema| Área de texto   | Obrigatório         | -                 |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**  |
|-------------------|-----------------------------------|-----------|
| Peça no estoque   | Executar concerto                 | Default   |
| Peça em falta     | Processo de requisição de peças   | Default   |


### Atividade 4 - Executar concerto

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Computador concertado| Seleção Única   | Obrigatório         | -                 |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**  |
|-------------------|-----------------------------------|-----------|
| Sim               | Envio de Notificações             | Default   |
| Não               | Processo de diagnóstico           | Default   |
