### Processo 3 – GERENCIAR CADASTRO DE TÉCNICO

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 3](/docs/images/processos/novo/gerenciarCadastroDeTecnicoBPMN.png "Modelo BPMN do Processo 3.")

#### Detalhamento das Atividades

---

### **Atividade 1 – Consultar Cadastro**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CPF       | Caixa de texto  | Obrigatório, 11 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |
| ID        | Caixa de texto  | Somente números         | -                 |
| Email     | Caixa de texto  | Formato de e-mail          | -                 |
| Cargo     | Caixa de texto  | Cargo existente na empresa   | -  |


**Comandos:**

| **Comando**     | **Destino**                  | **Tipo**  |
|-----------------|------------------------------|-----------|
| Botão Consultar | Tela consulta de cliente     | Default   |
| Botão Pesquisar | Mostrar resultado da consulta| Default   |
| Botão Sair      | Sair da tela de consulta     | Cancel    |

---

### **Atividade 2 – Atualizar Informações**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CPF       | Caixa de texto  | Obrigatório, 14 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |
| ID        | Caixa de texto  | Somente números         | -                 |
| Email     | Caixa de texto  | Formato de e-mail       | -                 |
| Senha     | Caixa de texto  | Mínimo 8 caracteres, pelo menos 1 caractere especial, pelo menos 1 letra maiúscula, pelo menos 1 número | - |
| Cargo     | Caixa de texto  | Cargo existente na empresa| -            |


**Comandos:**

| **Comando**  | **Destino**            | **Tipo**  |
|--------------|------------------------|-----------|
| Salvar       | Confirmar Salvamento   | Default   |
| Editar       | Abre a possibilidade de edição | Default   |
| Confirmar    | Confirmar edição       | Default   |
| Cancelar     | Cancelar edição        | Cancel    |
| Sair         | Sair da tela de edição | Cancel    |

---

### **Atividade 3 – Excluir Cadastro**

**Comandos:**

| **Comando**     | **Destino**             | **Tipo**  |
|-----------------|-------------------------|-----------|
| Botão Excluir   | Confirmar exclusão      | Default   |
| Cancelar        | Cancelar  exclusão      | Cancel    |

---

### **Atividade 4 – Cadastrar Informações**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CPF       | Caixa de texto  | Obrigatório, 14 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |
| ID        | Caixa de texto  | Somente números         | -                 |
| Email     | Caixa de texto  | Formato de e-mail       | -                 |
| Senha     | Caixa de texto  | Mínimo 8 caracteres, pelo menos 1 caractere especial, pelo menos 1 letra maiúscula, pelo menos 1 número | - |
| Cargo     | Caixa de texto   | Cargo existente na empresa   | -  |


**Comandos:**

| **Comando**      | **Destino**             | **Tipo**  |
|------------------|-------------------------|-----------|
| Botão Cadastrar  | Confirmar cadastro      | Default   |
| Cancelar         | Cancelar  cadastro      | Cancel    |

---
