### 3.3.3 Ordem de Serviço

Processo de ordem de serviço, algumas melhorias seriam:
1. Atualmente, a verificação do cliente é manual. Poderia ser automatizada com integração a um banco de dados para agilizar o processo e evitar erros de digitação.
2. Envio de notificações via e-mail ou SMS sobre orçamento, status do serviço e retirada do computador, reduzindo a necessidade de contato manual.
3. Criar modelos padronizados de orçamento para evitar inconsistências entre técnicos e melhorar a transparência para o cliente.
4. Possibilitar a aprovação do orçamento pelo cliente de forma online, sem necessidade de visita presencial, acelerando o processo.
5. Implementar um sistema integrado para verificar se há peças disponíveis antes de iniciar o conserto, evitando atrasos inesperados.
6. Criar um histórico digital para cada computador consertado, facilitando consultas futuras e melhorando a rastreabilidade dos serviços prestados.
Em seguida, apresente o modelo do processo 3, descrito no padrão BPMN._

![Modelo BPMN do PROCESSO ORDEM DE SERVIÇO](/docs/images/processos/ordemDeServicoBPMN.png "Modelo BPMN do Processo de ordem de serviço.")


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

## **2. Analisar Computador e Fazer Orçamento**
### **Campos**
| **Campo**               | **Tipo**         | **Restrições**               | **Valor Default** |
|-------------------------|-----------------|------------------------------|-------------------|
| Descrição do Problema   | Área de Texto   | Obrigatório                   | ---               |
| Observações Técnicas    | Área de Texto   | ---                            | ---               |
| Valor Estimado         | Número          | Somente valores positivos     | ---               |
| Data do Orçamento      | Data            | Formato (dd-mm-aaaa)          | Data atual        |

### **Comandos**
| **Comando**       | **Destino**             | **Tipo**   |
|------------------|------------------------|-----------|
| Gerar Orçamento | Aprovação do Cliente   | Default   |
| Cancelar        | Fim do Processo        | Cancel    |

---

## **3. Aprovação do Orçamento**
### **Campos**
| **Campo**               | **Tipo**         | **Restrições**  | **Valor Default** |
|-------------------------|-----------------|----------------|-------------------|
| Aceitou Orçamento?      | Seleção Única   | Sim/Não        | ---               |

### **Comandos**
| **Comando**   | **Destino**                   | **Tipo**   |
|--------------|------------------------------|-----------|
| Confirmar    | Registro do PC no Sistema   | Default   |
| Recusar      | Fim do Processo              | Cancel    |

---

## **4. Registro do PC no Sistema**
### **Campos**
| **Campo**             | **Tipo**          | **Restrições**                  | **Valor Default**        |
|----------------------|------------------|---------------------------------|--------------------------|
| Código do Computador | Caixa de Texto   | Gerado automaticamente         | ---                      |
| Status              | Seleção Única    | -                               | Aguardando Conserto       |

### **Comandos**
| **Comando**   | **Destino**           | **Tipo**   |
|--------------|----------------------|-----------|
| Registrar   | Execução do Serviço   | Default   |

---

## **5. Execução do Serviço**
### **Campos**
| **Campo**                | **Tipo**         | **Restrições**               | **Valor Default**        |
|--------------------------|-----------------|------------------------------|--------------------------|
| Técnico Responsável      | Seleção Única   | Deve estar registrado         | ---                      |
| Computador Selecionado   | Seleção Múltipla | Lista de PCs disponíveis      | ---                      |
| Data de Início do Serviço | Data e Hora     | Formato (dd-mm-aaaa, hh:mm:ss) | Data e Hora atuais        |

### **Comandos**
| **Comando**       | **Destino**             | **Tipo**   |
|------------------|------------------------|-----------|
| Iniciar Serviço | Atualização de Status  | Default   |

---

## **6. Atualização de Status**
### **Campos**
| **Campo**        | **Tipo**        | **Restrições** | **Valor Default** |
|------------------|----------------|---------------|-------------------|
| Status Atual    | Seleção Única   | ---           | ---               |
| Observações     | Área de Texto   | ---           | ---               |

### **Comandos**
| **Comando**        | **Destino**                    | **Tipo**   |
|-------------------|--------------------------------|-----------|
| Atualizar Status | Verificação de Conclusão       | Default   |

---

## **7. Verificação de Conclusão**
### **Campos**
| **Campo**          | **Tipo**         | **Restrições** | **Valor Default** |
|-------------------|-----------------|--------------|-------------------|
| Serviço Concluído? | Seleção Única   | Sim/Não      | ---               |

### **Comandos**
| **Comando** | **Destino**              | **Tipo**   |
|------------|-------------------------|-----------|
| Sim        | Processo Financeiro      | Default   |
| Não        | Atualização de Status    | Cancel    |

---

