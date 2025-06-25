# 🎨 Frontend - Manager.io

Sistema de interface web desenvolvido em React para gestão de manutenção de TI.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Componentes Principais](#-componentes-principais)
- [Rotas e Navegação](#-rotas-e-navegação)
- [Guia de Desenvolvimento](#-guia-de-desenvolvimento)
- [Padrões de Código](#-padrões-de-código)

## 🛠 Tecnologias

- **React** 19.1.0 - Biblioteca para construção da interface
- **React Router DOM** - Gerenciamento de rotas
- **Axios** - Cliente HTTP para comunicação com API
- **Vite** - Build tool e servidor de desenvolvimento
- **Chart.js** - Biblioteca para gráficos e dashboards
- **Bootstrap** - Framework CSS para estilização
- **FontAwesome** - Ícones

## 📂 Estrutura do Projeto

```
src/front/FrontEnd/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── css/          # Estilos globais
│   │   └── images/       # Imagens e ícones
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Usuarios/     # Gerenciamento de usuários
│   │   ├── Dashboard/    # Painel principal
│   │   └── ...
│   ├── pages/           # Páginas principais
│   ├── App.jsx          # Componente raiz
│   ├── main.jsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js >= 16.0.0
- npm >= 8.0.0

### Instalação

```bash
# Navegar para o diretório do frontend
cd src/front/FrontEnd

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Ou usar o script alternativo
npm start
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto frontend:

```env
VITE_API_BASE_URL=http://localhost:8080
VITE_APP_NAME=Manager.io
```

## 🧩 Componentes Principais

### Usuarios Component
Gerenciamento completo de usuários (clientes e técnicos)

**Funcionalidades:**
- ✅ Listagem paginada
- ✅ Pesquisa em tempo real
- ✅ Filtros por tipo de usuário
- ✅ CRUD completo (Create, Read, Update, Delete)
- ✅ Modal de confirmação para exclusões

**Props:**
```jsx
// Exemplo de uso
<Usuarios />
```

### Dashboard Component
Painel principal com métricas e indicadores

**Funcionalidades:**
- 📊 Gráficos de performance
- 📈 Indicadores-chave
- 🔔 Notificações

## 🛣 Rotas e Navegação

```jsx
// Estrutura de rotas principais
/                     # Dashboard
/usuarios            # Gerenciamento de usuários
/cadastro-cliente    # Cadastro de cliente
/cadastro-tecnico    # Cadastro de técnico
/editar-cliente/:id  # Edição de cliente
/editar-tecnico/:id  # Edição de técnico
```

## 💻 Guia de Desenvolvimento

### Convenções de Nomenclatura

- **Componentes:** PascalCase (`UserManagement.jsx`)
- **Arquivos:** camelCase (`userService.js`)
- **Classes CSS:** kebab-case (`.user-management`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_ITEMS_PER_PAGE`)

### Estrutura de Componentes

```jsx
import React, { useState, useEffect } from 'react';
import './ComponentName.css';

const ComponentName = ({ props }) => {
  // Estados
  const [state, setState] = useState(initialValue);
  
  // Effects
  useEffect(() => {
    // Lógica do effect
  }, [dependencies]);
  
  // Handlers
  const handleAction = () => {
    // Lógica do handler
  };
  
  // Render
  return (
    <div className="component-name">
      {/* JSX do componente */}
    </div>
  );
};

export default ComponentName;
```

### Padrões de API

```jsx
// Serviço de API
const fetchUsers = async () => {
  try {
    const response = await axios.get('/api/users');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};
```

## 📋 Padrões de Código

### ESLint Configuration
O projeto usa ESLint com as seguintes regras principais:
- Uso obrigatório de PropTypes para componentes
- Preferência por arrow functions
- Importações organizadas
- Sem variáveis não utilizadas

### CSS Guidelines
- Use CSS Modules ou styled-components para estilos de componente
- Mantenha estilos globais no `index.css`
- Use variáveis CSS para cores e espaçamentos consistentes

```css
:root {
  --primary-color: #0B1446;
  --secondary-color: #E6E6E6;
  --success-color: #28a745;
  --danger-color: #dc3545;
}
```

## 🧪 Testes

```bash
# Executar testes
npm test

# Executar testes com coverage
npm run test:coverage
```

## 📦 Build e Deploy

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de CORS**: Verificar configuração do backend
2. **Dependências**: Executar `npm install` novamente
3. **Porta ocupada**: Alterar porta no `vite.config.js`

### Debug

```bash
# Executar com logs detalhados
npm run dev -- --debug

# Limpar cache
npm run clean
```

---

## 📞 Suporte

Para dúvidas sobre o frontend, consulte:
- Documentação do React: https://react.dev/
- Documentação do Vite: https://vitejs.dev/
- Issues do projeto no GitHub
