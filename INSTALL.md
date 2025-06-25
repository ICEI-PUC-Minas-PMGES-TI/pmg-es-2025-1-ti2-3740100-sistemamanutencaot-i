# 🚀 Guia de Instalação - Manager.io

Guia completo para configuração e execução do sistema Manager.io em ambiente de desenvolvimento e produção.

## 📋 Índice

- [Pré-requisitos](#-pré-requisitos)
- [Instalação Rápida](#-instalação-rápida)
- [Configuração Detalhada](#-configuração-detalhada)
- [Docker Setup](#-docker-setup)
- [Troubleshooting](#-troubleshooting)
- [Scripts Úteis](#-scripts-úteis)

## 🛠 Pré-requisitos

### Software Necessário

| Software | Versão Mínima | Download |
|----------|---------------|----------|
| **Java JDK** | 17+ | [OpenJDK](https://openjdk.org/) |
| **Node.js** | 16.0+ | [Node.js](https://nodejs.org/) |
| **MySQL** | 8.0+ | [MySQL](https://dev.mysql.com/downloads/) |
| **Git** | 2.0+ | [Git](https://git-scm.com/) |
| **Docker** (opcional) | 20.0+ | [Docker](https://www.docker.com/) |

### Verificação dos Pré-requisitos

```bash
# Verificar Java
java -version

# Verificar Node.js
node --version
npm --version

# Verificar MySQL
mysql --version

# Verificar Git
git --version

# Verificar Docker (opcional)
docker --version
```

## ⚡ Instalação Rápida

### 1. Clone o Repositório
```bash
git clone https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i.git
cd pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i
```

### 2. Configure o Banco de Dados
```sql
-- Conectar ao MySQL como root
mysql -u root -p

-- Criar banco e usuário
CREATE DATABASE manager_io;
CREATE USER 'manager_user'@'localhost' IDENTIFIED BY 'manager_pass';
GRANT ALL PRIVILEGES ON manager_io.* TO 'manager_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Execute o Script de Setup
```bash
# Windows
./setup.bat

# Linux/Mac
./setup.sh
```

## 🔧 Configuração Detalhada

### Backend Configuration

1. **Navegue para o diretório do backend:**
```bash
cd src/back/backend
```

2. **Configure o application.properties:**
```properties
# src/back/backend/src/main/resources/application.properties
spring.datasource.url=jdbc:mysql://localhost:3306/manager_io
spring.datasource.username=manager_user
spring.datasource.password=manager_pass
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

server.port=8080
cors.allowed-origins=http://localhost:3000
```

3. **Execute o backend:**
```bash
# Compilar e executar
./mvnw clean install
./mvnw spring-boot:run

# Ou em modo debug
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
```

### Frontend Configuration

1. **Navegue para o diretório do frontend:**
```bash
cd src/front/FrontEnd
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
```bash
# Criar arquivo .env
echo "VITE_API_BASE_URL=http://localhost:8080" > .env
echo "VITE_APP_NAME=Manager.io" >> .env
```

4. **Execute o frontend:**
```bash
npm run dev
```

## 🐳 Docker Setup

### Docker Compose (Recomendado)

1. **Execute com Docker Compose:**
```bash
docker-compose up -d
```

2. **Arquivo docker-compose.yml:**
```yaml
version: '3.8'
services:
  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: rootpass
      MYSQL_DATABASE: manager_io
      MYSQL_USER: manager_user
      MYSQL_PASSWORD: manager_pass
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  backend:
    build: ./src/back/backend
    ports:
      - "8080:8080"
    depends_on:
      - mysql
    environment:
      SPRING_DATASOURCE_URL: jdbc:mysql://mysql:3306/manager_io
      SPRING_DATASOURCE_USERNAME: manager_user
      SPRING_DATASOURCE_PASSWORD: manager_pass

  frontend:
    build: ./src/front/FrontEnd
    ports:
      - "3000:3000"
    depends_on:
      - backend

volumes:
  mysql_data:
```

### Docker Individual

**Backend:**
```bash
cd src/back/backend
docker build -t manager-io-backend .
docker run -p 8080:8080 manager-io-backend
```

**Frontend:**
```bash
cd src/front/FrontEnd
docker build -t manager-io-frontend .
docker run -p 3000:3000 manager-io-frontend
```

## 🔍 Verificação da Instalação

### 1. Testando o Backend
```bash
# Health check
curl http://localhost:8080/actuator/health

# Testar endpoint de clientes
curl http://localhost:8080/clientes
```

### 2. Testando o Frontend
- Acesse: http://localhost:3000
- Verifique se a página de login carrega
- Teste a navegação entre páginas

### 3. Testando a Integração
- Faça login no sistema
- Tente criar um novo cliente
- Verifique se os dados aparecem na listagem

## 📊 Monitoramento e Logs

### Backend Logs
```bash
# Acompanhar logs em tempo real
tail -f logs/manager-io.log

# Logs do Spring Boot
./mvnw spring-boot:run | grep "ERROR\|WARN"
```

### Frontend Logs
```bash
# Console do navegador (F12 > Console)
# Ou logs do Vite
npm run dev -- --debug
```

## 🐛 Troubleshooting

### Problemas Comuns

#### 1. Erro de Conexão com Banco
```
Error: Could not connect to MySQL server
```
**Solução:**
- Verificar se MySQL está rodando: `sudo systemctl status mysql`
- Verificar credenciais no application.properties
- Testar conexão: `mysql -u manager_user -p manager_io`

#### 2. Porta Já em Uso
```
Port 8080 is already in use
```
**Solução:**
```bash
# Encontrar processo usando a porta
lsof -i :8080
# ou no Windows
netstat -ano | findstr :8080

# Matar processo
kill -9 <PID>
# ou no Windows
taskkill /PID <PID> /F
```

#### 3. CORS Error
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solução:**
- Verificar `cors.allowed-origins` no application.properties
- Adicionar URL do frontend na configuração

#### 4. Dependências Node.js
```
Module not found
```
**Solução:**
```bash
# Limpar cache e reinstalar
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Scripts de Diagnóstico

**Windows (diagnose.bat):**
```batch
@echo off
echo "=== Diagnóstico Manager.io ==="
echo "Java Version:"
java -version
echo "Node Version:"
node --version
echo "MySQL Status:"
mysqladmin -u root -p status
echo "Portas em uso:"
netstat -ano | findstr ":8080\|:3000\|:3306"
```

**Linux/Mac (diagnose.sh):**
```bash
#!/bin/bash
echo "=== Diagnóstico Manager.io ==="
echo "Java Version:"
java -version
echo "Node Version:"
node --version
echo "MySQL Status:"
sudo systemctl status mysql
echo "Portas em uso:"
lsof -i :8080,:3000,:3306
```

## 📝 Scripts Úteis

### Start Script (start.sh)
```bash
#!/bin/bash
echo "Iniciando Manager.io..."

# Iniciar backend
cd src/back/backend
./mvnw spring-boot:run &
BACKEND_PID=$!

# Aguardar backend inicializar
sleep 30

# Iniciar frontend
cd ../../../src/front/FrontEnd
npm run dev &
FRONTEND_PID=$!

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo "Sistema iniciado!"
echo "Acesse: http://localhost:3000"
```

### Stop Script (stop.sh)
```bash
#!/bin/bash
echo "Parando Manager.io..."

# Parar processos nas portas
kill $(lsof -t -i:8080) 2>/dev/null
kill $(lsof -t -i:3000) 2>/dev/null

echo "Sistema parado!"
```

### Reset Database Script (reset-db.sh)
```bash
#!/bin/bash
echo "Resetando banco de dados..."

mysql -u root -p -e "
DROP DATABASE IF EXISTS manager_io;
CREATE DATABASE manager_io;
GRANT ALL PRIVILEGES ON manager_io.* TO 'manager_user'@'localhost';
FLUSH PRIVILEGES;
"

echo "Banco resetado com sucesso!"
```

---

## 🆘 Suporte

### Logs Importantes
- Backend: `src/back/backend/logs/`
- Frontend: Console do navegador (F12)
- MySQL: `/var/log/mysql/error.log`

### Comandos de Emergência
```bash
# Parar todos os processos Java
pkill -f "java.*spring-boot"

# Parar todos os processos Node
pkill -f "node.*vite"

# Reiniciar MySQL
sudo systemctl restart mysql
```

### Contato
- Issues: [GitHub Issues](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2025-1-ti2-3740100-sistemamanutencaot-i/issues)
- Documentação: `/docs`
