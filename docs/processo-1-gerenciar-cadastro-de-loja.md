---

### Processo 1 – CADATRO DE LOJA

Este processo representa o fluxo de cadastro de um novo técnico na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do Processo 1](/docs/images/processos/novo/gerenciarCadastroDeLojaBPMN.png "Modelo BPMN do Processo 1.")

#### Detalhamento das Atividades

---

# 📋 Gerenciar Cadastro da Loja

Este módulo permite que o Gerente/Gestor realize o gerenciamento do cadastro da loja, com funcionalidades de criação, atualização e exclusão de dados, além da geração de senha master de acesso.

## 🧭 Fluxo de Processo

O processo inicia com a verificação da existência do cadastro:

- **Se o cadastro existir:**
  - O usuário pode **atualizar informações** ou **excluir o cadastro**.
- **Se o cadastro não existir:**
  - O usuário deve **cadastrar as informações da loja** e em seguida **criar a senha master**.

![Fluxograma do processo](./caminho-da-imagem.png) <!-- Substitua pelo caminho correto da imagem -->

---

## 🛠️ Atividades

### 📝 Atividade 1 – Atualizar Informações

| Campo    | Tipo           | Restrições              | Valor Default |
|----------|----------------|-------------------------|----------------|
| CNPJ     | Caixa de texto | Obrigatório, 14 dígitos | -              |
| Nome     | Caixa de texto | Somente letras          | -              |
| Endereço | Caixa de texto | Formato de endereço     | -              |

**Comandos Disponíveis:**

| Comando   | Destino              | Tipo     |
|----------|----------------------|----------|
| Salvar   | Confirmar Salvamento | Default  |
| Editar   | Habilita edição      | Default  |
| Confirmar| Confirmar edição     | Default  |
| Cancelar | Cancelar edição      | Cancel   |
| Sair     | Sair da tela         | Cancel   |

---

### ❌ Atividade 2 – Excluir Cadastro

**Comandos Disponíveis:**

| Comando       | Destino            | Tipo     |
|---------------|--------------------|----------|
| Botão Excluir | Confirmar exclusão | Default  |
| Cancelar      | Cancelar exclusão  | Cancel   |

---

### 🏪 Atividade 3 – Cadastrar Informações

| Campo    | Tipo           | Restrições              | Valor Default |
|----------|----------------|-------------------------|----------------|
| CNPJ     | Caixa de texto | Obrigatório, 14 dígitos | -              |
| Nome     | Caixa de texto | Somente letras          | -              |
| Endereço | Caixa de texto | Formato de endereço     | -              |

**Comandos Disponíveis:**

| Comando         | Destino            | Tipo     |
|-----------------|--------------------|----------|
| Botão Cadastrar | Confirmar cadastro | Default  |
| Cancelar        | Cancelar cadastro  | Cancel   |

---

### 🔐 Atividade 4 – Criar Senha Master

| Campo  | Tipo           | Restrições                                                                 | Valor Default |
|--------|----------------|-----------------------------------------------------------------------------|----------------|
| Login  | Caixa de texto | Formato de e-mail                                                           | -              |
| Senha  | Caixa de texto | Mínimo 8 caracteres, 1 caractere especial, 1 letra maiúscula e 1 número     | -              |

**Comandos Disponíveis:**

| Comando                  | Destino            | Tipo     |
|--------------------------|--------------------|----------|
| Criar Login Administrador| Confirmar cadastro | Default  |
| Cancelar                 | Cancelar cadastro  | Cancel   |

---

## ✅ Finalização

O processo se encerra após qualquer uma das seguintes ações:

- Confirmação do cadastro com senha master.
- Atualização das informações da loja.
- Exclusão do cadastro.
