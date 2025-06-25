# 🤝 Guia de Contribuição - Manager.io

Obrigado por seu interesse em contribuir com o Manager.io! Este guia irá ajudá-lo a começar e garantir que suas contribuições sejam integradas de forma eficiente.

## 📋 Índice

- [Como Contribuir](#-como-contribuir)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Padrões de Code](#-padrões-de-code)
- [Processo de Pull Request](#-processo-de-pull-request)
- [Reportando Bugs](#-reportando-bugs)
- [Sugerindo Melhorias](#-sugerindo-melhorias)
- [Comunidade](#-comunidade)

## 🚀 Como Contribuir

### Tipos de Contribuições Aceitas

- 🐛 **Bug Fixes**: Correção de bugs existentes
- ✨ **Features**: Novas funcionalidades
- 📝 **Documentação**: Melhorias na documentação
- 🎨 **UI/UX**: Melhorias na interface
- ⚡ **Performance**: Otimizações de performance
- 🧪 **Testes**: Adição de testes unitários/integração
- 🔧 **Refactoring**: Refatoração de código

### Processo Geral

1. **Fork** o repositório
2. **Clone** seu fork localmente
3. **Crie** uma branch para sua feature/fix
4. **Desenvolva** e teste suas mudanças
5. **Commit** seguindo nossas convenções
6. **Push** para seu fork
7. **Abra** um Pull Request

## 🛠 Configuração do Ambiente

### 1. Fork e Clone

```bash
# Fork pelo GitHub, depois clone
git clone https://github.com/SEU_USERNAME/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.git
cd pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i

# Adicione o repositório original como upstream
git remote add upstream https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.git
```

### 2. Configuração do Projeto

Siga o [INSTALL.md](INSTALL.md) para configurar o ambiente de desenvolvimento.

### 3. Verificação da Instalação

```bash
# Teste o backend
cd src/back/backend
./mvnw test

# Teste o frontend
cd src/front/FrontEnd
npm test
```

## 📝 Padrões de Code

### Convenções de Commit

Usamos [Conventional Commits](https://www.conventionalcommits.org/) para mensagens de commit:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé opcional]
```

**Tipos:**
- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação, ponto e vírgula ausente, etc
- `refactor`: Refatoração de código
- `test`: Adição de testes
- `chore`: Atualizações de build, configs, etc

**Exemplos:**
```bash
feat(usuarios): adiciona paginação na listagem
fix(api): corrige erro 500 ao excluir cliente
docs(readme): atualiza instruções de instalação
style(usuarios): formata código conforme ESLint
test(api): adiciona testes para endpoint de clientes
```

### Padrões Backend (Java/Spring Boot)

```java
// Nomenclatura de classes: PascalCase
public class ClienteService {
    
    // Métodos: camelCase
    public Cliente buscarPorId(Long id) {
        // Lógica aqui
    }
    
    // Constantes: UPPER_SNAKE_CASE
    private static final String STATUS_ATIVO = "ATIVO";
    
    // Variáveis: camelCase
    private ClienteRepository clienteRepository;
}
```

**Estrutura de Pacotes:**
```
com.manager.backend
├── controller/     # Controllers REST
├── service/       # Lógica de negócio
├── repository/    # Acesso a dados
├── model/         # Entidades JPA
├── dto/           # Data Transfer Objects
├── config/        # Configurações
└── exception/     # Exceções customizadas
```

### Padrões Frontend (React)

```jsx
// Componentes: PascalCase
const UserManagement = ({ users, onUserSelect }) => {
  // Estados: camelCase
  const [filteredUsers, setFilteredUsers] = useState([]);
  
  // Handlers: handle + Action
  const handleUserDelete = (userId) => {
    // Lógica aqui
  };
  
  // JSX com estrutura clara
  return (
    <div className="user-management">
      <header className="management-header">
        <h1>Usuários</h1>
      </header>
      {/* Resto do componente */}
    </div>
  );
};

export default UserManagement;
```

**Estrutura de Arquivos:**
```
src/
├── components/    # Componentes reutilizáveis
│   └── ComponentName/
│       ├── ComponentName.jsx
│       ├── ComponentName.css
│       └── index.js
├── pages/        # Páginas da aplicação
├── services/     # Serviços de API
├── utils/        # Utilitários
└── assets/       # Recursos estáticos
```

### CSS/Styles

```css
/* Classes: kebab-case */
.user-management {
  padding: 24px;
}

.user-management__header {
  margin-bottom: 16px;
}

.user-management__table {
  width: 100%;
}

/* Estados: --modifier */
.button--primary {
  background-color: var(--primary-color);
}

.button--disabled {
  opacity: 0.5;
}
```

## 🔄 Processo de Pull Request

### 1. Criando uma Branch

```bash
# Atualizar main
git checkout main
git pull upstream main

# Criar nova branch
git checkout -b feat/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

### 2. Desenvolvendo

- Faça commits pequenos e focados
- Teste suas mudanças localmente
- Siga os padrões de código estabelecidos
- Adicione testes se necessário

### 3. Preparando o PR

```bash
# Atualizar com main antes do PR
git checkout main
git pull upstream main
git checkout sua-branch
git rebase main

# Push da branch
git push origin sua-branch
```

### 4. Abrindo o Pull Request

**Template de PR:**

```markdown
## 📝 Descrição

Breve descrição das mudanças realizadas.

## 🔧 Tipo de Mudança

- [ ] Bug fix (mudança que corrige um problema)
- [ ] Nova feature (mudança que adiciona funcionalidade)
- [ ] Breaking change (correção ou feature que quebra funcionalidade existente)
- [ ] Documentação

## 🧪 Como Testar

1. Passo 1
2. Passo 2
3. Resultado esperado

## 📸 Screenshots (se aplicável)

Antes / Depois

## ✅ Checklist

- [ ] Meu código segue os padrões do projeto
- [ ] Fiz uma auto-revisão do meu código
- [ ] Comentei o código em partes complexas
- [ ] Fiz as mudanças correspondentes na documentação
- [ ] Minhas mudanças não geram novos warnings
- [ ] Adicionei testes que provam que minha correção/feature funciona
- [ ] Testes novos e existentes passam localmente
```

## 🐛 Reportando Bugs

### Antes de Reportar

1. Verifique se o bug já foi reportado nas [Issues](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i/issues)
2. Reproduza o bug em um ambiente limpo
3. Colete informações relevantes

### Template de Bug Report

```markdown
**Descrição do Bug**
Descrição clara e concisa do problema.

**Reproduzir**
Passos para reproduzir o comportamento:
1. Vá para '...'
2. Clique em '....'
3. Role até '....'
4. Veja o erro

**Comportamento Esperado**
Descrição do que deveria acontecer.

**Screenshots**
Se aplicável, adicione screenshots.

**Ambiente:**
 - OS: [ex: Windows 10]
 - Browser: [ex: Chrome 96.0]
 - Versão do Node: [ex: 16.14.0]
 - Versão do Java: [ex: 17.0.1]

**Informações Adicionais**
Qualquer outra informação sobre o problema.
```

## 💡 Sugerindo Melhorias

### Template de Feature Request

```markdown
**A sua feature está relacionada a um problema? Descreva.**
Descrição clara do problema. Ex: Fico frustrado quando [...]

**Descreva a solução que você gostaria**
Descrição clara da solução desejada.

**Descreva alternativas consideradas**
Descrição de soluções alternativas consideradas.

**Informações Adicionais**
Qualquer outra informação sobre a feature.
```

## 📚 Documentação

### Atualizando Documentação

- **README.md**: Informações gerais do projeto
- **INSTALL.md**: Guia de instalação
- **docs/API.md**: Documentação da API
- **src/front/README.md**: Documentação do frontend
- **src/back/README.md**: Documentação do backend

### Padrões de Documentação

- Use Markdown para formatação
- Inclua exemplos de código quando apropriado
- Mantenha links funcionais
- Adicione screenshots para mudanças visuais

## 🧪 Testes

### Backend (Java)

```bash
# Executar todos os testes
./mvnw test

# Executar testes específicos
./mvnw test -Dtest=ClienteServiceTest

# Executar com coverage
./mvnw test jacoco:report
```

### Frontend (React)

```bash
# Executar testes
npm test

# Executar com coverage
npm test -- --coverage

# Executar testes específicos
npm test -- --testNamePattern="UserManagement"
```

### Padrões de Teste

```java
// Backend - Teste unitário
@ExtendWith(MockitoExtension.class)
class ClienteServiceTest {
    
    @Mock
    private ClienteRepository repository;
    
    @InjectMocks
    private ClienteService service;
    
    @Test
    @DisplayName("Deve criar cliente com sucesso")
    void shouldCreateClienteSuccessfully() {
        // Given
        Cliente cliente = new Cliente();
        when(repository.save(any())).thenReturn(cliente);
        
        // When
        Cliente result = service.create(cliente);
        
        // Then
        assertThat(result).isNotNull();
    }
}
```

```jsx
// Frontend - Teste de componente
import { render, screen, fireEvent } from '@testing-library/react';
import UserManagement from './UserManagement';

describe('UserManagement', () => {
  test('should render users list', () => {
    // Arrange
    const mockUsers = [{ id: 1, name: 'João' }];
    
    // Act
    render(<UserManagement users={mockUsers} />);
    
    // Assert
    expect(screen.getByText('João')).toBeInTheDocument();
  });
});
```

## 🏆 Reconhecimento

Contribuidores serão reconhecidos:

- **README.md**: Lista de contribuidores
- **CHANGELOG.md**: Créditos por versão
- **GitHub**: Histórico de contribuições

### Níveis de Contribuição

- 🥉 **Bronze**: 1-5 PRs aceitos
- 🥈 **Silver**: 6-15 PRs aceitos
- 🥇 **Gold**: 16+ PRs aceitos
- 💎 **Diamond**: Contribuições significativas ou liderança

## 📞 Comunidade

### Canais de Comunicação

- **GitHub Issues**: Bugs e features
- **GitHub Discussions**: Discussões gerais
- **Pull Requests**: Review de código

### Código de Conduta

- Seja respeitoso e inclusivo
- Aceite críticas construtivas
- Foque no que é melhor para a comunidade
- Mostre empatia com outros membros

### Dúvidas?

- Crie uma [Issue](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i/issues) com a label `question`
- Consulte a [documentação existente](docs/)

---

## 🎉 Obrigado!

Suas contribuições fazem a diferença! Cada bug corrigido, feature adicionada ou documentação melhorada ajuda a tornar o Manager.io melhor para todos.

**Happy Coding!** 🚀
