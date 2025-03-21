### Processo 1 – CADASTRO DE LOJA

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 0](/docs/images/processos/cadastroDeLojaBPMN.png "Modelo BPMN do Processo 0.")

#### Detalhamento das atividades

### Atividade 1 – Cadastrar CNPJ da Loja

| **Campo**       | **Tipo**        | **Restrições**              | **Valor default** |
|-----------------|----------------|-----------------------------|-------------------|
| CNPJ           | Número         | Obrigatório, 14 dígitos    | -                 |

**Comandos:**

| **Comando**         | **Destino**               | **Tipo**   |
|--------------------|--------------------------|-----------|
| CNPJ cadastrado   | Validar CNPJ              | Default   |

---

### Atividade 2 – Validar CNPJ

| **Campo**       | **Tipo**        | **Restrições**                 | **Valor default** |
|-----------------|----------------|---------------------------------|-------------------|
| CNPJ           | Número         | Deve ser válido conforme Receita Federal | - |

**Comandos:**

| **Comando**        | **Destino**                      | **Tipo**   |
|-------------------|---------------------------------|-----------|
| CNPJ válido      | Cadastrar nome da loja         | Default   |
| CNPJ inválido    | Retornar para cadastro de CNPJ | Default   |

---

### Atividade 3 – Cadastrar Nome da Loja

| **Campo**    | **Tipo**        | **Restrições**       | **Valor default** |
|-------------|----------------|---------------------|-------------------|
| Nome da Loja | Caixa de Texto | Obrigatório        | -                 |

**Comandos:**

| **Comando**         | **Destino**               | **Tipo**   |
|--------------------|--------------------------|-----------|
| Nome cadastrado   | Criar senha Master        | Default   |

---

### Atividade 4 – Criar Senha Master

| **Campo**    | **Tipo**        | **Restrições**         | **Valor default** |
|-------------|----------------|-----------------------|-------------------|
| Senha       | Senha          | Obrigatório, mínimo 8 caracteres | - |

**Comandos:**

| **Comando**         | **Destino**               | **Tipo**   |
|--------------------|--------------------------|-----------|
| Senha cadastrada  | Confirmar cadastro       | Default   |

---

### Atividade 5 – Confirmar Cadastro

**Comandos:**

| **Comando**         | **Destino**                      | **Tipo**   |
|--------------------|---------------------------------|-----------|
| Cadastro confirmado | Registrar informações no banco de dados | Default   |

---

### Atividade 6 – Registrar Informações no Banco de Dados

| **Campo**       | **Tipo**        | **Restrições**    | **Valor default** |
|-----------------|----------------|------------------|-------------------|
| Dados da Loja  | Conjunto de dados | Obrigatório    | -                 |

**Comandos:**

| **Comando**           | **Destino**                     | **Tipo**   |
|----------------------|------------------------------|-----------|
| Informações registradas | Liberar acesso ao sistema | Default   |

---

### Atividade 7 – Liberar Acesso ao Sistema

| **Campo**       | **Tipo**        | **Restrições**    | **Valor default** |
|-----------------|----------------|------------------|-------------------|
| Acesso          | Boolean        | Obrigatório      | -                 |

**Comandos:**

| **Comando**         | **Destino**                    | **Tipo**   |
|--------------------|------------------------------|-----------|
| Acesso liberado   | Notificar gerente

---

### Atividade 8 – Notificar o gerente sobre o acesso

| **Campo**       | **Tipo**        | **Restrições**    | **Valor default** |
|-----------------|----------------|------------------|-------------------|
| Notificação     | Mensagem      | Obrigatório      | -                 |

**Comandos:**

| **Comando**         | **Destino**                    | **Tipo**   |
|--------------------|------------------------------|-----------|
| Notificação enviada   | Fim do processo           | Default   |
