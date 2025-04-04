---

### Processo 1 – GERENCIAR CADASTRO DE LOJA

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 1](/docs/images/processos/novo/gerenciarCadastroDeLojaBPMN.png "Modelo BPMN do Processo 1.")

#### Detalhamento das Atividades

---

### **Atividade 1 – Atualizar Informações**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CNPJ      | Caixa de texto  | Obrigatório, 14 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |
| Endereço  | Caixa de texto  | Formato de endereço     | -                 |
| Gerente   | Caixa de texto  | Formato de nome         | -                 |

**Comandos:**

| **Comando**  | **Destino**            | **Tipo**  |
|--------------|------------------------|-----------|
| Salvar       | Confirmar Salvamento   | Default   |
| Editar       | Abre a pocibilidade de edição | Default   |
| Confirmar    | Confirmar edição       | Default   |
| Cancelar     | Cancelar edição        | Cancel    |
| Sair         | Sair da tela de edição | Cancel    |
---

### **Atividade 2 – Excluir Cadastro**

**Comandos:**

| **Comando**     | **Destino**             | **Tipo**   |
|-----------------|-------------------------|-----------|
| Botão Excluir   | Confirmar exclusão      | Default   |
| Cancelar        | Cancelar  exclusão      | Cancel    |

---

### **Atividade 3 – Cadastrar Informações**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CNPJ      | Caixa de texto  | Obrigatório, 14 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |
| Endereço  | Caixa de texto  | Formato de endereço     | -                 |
| Gerente   | Caixa de texto  | Formato de nome         | -                 |

**Comandos:**

| **Comando**      | **Destino**             | **Tipo**  |
|------------------|-------------------------|-----------|
| Botão Cadastrar  | Confirmar cadastro      | Default   |
| Cancelar         | Cancelar  cadastro      | Cancel    |

---

### **Atividade 4 – Criar Senha Master**

| **Campo**  | **Tipo**        | **Restrições**                                                                 | **Valor Default** |
|------------|-----------------|-------------------------------------------------------------------------------|-------------------|
| Login      | Caixa de texto  | Formato de e-mail                                                             | -                 |
| Senha      | Caixa de texto  | Mínimo 8 caracteres, pelo menos 1 caractere especial, pelo menos 1 letra maiúscula, pelo menos 1 número | - |

**Comandos:**

| **Comando**                | **Destino**            | **Tipo**  |
|----------------------------|------------------------|-----------|
| Criar Login Administrador  | Confirmar cadastro     | Default   |
| Cancelar                   | Cancelar  cadastro     | Cancel    |

---
