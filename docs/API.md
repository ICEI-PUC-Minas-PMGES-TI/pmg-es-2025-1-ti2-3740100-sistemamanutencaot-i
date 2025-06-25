# 📡 API Documentation - Manager.io

Documentação completa da API REST do sistema Manager.io.

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Autenticação](#-autenticação)
- [Endpoints](#-endpoints)
- [Modelos de Dados](#-modelos-de-dados)
- [Códigos de Status](#-códigos-de-status)
- [Exemplos de Uso](#-exemplos-de-uso)
- [Rate Limiting](#-rate-limiting)

## 🌐 Visão Geral

**Base URL:** `http://localhost:8080`  
**Versão:** v1  
**Formato:** JSON  
**Charset:** UTF-8

### Headers Padrão
```http
Content-Type: application/json
Accept: application/json
Authorization: Bearer {token}
```

## 🔐 Autenticação

### Login
```http
POST /auth/login
```

**Request:**
```json
{
  "email": "usuario@example.com",
  "senha": "senha123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "tipo": "Bearer",
  "expiracao": "2025-01-01T12:00:00Z",
  "usuario": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@example.com",
    "role": "GERENTE"
  }
}
```

## 📊 Endpoints

### 👥 Clientes

#### Listar Clientes
```http
GET /clientes
```

**Query Parameters:**
- `page` (optional): Número da página (default: 0)
- `size` (optional): Tamanho da página (default: 20)
- `sort` (optional): Campo para ordenação (default: id)
- `search` (optional): Termo de busca

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "pessoa": {
        "nome": "João Silva",
        "cpf": "123.456.789-00",
        "email": "joao@email.com"
      },
      "telefone": "(11) 99999-9999",
      "endereco": "Rua A, 123",
      "dataCriacao": "2025-01-01T10:00:00Z",
      "dataAtualizacao": "2025-01-01T10:00:00Z"
    }
  ],
  "pageable": {
    "sort": { "sorted": false },
    "pageNumber": 0,
    "pageSize": 20
  },
  "totalElements": 1,
  "totalPages": 1,
  "first": true,
  "last": true
}
```

#### Buscar Cliente por ID
```http
GET /clientes/{id}
```

**Response:**
```json
{
  "id": 1,
  "pessoa": {
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "email": "joao@email.com"
  },
  "telefone": "(11) 99999-9999",
  "endereco": "Rua A, 123",
  "dataCriacao": "2025-01-01T10:00:00Z",
  "dataAtualizacao": "2025-01-01T10:00:00Z"
}
```

#### Criar Cliente
```http
POST /clientes
```

**Request:**
```json
{
  "pessoa": {
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "email": "joao@email.com"
  },
  "telefone": "(11) 99999-9999",
  "endereco": "Rua A, 123"
}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "pessoa": {
    "nome": "João Silva",
    "cpf": "123.456.789-00",
    "email": "joao@email.com"
  },
  "telefone": "(11) 99999-9999",
  "endereco": "Rua A, 123",
  "dataCriacao": "2025-01-01T10:00:00Z",
  "dataAtualizacao": "2025-01-01T10:00:00Z"
}
```

#### Atualizar Cliente
```http
PUT /clientes/{id}
```

**Request:**
```json
{
  "pessoa": {
    "nome": "João Silva Santos",
    "cpf": "123.456.789-00",
    "email": "joao.santos@email.com"
  },
  "telefone": "(11) 88888-8888",
  "endereco": "Rua B, 456"
}
```

#### Excluir Cliente
```http
DELETE /clientes/{id}
```

**Response:** `204 No Content`

### 🔧 Técnicos

#### Listar Técnicos
```http
GET /tecnicos
```

**Query Parameters:**
- `page`, `size`, `sort`, `search` (mesmos parâmetros dos clientes)
- `especialidade` (optional): Filtrar por especialidade
- `nivel` (optional): Filtrar por nível

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "nome": "Maria Santos",
      "cpf": "987.654.321-00",
      "email": "maria@empresa.com",
      "especialidade": "Hardware",
      "nivel": "Senior",
      "ativo": true,
      "dataCriacao": "2025-01-01T09:00:00Z"
    }
  ],
  "totalElements": 1,
  "totalPages": 1
}
```

#### Buscar Técnico por ID
```http
GET /tecnicos/{id}
```

#### Criar Técnico
```http
POST /tecnicos
```

**Request:**
```json
{
  "nome": "Maria Santos",
  "cpf": "987.654.321-00",
  "email": "maria@empresa.com",
  "especialidade": "Hardware",
  "nivel": "Senior"
}
```

#### Atualizar Técnico
```http
PUT /tecnicos/{id}
```

#### Excluir Técnico
```http
DELETE /tecnicos/{id}
```

### 📋 Ordens de Serviço

#### Listar Ordens de Serviço
```http
GET /ordens-servico
```

**Query Parameters:**
- `status` (optional): Filtrar por status
- `tecnicoId` (optional): Filtrar por técnico
- `clienteId` (optional): Filtrar por cliente
- `dataInicio` (optional): Data inicial (formato: YYYY-MM-DD)
- `dataFim` (optional): Data final

**Response:**
```json
{
  "content": [
    {
      "id": 1,
      "numero": "OS-2025-001",
      "cliente": {
        "id": 1,
        "pessoa": {
          "nome": "João Silva"
        }
      },
      "tecnico": {
        "id": 1,
        "nome": "Maria Santos"
      },
      "equipamento": "Notebook Dell Inspiron",
      "defeito": "Não liga",
      "diagnostico": "Fonte queimada",
      "status": "EM_ANDAMENTO",
      "prioridade": "MEDIA",
      "dataAbertura": "2025-01-01T08:00:00Z",
      "dataPrevisao": "2025-01-03T17:00:00Z",
      "valorOrcamento": 150.00,
      "observacoes": "Cliente relatou que parou de funcionar ontem"
    }
  ],
  "totalElements": 1
}
```

#### Criar Ordem de Serviço
```http
POST /ordens-servico
```

**Request:**
```json
{
  "clienteId": 1,
  "equipamento": "Notebook Dell Inspiron",
  "defeito": "Não liga",
  "prioridade": "MEDIA",
  "observacoes": "Cliente relatou que parou de funcionar ontem"
}
```

#### Atualizar Status da Ordem
```http
PATCH /ordens-servico/{id}/status
```

**Request:**
```json
{
  "status": "CONCLUIDO",
  "diagnostico": "Fonte substituída",
  "solucao": "Instalação de nova fonte 65W",
  "valorFinal": 180.00
}
```

### 🏪 Lojas

#### Listar Lojas
```http
GET /lojas
```

#### Criar Loja
```http
POST /lojas
```

**Request:**
```json
{
  "nome": "TechFix Centro",
  "cnpj": "12.345.678/0001-90",
  "endereco": "Rua Principal, 100",
  "telefone": "(11) 3333-4444",
  "email": "centro@techfix.com"
}
```

## 📝 Modelos de Dados

### Cliente
```json
{
  "id": "number",
  "pessoa": {
    "nome": "string (required, 3-100 chars)",
    "cpf": "string (required, formato: XXX.XXX.XXX-XX)",
    "email": "string (required, formato email válido)"
  },
  "telefone": "string (optional, formato: (XX) XXXXX-XXXX)",
  "endereco": "string (optional, max 200 chars)",
  "dataCriacao": "datetime (auto)",
  "dataAtualizacao": "datetime (auto)"
}
```

### Técnico
```json
{
  "id": "number",
  "nome": "string (required, 3-100 chars)",
  "cpf": "string (required, formato: XXX.XXX.XXX-XX)",
  "email": "string (required, formato email válido)",
  "especialidade": "string (required, enum: ['Hardware', 'Software', 'Rede', 'Mobile'])",
  "nivel": "string (required, enum: ['Junior', 'Pleno', 'Senior'])",
  "ativo": "boolean (default: true)",
  "dataCriacao": "datetime (auto)"
}
```

### Ordem de Serviço
```json
{
  "id": "number",
  "numero": "string (auto-generated)",
  "clienteId": "number (required)",
  "tecnicoId": "number (optional)",
  "equipamento": "string (required, 3-100 chars)",
  "defeito": "string (required, 10-500 chars)",
  "diagnostico": "string (optional, max 1000 chars)",
  "solucao": "string (optional, max 1000 chars)",
  "status": "enum (required, values: ['ABERTO', 'EM_ANDAMENTO', 'AGUARDANDO_PECA', 'CONCLUIDO', 'CANCELADO'])",
  "prioridade": "enum (required, values: ['BAIXA', 'MEDIA', 'ALTA', 'URGENTE'])",
  "dataAbertura": "datetime (auto)",
  "dataPrevisao": "datetime (optional)",
  "dataConclusao": "datetime (optional)",
  "valorOrcamento": "decimal (optional, precision: 10,2)",
  "valorFinal": "decimal (optional, precision: 10,2)",
  "observacoes": "string (optional, max 1000 chars)"
}
```

## 🚦 Códigos de Status

### Success (2xx)
- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `204 No Content` - Recurso excluído com sucesso

### Client Error (4xx)
- `400 Bad Request` - Dados inválidos na requisição
- `401 Unauthorized` - Token ausente ou inválido
- `403 Forbidden` - Sem permissão para acessar o recurso
- `404 Not Found` - Recurso não encontrado
- `409 Conflict` - Conflito (ex: CPF já cadastrado)
- `422 Unprocessable Entity` - Erro de validação

### Server Error (5xx)
- `500 Internal Server Error` - Erro interno do servidor
- `503 Service Unavailable` - Serviço temporariamente indisponível

### Estrutura de Erro
```json
{
  "timestamp": "2025-01-01T10:00:00Z",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "path": "/clientes",
  "details": [
    {
      "field": "pessoa.nome",
      "message": "Nome é obrigatório"
    },
    {
      "field": "pessoa.cpf",
      "message": "CPF inválido"
    }
  ]
}
```

## 🔧 Exemplos de Uso

### JavaScript/Axios
```javascript
// Configurar cliente axios
const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

// Buscar clientes
const clientes = await api.get('/clientes');

// Criar cliente
const novoCliente = await api.post('/clientes', {
  pessoa: {
    nome: 'João Silva',
    cpf: '123.456.789-00',
    email: 'joao@email.com'
  },
  telefone: '(11) 99999-9999'
});
```

### cURL
```bash
# Listar clientes
curl -X GET "http://localhost:8080/clientes" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Criar cliente
curl -X POST "http://localhost:8080/clientes" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "pessoa": {
      "nome": "João Silva",
      "cpf": "123.456.789-00",
      "email": "joao@email.com"
    },
    "telefone": "(11) 99999-9999"
  }'
```

## 🛡 Rate Limiting

- **Limite:** 100 requisições por minuto por IP
- **Header de resposta:** `X-RateLimit-Remaining`
- **Quando excedido:** Status 429 Too Many Requests

## 🔍 Filtros e Busca

### Parâmetros de Query Suportados

#### Paginação
- `page`: Número da página (baseado em 0)
- `size`: Tamanho da página (max: 100)
- `sort`: Campo de ordenação (formato: `campo,direção`)

#### Busca
- `search`: Busca textual em campos principais
- Campos específicos: `nome`, `email`, `cpf`

#### Filtros
- `status`: Filtro por status
- `dataInicio` / `dataFim`: Filtro por período
- `ativo`: Filtro por registros ativos/inativos

### Exemplo de URL Complexa
```
GET /ordens-servico?page=0&size=10&sort=dataAbertura,desc&status=EM_ANDAMENTO&tecnicoId=1&dataInicio=2025-01-01&dataFim=2025-01-31
```

---

## 📞 Suporte

- **Postman Collection:** [Download](./postman/manager-io-api.json)
- **Swagger UI:** http://localhost:8080/swagger-ui.html
- **Issues:** [GitHub Issues](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i/issues)
