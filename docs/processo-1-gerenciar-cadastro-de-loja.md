---

### Processo 1 – GERENCIAR CADASTRO DE LOJA

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 1](docs/images/processos/novo/gerenciarCadastroDeLojaBPMN.png "Modelo BPMN do Processo 1.")

#### Detalhamento das Atividades

---

### **Atividade 1 – Consultar Cadastro**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CPF       | Caixa de texto  | Obrigatório, 14 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |

**Comandos:**

| **Comando**     | **Destino**                | **Tipo**   |
|-----------------|----------------------------|-----------|
| Botão Consultar | Tela consulta de cliente    | Default   |
| Botão Pesquisar | Mostrar resultado da consulta| Default   |

---

### **Atividade 2 – Atualizar Informações**

| **Campo**  | **Tipo**        | **Restrições**               | **Valor Default** |
|------------|-----------------|------------------------------|-------------------|
| CPF        | Caixa de texto  | Obrigatório, 14 dígitos      | -                 |
| Nome       | Caixa de texto  | Não possui restrição         | -                 |
| Telefone   | Caixa de texto  | Entre 8 e 14 dígitos         | -                 |

**Comandos:**

| **Comando**  | **Destino**            | **Tipo**   |
|--------------|------------------------|-----------|
| Salvar       | Confirmar Salvamento   | Default   |

---

### **Atividade 3 – Excluir Cadastro**

**Comandos:**

| **Comando**     | **Destino**             | **Tipo**   |
|-----------------|-------------------------|-----------|
| Botão Excluir   | Confirmar exclusão      | Default   |

---

### **Atividade 4 – Cadastrar Informações**

| **Campo**  | **Tipo**        | **Restrições**               | **Valor Default** |
|------------|-----------------|------------------------------|-------------------|
| CPF        | Caixa de texto  | Obrigatório, 14 dígitos      | -                 |
| Nome       | Caixa de texto  | Somente letras               | -                 |
| Telefone   | Caixa de texto  | Entre 8 e 14 dígitos         | -                 |

**Comandos:**

| **Comando**      | **Destino**             | **Tipo**   |
|------------------|-------------------------|-----------|
| Botão Cadastrar  | Confirmar cadastro      | Default   |

---

### **Atividade 5 – Criar Senha Master**

| **Campo**  | **Tipo**        | **Restrições**                                                                 | **Valor Default** |
|------------|-----------------|-------------------------------------------------------------------------------|-------------------|
| Login      | Caixa de texto  | Formato de e-mail                                                             | -                 |
| Senha      | Caixa de texto  | Mínimo 8 caracteres, pelo menos 1 caractere especial, pelo menos 1 letra maiúscula, pelo menos 1 número | - |

**Comandos:**

| **Comando**                | **Destino**            | **Tipo**   |
|----------------------------|------------------------|-----------|
| Criar Login Administrador   | Confirmar cadastro     | Default   |

---
