### Processo 3 – GERENCIAR CADASTRO DE TÉCNICO

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 2](/docs/images/processos/novo/gerenciarCadastroDeTecnicoBPMN.png "Modelo BPMN do Processo 2.")

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
