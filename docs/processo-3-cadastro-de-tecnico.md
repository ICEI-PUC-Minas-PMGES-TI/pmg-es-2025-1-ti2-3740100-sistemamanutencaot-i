### Processo 3 – CADASTRO DE TÉCNICO

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 2](/docs/images/processos/novo/cadastroDeTecnicoBPMN.png "Modelo BPMN do Processo 2.")

#### Detalhamento das atividades


### Atividade 1 – Solicitar CPF do técnico

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| CPF        | Número   | Obrigatório, 11 dígitos | - |

**Comandos:**

| **Comando**      | **Destino**     | **Tipo**   |
|-----------------|----------------|-----------|
| Informar CPF    | Validar CPF     | Default   |

---

### Atividade 2 – Validar CPF

| **Campo**       | **Tipo**        | **Restrições**  | **Valor default**  |
|----------------|----------------|----------------|-------------------|
| CPF válido     | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**                  | **Tipo**   |
|------------|------------------------------|-----------|
| Sim        | Solicitar Nome do técnico    | Default   |
| Não        | Solicitar CPF novamente      | Default   |

---

### Atividade 3 – Solicitar Nome do técnico

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Nome       | Caixa de Texto | Obrigatório    | - |

**Comandos:**

| **Comando**     | **Destino**                  | **Tipo**   |
|----------------|----------------------------|-----------|
| Informar Nome  | Cadastrar Nome do técnico  | Default   |

---

### Atividade 4 – Cadastrar Nome do cliente

| **Campo**         | **Tipo**        | **Restrições**  | **Valor default**  |
|------------------|----------------|----------------|-------------------|
| Nome cadastrado | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**                    | **Tipo**   |
|------------|--------------------------------|-----------|
| Sim        | Solicitar telefone do técnico  | Default   |

---

### Atividade 5 – Solicitar telefone do técnico

| **Campo**  | **Tipo**  | **Restrições**  | **Valor default**  |
|------------|----------|----------------|-------------------|
| Telefone   | Número   | Obrigatório    | - |

**Comandos:**

| **Comando**       | **Destino**           | **Tipo**   |
|------------------|----------------------|-----------|
| Informar Telefone | Validar telefone     | Default   |

---

### Atividade 6 – Validar telefone

| **Campo**         | **Tipo**        | **Restrições**  | **Valor default**  |
|------------------|----------------|----------------|-------------------|
| Telefone válido | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**              | **Tipo**   |
|------------|--------------------------|-----------|
| Sim        | Cadastrar Cargo do técnico       | Default   |
| Não        | Solicitar telefone novamente | Default   |

---

### Atividade 7 – Cadastrar Cargo do técnico

| **Campo**         | **Tipo**        | **Restrições**  | **Valor default**  |
|------------------|----------------|----------------|-------------------|
| Cargo cadastrado | Seleção única   | Sim / Não     | - |

**Comandos:**

| **Comando** | **Destino**                    | **Tipo**   |
|------------|--------------------------------|-----------|
| Sim        | Confirmar Cadastro  | Default   | 

---

### Atividade 8 – Confirmar cadastro

| **Campo**  | **Tipo**        | **Restrições**  | **Valor default**  |
|------------|----------------|----------------|-------------------|
| Cadastro concluído | Seleção única | Sim | - |

**Comandos:**

| **Comando** | **Destino**        | **Tipo**   |
|------------|--------------------|-----------|
| Sim        | Fim do Processo    | Default   |
