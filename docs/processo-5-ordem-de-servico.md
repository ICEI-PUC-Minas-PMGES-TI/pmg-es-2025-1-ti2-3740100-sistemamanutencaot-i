### Processo 5 - ORDEM DE SERVIÇO

Este processo representa o fluxo de cadastro de um novo ordem de serviço na empresa. As oportunidades de melhoria incluem a automação da validação das informações e a integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do PROCESSO ORDEM DE SERVIÇO](/docs/images/processos/antigo/OrdemDeServicoBPMN.png "Modelo BPMN do Processo de ordem de serviço.")


#### Detalhamento das atividades

_Descreva aqui cada uma das propriedades das atividades do processo 3. 
Devem estar relacionadas com o modelo de processo apresentado anteriormente._

_Os tipos de dados a serem utilizados são:_

_* **Área de texto** - campo texto de múltiplas linhas_

_* **Caixa de texto** - campo texto de uma linha_

_* **Número** - campo numérico_

_* **Data** - campo do tipo data (dd-mm-aaaa)_

_* **Hora** - campo do tipo hora (hh:mm:ss)_

_* **Data e Hora** - campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)_

_* **Imagem** - campo contendo uma imagem_

_* **Seleção única** - campo com várias opções de valores que são mutuamente exclusivas (tradicional radio button ou combobox)_

_* **Seleção múltipla** - campo com várias opções que podem ser selecionadas mutuamente (tradicional checkbox ou listbox)_

_* **Arquivo** - campo de upload de documento_

_* **Link** - campo que armazena uma URL_

_* **Tabela** - campo formado por uma matriz de valores_

## **1. Verificar Registro do Cliente**
### **Campos**
| **Campo**       | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------------|----------------|-------------------------|-------------------|
| CPF            | Número          | Obrigatório, 11 dígitos | ---               |

### **Comandos**
| **Comando**            | **Destino**                                  | **Tipo**   |
|------------------------|---------------------------------------------|-----------|
| Verificar             | Análise do Computador (se cliente existir)  | Default   |
| Conta não cadastrada  | Processo de Cadastro                        | Default   |

---

## **2. Descrever sintomas da máquina**
### **Campos**
| **Campo**               | **Tipo**         | **Restrições**               | **Valor Default** |
|-------------------------|-----------------|------------------------------|-------------------|
| Descrição do Problema   | Área de Texto   | Obrigatório                   | ---               |

### **Comandos**
| **Comando**                    | **Destino**            | **Tipo**   |
|--------------------------------|------------------------|-----------|
| Documentar na Ordem de Serviço | Ordem de Serviço       | Default   |


---

## **3. Informar observações técnicas sobre a maquina **
### **Campos**
| **Campo**               | **Tipo**         | **Restrições**  | **Valor Default** |
|-------------------------|----------------- |---------------- |-------------------|
| Descrição da maquina    | Área de texto    | Obrigatório     | ---               |

### **Comandos**
| **Comando**                     | **Destino**                    | **Tipo**   |
|---------------------------------|--------------------------------|----------- |
| Documentar na Ordem de Serviço  | Ordem de Serviço               | Default    |


---

## **4. Informar regras de negocios para cliente**
### **Campos**
| **Campo**             | **Tipo**          | **Restrições**                  | **Valor Default**        |
|---------------------- |-------------------|---------------------------------  |--------------------------|
| Prazo Inicial da Loja | Numerico          | Obrigatório                       | ---                      |
| Valor Inicial da Loja | Numerico          | Obrigatório                       | ---                      |

### **Comandos**
| **Comando**  | **Destino**            | **Tipo**  |
|--------------|------------------------|-----------|
| Sim          | Continuar do processo  | Default   |
| Não          | Finalizar processo     | Default   |

---

## 5. Instanciar uma Nova Ordem de Serviço

### Campos

| **Campo**               | **Tipo**        | **Restrições**                     | **Valor Default**         |
|-------------------------|-----------------|------------------------------------|---------------------------|
| ID da OS                | Numérico       | Obrigatório, Único                  | Gerado automaticamente    |
| Data de Criação         | Data/Hora      | Obrigatório                         | Data atual do sistema     |
| Cliente                 | Texto          | Obrigatório                         | ---                       |
| Descrição do Problema   | Texto          | Obrigatório, Mínimo: 10 caracteres  | ---                       |
| Descrição da Maquima    | Texto          | Obrigatório, Mínimo: 10 caracteres  | ---                       |
| Técnico Responsável     | Texto          | Opcional                            | ---                       |
| Prazo para Conclusão    | Data           | Opcional                            | Regra de Negocio          |
| Valor Estimado          | Numérico       | Opcional                            | Regra de Negocio          |

### Comandos

| **Comando**    | **Destino**                  | **Tipo**   |
|----------------|------------------------------|------------|
| Confirmar      | Gerar a OS e prosseguir      | Default    |
| Imprimir       | Gerar versão para imprimir   | Opcional   |
| Assinatura     | Coletar assinatura do cliente| Manual     |
---

# Processo 5 – Ordem de Serviço

Este processo representa o fluxo de cadastro de uma nova ordem de serviço na empresa.  
As oportunidades de melhoria incluem:
- Automação da validação das informações.
- Integração com um sistema de gerenciamento de acessos.

![Modelo BPMN do PROCESSO ORDEM DE SERVIÇO](/docs/images/processos/antigo/OrdemDeServicoBPMN.png "Modelo BPMN do Processo de ordem de serviço.")

---

## Detalhamento das Atividades

Os tipos de dados a serem utilizados são:

- **Área de texto**: campo texto de múltiplas linhas  
- **Caixa de texto**: campo texto de uma linha  
- **Número**: campo numérico  
- **Data**: campo do tipo data (dd-mm-aaaa)  
- **Hora**: campo do tipo hora (hh:mm:ss)  
- **Data e Hora**: campo do tipo data e hora (dd-mm-aaaa, hh:mm:ss)  
- **Imagem**: campo contendo uma imagem  
- **Seleção única**: campo com várias opções de valores que são mutuamente exclusivas (radio button ou combobox)  
- **Seleção múltipla**: campo com várias opções que podem ser selecionadas mutuamente (checkbox ou listbox)  
- **Arquivo**: campo de upload de documento  
- **Link**: campo que armazena uma URL  
- **Tabela**: campo formado por uma matriz de valores  

---

## **1. Verificar Registro do Cliente**

### **Campos**
| **Campo**       | **Tipo**        | **Restrições**          | **Valor Default** |
|-----------------|----------------|-------------------------|-------------------|
| CPF            | Número          | Obrigatório, 11 dígitos | ---               |

### **Comandos**
| **Comando**            | **Destino**                                  | **Tipo**   |
|------------------------|---------------------------------------------|-----------|
| Verificar             | Análise do Computador (se cliente existir)  | Default   |
| Conta não cadastrada  | Processo de Cadastro                        | Default   |

---

## **2. Descrever sintomas da máquina**

### **Campos**
| **Campo**               | **Tipo**         | **Restrições**               | **Valor Default** |
|-------------------------|-----------------|------------------------------|-------------------|
| Descrição do Problema   | Área de Texto   | Obrigatório                   | ---               |

### **Comandos**
| **Comando**                    | **Destino**            | **Tipo**   |
|--------------------------------|------------------------|-----------|
| Documentar na Ordem de Serviço | Ordem de Serviço       | Default   |

---

## **3. Informar observações técnicas sobre a máquina**

### **Campos**
| **Campo**               | **Tipo**         | **Restrições**  | **Valor Default** |
|-------------------------|----------------- |---------------- |-------------------|
| Descrição da máquina    | Área de texto    | Obrigatório     | ---               |

### **Comandos**
| **Comando**                     | **Destino**                    | **Tipo**   |
|---------------------------------|--------------------------------|----------- |
| Documentar na Ordem de Serviço  | Ordem de Serviço               | Default    |

---

## **4. Informar regras de negócios para cliente**

### **Campos**
| **Campo**             | **Tipo**          | **Restrições**                  | **Valor Default**        |
|---------------------- |-------------------|---------------------------------  |--------------------------|
| Prazo Inicial da Loja | Número            | Obrigatório                       | ---                      |
| Valor Inicial da Loja | Número            | Obrigatório                       | ---                      |

### **Comandos**
| **Comando**  | **Destino**            | **Tipo**  |
|--------------|------------------------|-----------|
| Sim          | Continuar do processo  | Default   |
| Não          | Finalizar processo     | Default   |

---

## **5. Instanciar uma Nova Ordem de Serviço**

### **Campos**
| **Campo**               | **Tipo**        | **Restrições**                     | **Valor Default**         |
|-------------------------|-----------------|------------------------------------|---------------------------|
| ID da OS                | Número          | Obrigatório, Único                  | Gerado automaticamente    |
| Data de Criação         | Data e Hora     | Obrigatório                         | Data atual do sistema     |
| Cliente                 | Texto           | Obrigatório                         | ---                       |
| Descrição do Problema   | Texto           | Obrigatório, Mínimo: 10 caracteres  | ---                       |
| Descrição da Máquina    | Texto           | Obrigatório, Mínimo: 10 caracteres  | ---                       |
| Técnico Responsável     | Texto           | Opcional                            | ---                       |
| Prazo para Conclusão    | Data            | Opcional                            | Regra de Negócio          |
| Valor Estimado          | Número          | Opcional                            | Regra de Negócio          |

### **Comandos**
| **Comando**    | **Destino**                  | **Tipo**   |
|----------------|------------------------------|------------|
| Confirmar      | Gerar a OS e prosseguir      | Default    |
| Imprimir       | Gerar versão para imprimir   | Opcional   |
| Assinatura     | Coletar assinatura do cliente| Manual     |

---




