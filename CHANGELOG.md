# 📝 Changelog - Manager.io

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]

### 🔮 Em Desenvolvimento
- Sistema de notificações em tempo real
- Dashboard com métricas avançadas
- Relatórios em PDF
- Integração com WhatsApp
- App mobile (React Native)

---

## [1.0.0] - 2025-01-24

### 🎉 Lançamento Inicial

#### ✨ Adicionado
- **Sistema de Gerenciamento de Usuários**
  - CRUD completo para clientes e técnicos
  - Paginação funcional (8 itens por página)
  - Pesquisa em tempo real por nome, CPF, telefone e tipo
  - Filtros por tipo de usuário (Cliente/Técnico)
  - Modal de confirmação para exclusões
  - Interface responsiva com design moderno

- **Autenticação e Autorização**
  - Sistema de login com diferentes perfis
  - Controle de acesso baseado em roles
  - Perfis: Gerente, Técnico, Cliente

- **API REST Completa**
  - Endpoints para clientes (`/clientes`)
  - Endpoints para técnicos (`/tecnicos`)
  - Documentação completa da API
  - Tratamento de erros padronizado
  - Logs detalhados para debugging

- **Infraestrutura**
  - Frontend React com Vite
  - Backend Spring Boot com JPA
  - Banco de dados MySQL
  - Docker Compose para desenvolvimento
  - Scripts de setup automatizado

- **Documentação Abrangente**
  - README principal com visão geral
  - Guia detalhado de instalação (INSTALL.md)
  - Documentação da API (docs/API.md)
  - READMEs específicos para frontend e backend
  - Guia de contribuição (CONTRIBUTING.md)

#### 🏗 Arquitetura
- **Frontend (React 19.1.0)**
  - Vite para build e desenvolvimento
  - Axios para comunicação com API
  - React Router para navegação
  - Bootstrap para estilização
  - Chart.js para gráficos futuros

- **Backend (Spring Boot 3.x)**
  - Java 17+ com Spring Framework
  - Spring Data JPA para persistência
  - MySQL 8.0+ como banco de dados
  - Maven para gerenciamento de dependências
  - Estrutura MVC bem definida

#### 🎨 Interface
- Design moderno e responsivo
- Paleta de cores profissional
- Ícones FontAwesome
- Componentes reutilizáveis
- UX otimizada para produtividade

#### 🧪 Qualidade
- Tratamento robusto de erros
- Logs detalhados para debugging
- Validações no frontend e backend
- Estrutura preparada para testes

---

## 📈 Estatísticas da Versão Atual

### 📊 Métricas de Código
- **Frontend**: ~2,500 linhas de código
- **Backend**: ~1,800 linhas de código
- **Documentação**: ~5,000 palavras
- **Componentes React**: 8 principais
- **Endpoints API**: 12 funcionais

### 🏆 Funcionalidades Implementadas
- ✅ Gerenciamento de Usuários (100%)
- ✅ Autenticação Básica (100%)
- ✅ API REST (100%)
- ✅ Documentação (100%)
- ⏳ Dashboard (30%)
- ⏳ Ordens de Serviço (0%)
- ⏳ Relatórios (0%)

---

## 🤝 Contribuidores

### 👨‍💻 Equipe Principal
- **Felipe Augusto Mendes Pereira** - Desenvolvedor
- **Francisco Rafael Pereira Rodrigues** - Desenvolvedor
- **Gabriel Victor Souza Lopes** - Desenvolvedor
- **Igor Rodrigo Costa** - Desenvolvedor
- **João Pedro Maciel de Oliveira** - Desenvolvedor
- **João Ricardo Fiuza** - Desenvolvedor

### 👩‍🏫 Orientação Acadêmica
- **Michelle Hanna Soares de Andrade** - Orientadora
- **Danilo de Quadros Maia Filho** - Orientador
- **Joana Gabriela Ribeiro de Souza** - Orientadora

---

## 📚 Recursos Adicionais

### 🔗 Links Úteis
- [Repositório GitHub](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i)
- [Documentação da API](docs/API.md)
- [Guia de Instalação](INSTALL.md)
- [Como Contribuir](CONTRIBUTING.md)

### 🏷 Tags de Versionamento
- `v1.0.0` - Lançamento inicial
- `v1.0.0-alpha` - Versões de teste
- `v1.0.0-beta` - Versões de pré-lançamento

---

## 🔄 Convenções de Versionamento

Este projeto segue o [Semantic Versioning](https://semver.org/):

- **MAJOR** (X.0.0): Mudanças incompatíveis na API
- **MINOR** (0.X.0): Novas funcionalidades mantendo compatibilidade
- **PATCH** (0.0.X): Correções de bugs

### 🏷 Tipos de Release
- **Alpha**: Versões experimentais para testes internos
- **Beta**: Versões para testes com usuários limitados
- **RC** (Release Candidate): Versões candidatas ao lançamento
- **Stable**: Versões estáveis para produção

---

*Última atualização: 24 de Janeiro de 2025*
