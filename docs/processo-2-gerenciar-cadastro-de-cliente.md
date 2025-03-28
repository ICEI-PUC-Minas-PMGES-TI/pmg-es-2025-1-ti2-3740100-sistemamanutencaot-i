
### Processo 2 – GERENCIAR CADASTRO DE CLIENTE

O processo de cadastro de cliente verifica se o cliente já possui um cadastro. Caso contrário, solicita as informações necessárias e realiza o registro no sistema.

Oportunidades de melhoria incluem a automatização da validação de dados e a integração com bancos de dados externos para preenchimento automático de informações.

![Modelo BPMN do Cadastro de Cliente](/docs/images/processos/novo/gerenciarCadastroDeClienteBPMN.png "Modelo BPMN do Cadastro de Cliente.")

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
| Editar       | Abre a pocibilidade de edição | Default   |
| Confirmar       | Confirmar edição  | Default   |

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
