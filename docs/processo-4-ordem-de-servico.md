### 3.3.3 Ordem de Serviço

Processo de ordem de serviço, algumas melhorias seriam:
1. Atualmente, a verificação do cliente é manual. Poderia ser automatizada com integração a um banco de dados para agilizar o processo e evitar erros de digitação.
2. Envio de notificações via e-mail ou SMS sobre orçamento, status do serviço e retirada do computador, reduzindo a necessidade de contato manual.
3. Criar modelos padronizados de orçamento para evitar inconsistências entre técnicos e melhorar a transparência para o cliente.
4. Possibilitar a aprovação do orçamento pelo cliente de forma online, sem necessidade de visita presencial, acelerando o processo.
5. Implementar um sistema integrado para verificar se há peças disponíveis antes de iniciar o conserto, evitando atrasos inesperados.
6. Criar um histórico digital para cada computador consertado, facilitando consultas futuras e melhorando a rastreabilidade dos serviços prestados.
Em seguida, apresente o modelo do processo 3, descrito no padrão BPMN._

![Exemplo de um Modelo BPMN do PROCESSO 3](images/process.png "Modelo BPMN do Processo 3.")


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

**Verificar Registro do Cliente**

| **Campo**       | **Tipo**        | **Restrições**          | **Valor default** |
|-----------------|----------------|-------------------------|-------------------|
| CPF            | Número         | Obrigatório, 11 dígitos | -                 |

| **Comando**     | **Destino**               | **Tipo**   |
|---------------|--------------------------|-----------|
| Verificar | Análise do Computador (se cliente existir)  | Default   |
| Conta não cadastrada |  Processo cadastro | Default   |


| **Comandos**         |  **Destino**                              | **Tipo** |
|             | | default  |        
                       |     |          |
|              | Fim do processo                           | cancel   |


**Analisar Computador e Fazer Orçamento**

|       **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
|-----------------|----------------|-------------------------|-------------------|
| Descrição do Problema	| Área de Texto    | Obrigatório    | ---               |
| Observações Técnicas  | Área de Texto	   | ---            | ---               |
| Valor Estimado	      | Número           | Somente valores positivos|         |
| Data do Orçamento	    | Data             | Formato(dd-mm-aaaa)       | Data atual        |
|                       |                  | |                   |                   

| **Comandos**         |  **Destino**                   | **Tipo**          |
| Gerar Orçamento	     | Aprovação do Cliente	          | default           |
| Cancelar             | Fim do processo                | cancel            |


**Aprovação do Orçamento**

|       **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| Aceitou Orçamento?	  | Seleção única    | Sim/Não        | ---               |          

| **Comandos**         |  **Destino**                   | **Tipo**          |
| Confirmar            | Registro do PC no Sistema	    | default           |
| Recusar              | Fim do processo                | cancel            |


** Registro do PC no Sistema**

|       **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| Código do Computador  | Caixa de texto   | Gerado auto	  | ---               | 
| Status                | Seleção múltipla | Obrigatório    |Aguardando Conserto|               

| **Comandos**         |  **Destino**                   | **Tipo**          |
| Registrar            | Execução do Serviço	          | default           |


**Execução do Serviço**

|       **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| Técnico Responsável   | Seleção Única	   | Está registrado| ---               | 
| Computador selecionado| Seleção múltipla | Lista de pcs   | ---               |
|                       |                  |  disponíveis   |                   |    
| Data de Início do     | Data e Hora      | (dd-mm-aaaa,   | Data e Hora atuais|         
| Serviço	              |                  |  hh:mm:ss)     |                   |

| **Comandos**         |  **Destino**                   | **Tipo**          |
| Iniciar Serviço	     | Atualização de Status	        | default           |

**Atualização de Status**

|       **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| Status Atual          | Seleção Única	   | ---            | ---               | 
| Observações           | Área de texto    | ---            | ---               |  

| **Comandos**         |  **Destino**                   | **Tipo**          |
| Atualizar Status     | Verificação de Conclusão		    | default           |


**Verificação de Conclusão**

|       **Campo**       | **Tipo**         | **Restrições** | **Valor default** |
| Serviço Concluído?    | Seleção Única	   | Sim/Não        | ---               | 

| **Comandos**         |  **Destino**                   | **Tipo**          |
| Sim                  | Processo financeiro     		    | default           |
| Não                  | Atualização de status          | cancel            |

