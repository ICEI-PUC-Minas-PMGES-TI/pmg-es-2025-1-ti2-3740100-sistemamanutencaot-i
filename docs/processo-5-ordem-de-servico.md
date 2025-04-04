### Processo 5 - ORDEM DE SERVIÇO

Este processo representa o fluxo de cadastro de um novo ordem de serviço na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do PROCESSO ORDEM DE SERVIÇO](/docs/images/processos/novo/Ordem%20de%20Serviço%20BPMN.png)


### **Atividade 1 – Consultar Cadastro**

| **Campo** | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------|-----------------|-------------------------|-------------------|
| CPF       | Caixa de texto  | Obrigatório, 11 dígitos | -                 |
| Nome      | Caixa de texto  | Somente letras          | -                 |

**Comandos:**

| **Comando**     | **Destino**                  | **Tipo**  |
|-----------------|------------------------------|-----------|
| Botão Consultar | Tela consulta de cliente     | Default   |
| Botão Pesquisar | Mostrar resultado da consulta| Default   |
| Botão Sair      | Sair da tela de consulta     | Cancel    |

---

## **2. Cadastrar Cliente**

| **Campo**  | **Tipo**        | **Restrições**               | **Valor Default** |
|------------|-----------------|------------------------------|-------------------|
| CPF        | Caixa de texto  | Obrigatório, 11 dígitos      | -                 |
| Nome       | Caixa de texto  | Somente letras               | -                 |
| Telefone   | Caixa de texto  | Entre 8 e 14 dígitos         | -                 |

**Comandos:**

| **Comando**      | **Destino**             | **Tipo**  |
|------------------|-------------------------|-----------|
| Botão Cadastrar  | Confirmar cadastro      | Default   |
| Cancelar         | Cancelar  cadastro      | Cancel    |


---

## **3. Cadastrar sintomas da máquina**
### **Campos**
| **Campo**               | **Tipo**         | **Restrições**  | **Valor Default** |
|-------------------------|----------------- |---------------- |-------------------|
| Sintomas da máquina     | Área de texto    | Obrigatório     | ---               |

### **Comandos**
| **Comando**                     | **Destino**                    | **Tipo**   |
|---------------------------------|--------------------------------|----------- |
| Salvar                          | Salva as informações           | Default    |
| Cancelar                        | Cancela a atividade            | Cancel     |

---

## **4. Delimitar prazo**
### **Campos**
| **Campo**             | **Tipo**          | **Restrições**                    | **Valor Default**        |
|---------------------- |-------------------|---------------------------------  |--------------------------|
| Prazo para diagnostico| Data              | Obrigatório                       | ---                      |

### **Comandos**
| **Comando**  | **Destino**            | **Tipo**  |
|--------------|------------------------|-----------|
| Salvar       | Salva as informações   | Default   |
| Cancelar     | Cancela a atividade atual   | Cancel   |


---

## **5. Registrar ordem de serviço**
### **Campos**
| **Campo**             | **Tipo**          | **Restrições**                  | **Valor Default**        |
|---------------------- |-------------------|---------------------------------  |--------------------------|
| Prazo Inicial da Loja | Numerico          | Obrigatório                       | ---                      |
| Valor Inicial da Loja | Numerico          | Obrigatório                       | ---                      |

### **Comandos**
| **Comando**  | **Destino**            | **Tipo**  |
|--------------|------------------------|-----------|
| Criar Ordem de Serviço| Finzaliza a criação da OS  | Default   |
| Fechar         | Fecha janela de cadastro de OS     | Cancel   |



