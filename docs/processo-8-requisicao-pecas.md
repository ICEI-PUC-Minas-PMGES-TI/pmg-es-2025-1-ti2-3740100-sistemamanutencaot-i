### Processo 8 – Requisição de peças

O processo de manutenção incluem a seleção e o concerto da máquina pelo técnico, também possui as notificações da etapa de manutenção.

Oportunidades de melhoria incluem relatórios sobre o processo.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/requisicaoPecaBPMN.png "Modelo BPMN do Cadastro de Cliente.")

#### Detalhamento das atividades

### Atividade 1 – Preencher formulário 

| **Campo**       | **Tipo**        | **Restrições**          | **Valor default** |
|-----------------|----------------|-------------------------|-------------------|
| Peça necessária | Área de texto  | Obrigatório             | -                 |
| Quantidade      | Número         | Obrigatório, Positivo   | -                 |
| Técnico         | Área de texto  | Obrigatório             | -                 |

**Comandos:**

| **Comando**     | **Destino**               | **Tipo**   |
|---------------|--------------------------|-----------|
| Enviar requisição | Aprovar requisição| Default   |

### Atividade 2 - Aprovar requisição

| **Campo**   | **Tipo**        | **Restrições**         | **Valor default** |
|------------|----------------|----------------------|-------------------|
| Status da requisição| Seleção única | Obrigatório  | -       |

**Comandos:**

| **Comando**        | **Destino**                   | **Tipo**  |
|-------------------|--------------------------------|-----------|
| Sim               | Solicitar compra                | Default   |
| Não               | Fim do processo                | Default   |



### Atividade 3 - Solicitar compra

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Status da compra    | Seleção Única   | Obrigatório         | -                 |
| Peça                | Área de texto   | Obrigatório         | -                 |
| Quantidade          | Número          | Obrigatório, positivo| -                |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**  |
|-------------------|-----------------------------------|-----------|
| Compra feita      | Registrar no estoque              | Default   |
| Cancelar          | Fim do processo                   | Cancel    |


### Atividade 4 - Registrar no estoque

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Peça                | Seleção Única   | Obrigatório         | -                 |
| Número do pedido    | Número          | Obrigatório         | -                 |
| Quantidade          | Número          | Obrigatorio, positivo| -                |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**  |
|-------------------|-----------------------------------|-----------|
| Registrar peça    | Envio de Notificações             | Default   |


### Atividade 5 - Envio de Notificações

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Mensagem            | Área de texto   | Obrigatório         | -                 |
| Status              | Seleção Única   | Obrigatório         | -                 |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**  |
|-------------------|-----------------------------------|-----------|
| Enviar notificação de entrega| Fim do processo        | Default   |
