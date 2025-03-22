### Processo 2 – GERENCIAR CADASTRO DE CLIENTE

O processo de cadastro de cliente verifica se o cliente já possui um cadastro. Caso contrário, solicita as informações necessárias e realiza o registro no sistema.

Oportunidades de melhoria incluem a automatização da validação de dados e a integração com bancos de dados externos para preenchimento automático de informações.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/novo/gerenciarCadastroDeClienteBPMN.png "Modelo BPMN do Cadastro de Cliente.")

#### Detalhamento das atividades

### Atividade 1 – Verificar a existência de um cadastro

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| CPF        | Número   | Obrigatório, 11 dígitos | - |

**Comandos:**

| **Comando**           | **Destino**                 | **Tipo**   |
|----------------------|---------------------------|-----------|
| Conta cadastrada    | Fim do Processo            | Default   |
| Conta não cadastrada | Solicitar CPF do cliente  | Default   |

---

### Atividade 2 – Solicitar CPF do cliente

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| CPF        | Número   | Obrigatório, 11 dígitos | - |

**Comandos:**

| **Comando**      | **Destino**     | **Tipo**   |
|-----------------|----------------|-----------|
| Informar CPF    | Validar CPF     | Default   |

---

### Atividade 3 – Validar CPF

| **Campo**       | **Tipo**        | **Restrições**  | **Valor default**  |
|----------------|----------------|----------------|-------------------|
| CPF válido     | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**                  | **Tipo**   |
|------------|------------------------------|-----------|
| Sim        | Solicitar Nome do cliente    | Default   |
| Não        | Solicitar CPF novamente      | Default   |

---

### Atividade 4 – Solicitar Nome do cliente

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Nome       | Caixa de Texto | Obrigatório    | - |

**Comandos:**

| **Comando**     | **Destino**                  | **Tipo**   |
|----------------|----------------------------|-----------|
| Informar Nome  | Cadastrar Nome do cliente  | Default   |

---

### Atividade 5 – Cadastrar Nome do cliente

| **Campo**         | **Tipo**        | **Restrições**  | **Valor default**  |
|------------------|----------------|----------------|-------------------|
| Nome cadastrado | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**                    | **Tipo**   |
|------------|--------------------------------|-----------|
| Sim        | Solicitar telefone do cliente  | Default   |

---

### Atividade 6 – Solicitar telefone do cliente

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Telefone   | Número   | Obrigatório    | - |

**Comandos:**

| **Comando**       | **Destino**           | **Tipo**   |
|------------------|----------------------|-----------|
| Informar Telefone | Validar telefone     | Default   |

---

### Atividade 7 – Validar telefone

| **Campo**         | **Tipo**        | **Restrições**  | **Valor default**  |
|------------------|----------------|----------------|-------------------|
| Telefone válido | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**              | **Tipo**   |
|------------|--------------------------|-----------|
| Sim        | Confirmar cadastro        | Default   |
| Não        | Solicitar telefone novamente | Default   |

---

### Atividade 8 – Confirmar cadastro

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Cadastro concluído | Seleção única | Sim | - |

**Comandos:**

| **Comando** | **Destino**        | **Tipo**   |
|------------|--------------------|-----------|
| Sim        | Fim do Processo    | Default   |
