### Processo 1 – CADASTRO DE CLIENTE

O processo de cadastro de cliente verifica se o cliente já possui um cadastro. Caso contrário, solicita as informações necessárias e realiza o registro no sistema.

Oportunidades de melhoria incluem a automatização da validação de dados e a integração com bancos de dados externos para preenchimento automático de informações.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/cadastroDeClienteBPMN.png "Modelo BPMN do Cadastro de Cliente.")

#### Detalhamento das atividades

### Atividade 1 – Verificar a existência de um cadastro

| **Campo**       | **Tipo**        | **Restrições**          | **Valor default** |
|-----------------|----------------|-------------------------|-------------------|
| CPF            | Número         | Obrigatório, 11 dígitos | -                 |

**Comandos:**

| **Comando**     | **Destino**               | **Tipo**   |
|---------------|--------------------------|-----------|
| Conta cadastrada | Fim do Processo        | Default   |
| Conta não cadastrada | Solicitar informações | Default   |

### Atividade 2 – Solicitar as informações do cliente

| **Campo**   | **Tipo**        | **Restrições**         | **Valor default** |
|------------|----------------|----------------------|-------------------|
| Nome       | Caixa de Texto | Obrigatório         | -                 |
| Idade      | Número        | Obrigatório, >18     | -                 |
| CPF        | Número        | Obrigatório, 11 dígitos | -                 |
| Endereço   | Área de Texto | Obrigatório         | -                 |
| Contato    | Número        | Obrigatório         | -                 |
| Email      | Caixa de Texto | Obrigatório, formato válido | -                 |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**   |
|-------------------|--------------------------------|-----------|
| Informações fornecidas | Validação das informações  | Default   |

### Atividade 3 – Validar informações

| **Campo**            | **Tipo**         | **Restrições**      | **Valor default** |
|---------------------|-----------------|---------------------|-------------------|
| Dados corretos     | Seleção única   | Sim / Não         | -                 |

**Comandos:**

| **Comando**        | **Destino**                          | **Tipo**   |
|-------------------|-----------------------------------|-----------|
| Sim              | Cadastro concluído                | Default   |
| Não             | Solicitar novas informações       | Default   |
