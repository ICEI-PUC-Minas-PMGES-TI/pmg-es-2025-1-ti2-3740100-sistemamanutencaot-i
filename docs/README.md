# 🖥️ Manager.io

## Autores

- **Felipe Augusto Mendes** - [felipepepe64@gmail.com](mailto:felipepepe64@gmail.com)
- **Francisco Rafael Pereira** - [franciscocjn06@gmail.com](mailto:franciscocjn06@gmail.com)
- **Gabriel Victor Souza Lopes** - [gabrieelvictor26@gmail.com](mailto:gabrieelvictor26@gmail.com)
- **Igor Rodrigo Costa** - [igorrcosta250705@gmail.com](mailto:igorrcosta250705@gmail.com)
- **João Pedro Maciel de Oliveira** - [jpmaciel74@gmail.com](mailto:jpmaciel74@gmail.com)
- **João Ricardo Fiuza** - [Joaoricfiuza@gmail.com](mailto:Joaoricfiuza@gmail.com)

---

## Professores Orientadores

- **Prof. Michelle Hanne Soares de Andrade**  
- **Prof. Danilo de Quadros Maia Filho**  
- **Prof. Joana Gabriela Ribeiro de Souza**  

---

## Instituição

📌 _Curso de Engenharia de Software_  
🏛️ _Instituto de Informática e Ciências Exatas – Pontifícia Universidade Católica de Minas Gerais (PUC MINAS)_  
📍 _Belo Horizonte – MG – Brasil_  

---

## 📌 Resumo

> *O presente trabalho apresenta o Manager.io, um sistema desenvolvido para otimizar a gestão de processos empresariais, com foco em empresas de manutenção de computadores. A plataforma busca solucionar problemas comuns, como falta de organização das ordens de serviço, comunicação ineficiente entre técnicos e clientes, e dificuldade na análise gerencial. O objetivo principal é integrar fluxos de trabalho, automatizar tarefas e disponibilizar ferramentas intuitivas que aumentem a produtividade e transparência nas operações. Utilizando tecnologias modernas como React, Spring Boot, Java e MySQL, o sistema oferece dashboards gerenciais, notificações automáticas e controle em tempo real das atividades. Como resultado, espera-se maior eficiência operacional, redução de erros e atrasos, além de uma experiência mais satisfatória para os clientes.*  

---

## 📖 1. Introdução

Este projeto visa desenvolver um **software de gerenciamento de processos** que **otimize o fluxo de trabalho** e **melhore a comunicação com o cliente**, tornando-a mais clara e eficiente.

### 1.1 Contextualização

O sistema é voltado para **empresas de manutenção de computadores** e tem como principal objetivo:

✔ **Facilitar a comunicação entre equipe técnica e clientes**.  
✔ **Garantir um fluxo organizado e transparente** durante os reparos.  
✔ **Permitir o acompanhamento do status dos serviços em tempo real**.  

### 1.2 Problema

Os principais problemas enfrentados pelas empresas de manutenção de computadores incluem:

❌ **Falta de Organização das Ordens de Serviço**
 Esse é um problema muito comum nas empresas de manutenção. Quando as ordens de serviço não são bem organizadas, surgem situações como:
 
 Perda de informações importantes: Dados sobre o cliente, o problema relatado ou o status do reparo podem acabar se perdendo ou sendo mal registrados.
 Atrasos no atendimento: Sem um sistema eficiente, é fácil esquecer ou atrasar ordens de serviço.
 Dificuldade em priorizar tarefas: Sem controle, fica complicado saber quais reparos são mais urgentes.
 Isso tudo pode ser ainda pior quando a empresa não usa ferramentas tecnológicas, como softwares de gestão, para organizar as tarefas.
 
 ❌ **Dificuldade na Comunicação com os Clientes**
 A comunicação com os clientes é essencial, mas muitas empresas enfrentam desafios nesse ponto, como:
 
 Falta de transparência: Os clientes querem saber o que está acontecendo com seus equipamentos, mas nem sempre são informados sobre o status do reparo ou custos adicionais.
 Demora nas respostas: Quando a empresa demora para responder mensagens ou atender ligações, isso gera frustração.
 Explicações complicadas: Muitas vezes, os técnicos explicam o problema de forma muito técnica, e o cliente não entende, o que pode gerar desconfiança.
 Manter os clientes bem informados, de forma clara e rápida, é fundamental para construir confiança.
 
 ❌ **Gestão Ineficiente da Equipe Técnica**
 A equipe técnica é o coração do negócio, mas problemas de gestão podem comprometer o trabalho, como:
 
 Distribuição desigual de tarefas: Alguns técnicos ficam sobrecarregados, enquanto outros têm menos trabalho.
 Falta de treinamento: Sem atualização sobre novas tecnologias, os técnicos podem acabar entregando serviços de baixa qualidade.
 Falta de acompanhamento: Quando não há monitoramento do desempenho da equipe, fica difícil identificar problemas e melhorar a produtividade.
 Uma boa gestão da equipe garante que o trabalho seja bem feito e que todos estejam alinhados.
 
 ❌ **Falta de Visão Gerencial sobre as Operações**
 Muitos gestores não têm uma visão clara do que está acontecendo na empresa. Isso pode incluir:
 
 Não acompanhar métricas importantes: Sem dados como tempo médio de reparo ou satisfação dos clientes, é difícil tomar decisões estratégicas.
 Gestão financeira desorganizada: Erros no controle financeiro podem gerar problemas de caixa, especialmente com custos inesperados.
 Falta de planejamento: Sem um plano claro, o crescimento da empresa pode ser prejudicado.
 Ter uma visão estratégica é essencial para garantir o sucesso e o crescimento do negócio.
 
 ❌ **Problemas com Estoque e Suprimentos**
 Gerenciar peças e suprimentos é um desafio constante. Os problemas mais comuns incluem:
 
 Falta de peças em estoque: Isso pode atrasar reparos e deixar os clientes insatisfeitos.
 Excesso de peças desnecessárias: Manter um estoque cheio de itens que não são usados gera custos desnecessários.
 Erro no controle de inventário: Sem um sistema eficiente, é fácil perder o controle do que está disponível ou do que precisa ser comprado.
 Um estoque bem gerenciado ajuda a evitar atrasos e reduz custos desnecessários, além de melhorar a experiência do cliente.
 
 ❌ **Concorrência e Pressão por Preços**
 O mercado de manutenção de computadores é extremamente competitivo, e as empresas enfrentam desafios como:
 
 Concorrência desleal: Técnicos informais ou empresas que cobram preços muito baixos podem dificultar a conquista de clientes.
 Dificuldade em justificar preços: Quando o cliente não entende o valor do serviço, ele pode optar por opções mais baratas.
 Pressão por descontos: Muitos clientes tentam negociar preços, o que pode reduzir os lucros da empresa.
 Para se destacar, é importante oferecer qualidade e mostrar ao cliente o valor do serviço prestado.
 
 ❌ **Problemas com Garantia e Pós-Venda**
 O atendimento após o serviço também é um ponto crítico. Alguns problemas comuns incluem:
 
 Reparos mal feitos: Serviços de baixa qualidade podem gerar retrabalho e insatisfação.
 Falta de controle sobre garantias: Não gerenciar bem os prazos de garantia pode causar conflitos com os clientes.
 Pouco cuidado no pós-venda: Não entrar em contato com o cliente após o reparo pode ser uma oportunidade perdida de fidelização.
 Um bom acompanhamento após o serviço ajuda a construir uma relação de confiança com o cliente.
 
 ❌ **Adaptação a Novas Tecnologias**
 A tecnologia muda rápido, e nem todas as empresas conseguem acompanhar. Os principais desafios são:
 
 Falta de conhecimento técnico: Novos dispositivos e sistemas exigem constante atualização dos técnicos.
 Mudança no perfil dos problemas: Com o aumento do uso de dispositivos móveis e computação em nuvem, os serviços precisam se adaptar.
 Investimentos em ferramentas modernas: Algumas empresas têm dificuldade em adquirir equipamentos e softwares necessários para reparos mais avançados.
 Manter a equipe atualizada e investir em tecnologia é essencial para continuar competitivo.
 
 ❌ **Atendimento ao Cliente Deficiente**
 O atendimento ao cliente vai além da comunicação. Problemas comuns incluem:
 
 Despreparo no atendimento inicial: Um atendimento mal feito pode afastar o cliente logo no início.
 Falta de empatia: Clientes querem ser ouvidos e tratados com atenção, especialmente quando estão com problemas.
 Demora no atendimento presencial: Longas esperas podem gerar insatisfação e prejudicar a reputação da empresa.
 Um atendimento humanizado e ágil pode fazer toda a diferença na fidelização dos clientes.
 
 ❌ **Problemas Legais e Regulatórios**
 Por fim, a falta de conformidade com leis e regulamentações pode trazer sérios problemas, como:
 
 Falta de emissão de notas fiscais: Isso pode gerar problemas fiscais e prejudicar a confiança do cliente.
 Desrespeito à LGPD: Não proteger os dados dos clientes pode resultar em multas e processos.
 Contratos mal elaborados: Sem contratos claros, podem surgir conflitos com clientes e fornecedores.
 Estar em dia com as obrigações legais protege a empresa e fortalece sua credibilidade.

### 1.3 Objetivo Geral

Desenvolver um **sistema de gerenciamento de processos** que **otimize fluxos de trabalho** e **aproxime o cliente** de cada etapa do processo.

### 🎯 1.3.1 Objetivos Específicos

1️⃣ **Automatizar** o gerenciamento de ordens de serviço.  
2️⃣ **Facilitar** a comunicação entre técnicos e clientes.  
3️⃣ **Fornecer histórico** detalhado de manutenções.  
4️⃣ **Implementar notificações** automáticas para atualizações de status.  
5️⃣ **Gerar relatórios** de desempenho da equipe.  
6️⃣ **Disponibilizar dashboards** intuitivos para análise gerencial.  
7️⃣ **Reduzir tempo de atendimento** e minimizar erros de comunicação.  

### 1.4 Justificativa

Este software visa **solucionar problemas comuns** enfrentados por empresas do setor, como:

📌 *Falta de organização*  
 📌 *Comunicação ineficiente*  
 📌 *Dificuldade no monitoramento da equipe*  
 📌 *Ausência de histórico centralizado de reparos* 

🔹 **Benefícios esperados:**

✅ **Otimização de processos**  
✅ **Aumento da satisfação dos clientes**  
✅ **Redução de erros e retrabalho**  
✅ **Melhor controle operacional**  

---

## 🏢 2. Participantes do Processo

> _Apresente aqui os perfis dos usuários-chave do sistema. Diversas são as informações que podem ser relevantes para a definição dos perfis dos usuários, tais como idade, gênero, aspectos culturais, nível de educação, entre outros. A pesquisa de mercado pode ser uma ferramenta poderosa para se identificar e caracterizar os perfis de usuários. Apresente claramente o papel a ser desempenhado por cada usuário._

---

## 🔄 3. Modelagem do Processo de Negócio

### 3.1. Análise da Situação Atual

#### 3.1.1. Problema ou Necessidade
Atualmente, muitas empresas enfrentam dificuldades na gestão de reparos de computadores devido ao uso de processos manuais e desorganizados. Anotações em papel, planilhas ou sistemas genéricos não especializados tornam a comunicação entre clientes, técnicos e gerentes ineficaz. Isso resulta em atrasos, falta de transparência e problemas no controle do processo de reparo.

#### 3.1.2. Soluções Existentes
Embora algumas empresas recorram a sistemas genéricos de controle de ordens de serviço, esses sistemas muitas vezes carecem de uma interface intuitiva, o que dificulta o acompanhamento do status dos reparos pelos clientes. Outras empresas ainda dependem de ligações e mensagens para fornecer atualizações, uma prática que não só é ineficiente, mas também propensa a erros e retrabalho.

#### 3.1.3. Público-Alvo
- **Gerente:** Precisa de uma visão completa da operação da empresa, incluindo o status dos reparos, a produtividade dos técnicos e o controle das ordens de serviço.
- **Técnico:** Responsável por registrar e atualizar o status dos reparos, além de diagnosticar e resolver problemas dos equipamentos.
- **Cliente:** Deseja acompanhar de maneira prática e transparente o andamento do reparo de seu equipamento, semelhante ao rastreamento de uma entrega.

---

### 3.2. Descrição Geral da Proposta de Solução

A solução proposta visa otimizar a gestão da empresa de reparos de computadores, oferecendo uma plataforma centralizada para comunicação eficiente entre gerente, técnicos e clientes. Através desse sistema, cada usuário terá acesso às informações necessárias para realizar seu trabalho de forma mais transparente, eficiente e organizada.

#### 3.2.1. Funcionalidades Principais
- **Gerente:** Acesso completo ao sistema, podendo visualizar o status de todos os reparos, gerenciar técnicos, monitorar a produtividade e controlar as operações da empresa.
- **Técnico:** Capacidade de registrar e atualizar em tempo real o status de cada reparo, fornecendo informações sobre diagnósticos, progresso e conclusão do serviço.
- **Cliente:** Interface intuitiva para acompanhar o progresso do reparo de seu equipamento, com visualização detalhada de cada etapa do processo, de forma semelhante ao rastreamento de uma entrega.

#### 3.2.2. Benefícios Esperados
- **Transparência:** Acompanhamento em tempo real, reduzindo a necessidade de contato direto com a empresa.
- **Eficiência:** Técnicos poderão atualizar o status dos serviços de forma ágil e organizada.
- **Gestão aprimorada:** O gerente terá uma visão ampla e detalhada das operações, facilitando o controle e a tomada de decisões.
- **Redução de erros:** Eliminando registros manuais e desorganizados, o sistema contribuirá para a redução de falhas e retrabalho.

#### 3.2.3. Tecnologias e Implementação
O sistema será desenvolvido com tecnologias modernas, robustas e amplamente utilizadas no mercado, garantindo uma experiência de uso fluida, segura e escalável. Abaixo, detalhamos as tecnologias escolhidas, com justificativas para cada uma delas:

📍 **Frontend (Interface do Usuário)**

- **React.js:** Uma biblioteca JavaScript para construção de interfaces de usuário interativas e responsivas.
JavaScript: A linguagem base do React e essencial para criar funcionalidades dinâmicas e interativas no frontend.
Por que usar React.js e JavaScript?

- **React.js:**
Permite criar interfaces modernas e altamente responsivas, melhorando a experiência do usuário.
Facilita a reutilização de componentes, o que reduz o tempo de desenvolvimento e manutenção.
Possui uma grande comunidade de desenvolvedores e suporte, o que garante acesso a bibliotecas e ferramentas complementares.

- **JavaScript:**
É a base do desenvolvimento frontend e amplamente suportado por navegadores.
Oferece flexibilidade para implementar funcionalidades personalizadas e dinâmicas.

📍 **Backend (Lógica e Processamento)**

**Java:** Uma linguagem de programação robusta, versátil e amplamente utilizada no desenvolvimento de sistemas corporativos.
Spring Boot: Um framework para Java que simplifica a criação de APIs RESTful e sistemas backend escaláveis.
Por que usar Java e Spring Boot?

- **Java**:
É conhecido por sua estabilidade e desempenho, sendo ideal para sistemas de missão crítica.
Possui forte suporte para integração com bancos de dados e outras tecnologias.
É multiplataforma, permitindo que o sistema seja executado em diferentes ambientes.

- **Spring Boot:**
Simplifica o desenvolvimento de aplicações Java, reduzindo a quantidade de configuração necessária.
Oferece suporte integrado para criação de APIs RESTful, autenticação e gerenciamento de dependências.
É altamente escalável, permitindo que o sistema cresça conforme a demanda.

📍 **Banco de Dados**

- **MySQL:** Um sistema de gerenciamento de banco de dados relacional (RDBMS).
Por que usar MySQL?

É uma solução madura e confiável, amplamente utilizada em aplicações corporativas e web.
Oferece excelente desempenho para consultas complexas e grandes volumes de dados.
Possui suporte nativo para integração com Java e Spring Boot, facilitando o desenvolvimento.
É uma solução econômica e fácil de escalar, ideal para sistemas que precisam crescer ao longo do tempo.

📍 **Comunicação entre Frontend e Backend**

**APIs RESTful**: Criadas com Spring Boot para comunicação entre o frontend (React.js) e o backend (Java).
Por que usar APIs RESTful?

São amplamente utilizadas e padronizadas, garantindo compatibilidade com diferentes plataformas e dispositivos.
Facilitam a separação entre frontend e backend, permitindo que ambas as partes sejam desenvolvidas e mantidas de forma independente.
São leves e eficientes, ideais para sistemas que exigem alta performance.

📍 **Segurança**

- **Spring Security:** Para autenticação e controle de acesso no backend.
JWT (JSON Web Tokens): Para autenticação baseada em tokens, garantindo segurança e escalabilidade.
Por que usar essas tecnologias?

- **Spring Security:**
Oferece uma solução completa para autenticação e autorização, protegendo as APIs contra acessos não autorizados.
Integra-se facilmente com Spring Boot, reduzindo a complexidade da implementação.
JWT:
Permite autenticação sem a necessidade de armazenar sessões no servidor, tornando o sistema mais escalável.
É amplamente utilizado e compatível com diferentes plataformas, garantindo segurança no acesso ao sistema.

📍 **Relatórios e Análises**

Java com bibliotecas de geração de relatórios (como JasperReports): Para criação de relatórios gerenciais detalhados.
Por que usar essas tecnologias?

O Java, em conjunto com ferramentas como JasperReports, permite a geração de relatórios customizados e visualmente atraentes.
Facilita a criação de dashboards gerenciais que auxiliam na tomada de decisões estratégicas.
Benefícios da Escolha das Tecnologias
Escalabilidade: Todas as tecnologias escolhidas (React, Java, Spring Boot e MySQL) são conhecidas por sua capacidade de suportar sistemas em crescimento, tanto em número de usuários quanto em volume de dados.
Segurança: O uso de Spring Security e JWT garante que o sistema esteja protegido contra acessos não autorizados e vulnerabilidades comuns.
Desempenho: A combinação de React no frontend e Spring Boot no backend garante uma aplicação ágil e de alto desempenho.
Manutenção e Evolução: Com tecnologias amplamente utilizadas no mercado, o sistema será fácil de manter e evoluir, com acesso a uma vasta comunidade de suporte e recursos.
Experiência do Usuário: React.js, com sua abordagem baseada em componentes, permitirá criar interfaces intuitivas e responsivas, garantindo uma experiência de uso fluida para técnicos, gestores e clientes.

#### 3.2.4. Requisitos e Restrições
- Os técnicos devem poder registrar e atualizar o status de reparos de forma rápida e intuitiva, com um fluxo de trabalho eficiente que minimiza o tempo de interação e potencial de erro.
- O sistema deve permitir que clientes, gerentes e técnicos visualizem o status dos reparos em tempo real, garantindo informações precisas e atualizadas.
- O sistema deve proporcionar uma interface intuitiva, permitindo que os clientes acompanhem facilmente o andamento do serviço, enquanto oferece aos técnicos e gerentes uma visualização clara e acessível das máquinas em reparo.
- O gerente deve ter acesso completo a todas as informações e relatórios da empresa.
- O sistema deve ser seguro, garantindo que apenas usuários autorizados possam modificar ou visualizar dados sensíveis.
- O sistema deve permitir que os técnicos cadastrem novas ordens de serviço, incluindo informações detalhadas sobre o problema reportado, a máquina em questão e o cliente responsável.
- O sistema deve enviar notificações automáticas para os clientes e gerentes sempre que houver uma atualização no status de um reparo, como o início, progresso ou conclusão do serviço.
- O sistema deve registrar o tempo gasto em cada reparo, permitindo que técnicos e gerentes acompanhem a eficiência e identifiquem possíveis gargalos no processo.

### 3.3. Modelagem dos Processos

📌 [PROCESSO 1 - Nome do Processo](processo-1-nome-do-processo.md "Detalhamento do Processo 1.")  
📌 [PROCESSO 2 - Nome do Processo](processo-2-nome-do-processo.md "Detalhamento do Processo 2.")  
📌 [PROCESSO 3 - Nome do Processo](processo-3-nome-do-processo.md "Detalhamento do Processo 3.")  
📌 [PROCESSO 4 - Nome do Processo](processo-4-nome-do-processo.md "Detalhamento do Processo4.")  

---

## 💡 4. Projeto da Solução

> _O documento a seguir apresenta o detalhamento do projeto da solução. São apresentadas duas seções que descrevem, respectivamente: modelo relacional e tecnologias._

📌 [Projeto da solução](solution-design.md "Detalhamento do projeto da solução: modelo relacional e tecnologias.") 

---

## 📊 5. Indicadores de Desempenho

> _O documento a seguir apresenta os indicadores de desempenho dos processos._

📌 [Indicadores de desempenho dos processos](performance-indicators.md)  

---

## 🖥️ 6. Interface do Sistema

> _A sessão a seguir apresenta a descrição do produto de software desenvolvido._ 

📌 [Documentação da interface do sistema](interface.md)

---

## 🏁 7. Conclusão

> _Apresente aqui a conclusão do seu trabalho. Deve ser apresentada aqui uma discussão dos resultados obtidos no trabalho, local em que se verifica as observações pessoais de cada aluno. Essa seção poderá também apresentar sugestões de novas linhas de estudo._


---

## 📚 Referências

> _Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT._

> _Verifique no link abaixo como devem ser as referências no padrão ABNT:_

📌 [Guia de Referências ABNT](http://portal.pucminas.br/imagedb/documento/DOC_DSC_NOME_ARQUI20160217102425.pdf)  


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._

---

## 📎 Apêndices

### 📂 Código Fonte

📌 [Código do front-end](../src/front)  
📌 [Código do back-end](../src/back)  

### 📺 Apresentação Final

📌 [Slides da apresentação](presentations/)  
📌 [Vídeo da apresentação](video/)  

---

