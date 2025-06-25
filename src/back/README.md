# ⚙️ Backend - Manager.io

API REST desenvolvida em Spring Boot para gestão de manutenção de TI.

## 📋 Índice

- [Tecnologias](#-tecnologias)
- [Arquitetura](#-arquitetura)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Endpoints da API](#-endpoints-da-api)
- [Modelo de Dados](#-modelo-de-dados)
- [Segurança](#-segurança)
- [Testes](#-testes)
- [Deploy](#-deploy)

## 🛠 Tecnologias

- **Java** 17+ - Linguagem de programação
- **Spring Boot** 3.x - Framework principal
- **Spring Data JPA** - Persistência de dados
- **Spring Security** - Autenticação e autorização
- **MySQL** - Banco de dados
- **Maven** - Gerenciamento de dependências
- **Docker** - Containerização (opcional)

## 🏗 Arquitetura

```
src/main/java/
├── config/           # Configurações do Spring
├── controller/       # Controladores REST
├── service/         # Lógica de negócio
├── repository/      # Acesso a dados
├── model/           # Entidades JPA
├── dto/             # Data Transfer Objects
├── exception/       # Tratamento de exceções
└── util/            # Utilitários
```

### Padrão MVC
- **Controller**: Recebe requisições HTTP
- **Service**: Contém lógica de negócio
- **Repository**: Acessa dados no banco

## 🚀 Instalação e Configuração

### Pré-requisitos

- Java 17+
- Maven 3.8+
- MySQL 8.0+

### Configuração do Banco

```sql
-- Criar banco de dados
CREATE DATABASE manager_io;

-- Criar usuário (opcional)
CREATE USER 'manager_user'@'localhost' IDENTIFIED BY 'manager_pass';
GRANT ALL PRIVILEGES ON manager_io.* TO 'manager_user'@'localhost';
```

### Arquivo application.properties

```properties
# Configurações do banco
spring.datasource.url=jdbc:mysql://localhost:3306/manager_io
spring.datasource.username=manager_user
spring.datasource.password=manager_pass
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Configurações do servidor
server.port=8080
server.servlet.context-path=/

# CORS
cors.allowed-origins=http://localhost:3000

# Logs
logging.level.com.manager=DEBUG
```

### Executar o projeto

```bash
# Navegar para o diretório backend
cd src/back/backend

# Compilar o projeto
./mvnw clean compile

# Executar testes
./mvnw test

# Executar a aplicação
./mvnw spring-boot:run
```

## 🌐 Endpoints da API

### Clientes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/clientes` | Lista todos os clientes |
| GET | `/clientes/{id}` | Busca cliente por ID |
| POST | `/clientes` | Cria novo cliente |
| PUT | `/clientes/{id}` | Atualiza cliente |
| DELETE | `/clientes/{id}` | Remove cliente |

**Exemplo de Request (POST /clientes):**
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

### Técnicos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/tecnicos` | Lista todos os técnicos |
| GET | `/tecnicos/{id}` | Busca técnico por ID |
| POST | `/tecnicos` | Cria novo técnico |
| PUT | `/tecnicos/{id}` | Atualiza técnico |
| DELETE | `/tecnicos/{id}` | Remove técnico |

**Exemplo de Request (POST /tecnicos):**
```json
{
  "nome": "Maria Santos",
  "cpf": "987.654.321-00",
  "email": "maria@empresa.com",
  "especialidade": "Hardware",
  "nivel": "Senior"
}
```

### Ordens de Serviço

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/ordens-servico` | Lista todas as ordens |
| GET | `/ordens-servico/{id}` | Busca ordem por ID |
| POST | `/ordens-servico` | Cria nova ordem |
| PUT | `/ordens-servico/{id}` | Atualiza ordem |
| DELETE | `/ordens-servico/{id}` | Remove ordem |
| PATCH | `/ordens-servico/{id}/status` | Atualiza status |

## 🗃 Modelo de Dados

### Entidade Cliente
```java
@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToOne(cascade = CascadeType.ALL)
    private Pessoa pessoa;
    
    private String telefone;
    private String endereco;
    
    // getters e setters
}
```

### Entidade Técnico
```java
@Entity
@Table(name = "tecnicos")
public class Tecnico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String nome;
    private String cpf;
    private String email;
    private String especialidade;
    private String nivel;
    
    // getters e setters
}
```

### Relacionamentos
- Cliente 1:N OrdemServico
- Tecnico 1:N OrdemServico
- Loja 1:N Cliente
- OrdemServico 1:N ItemServico

## 🔒 Segurança

### Configuração do Spring Security
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .cors().configurationSource(corsConfigurationSource())
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .anyRequest().authenticated()
            );
        return http.build();
    }
}
```

### Roles e Permissões
- **ADMIN**: Acesso total ao sistema
- **GERENTE**: Gerencia técnicos e visualiza relatórios
- **TECNICO**: Acessa apenas suas ordens de serviço
- **CLIENTE**: Visualiza apenas suas informações

## 🧪 Testes

### Testes Unitários
```java
@ExtendWith(MockitoExtension.class)
class ClienteServiceTest {
    
    @Mock
    private ClienteRepository repository;
    
    @InjectMocks
    private ClienteService service;
    
    @Test
    void shouldCreateCliente() {
        // Arrange
        Cliente cliente = new Cliente();
        when(repository.save(any())).thenReturn(cliente);
        
        // Act
        Cliente result = service.create(cliente);
        
        // Assert
        assertThat(result).isNotNull();
    }
}
```

### Testes de Integração
```java
@SpringBootTest
@AutoConfigureTestDatabase
@Transactional
class ClienteControllerIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
    void shouldGetAllClientes() {
        ResponseEntity<Cliente[]> response = 
            restTemplate.getForEntity("/clientes", Cliente[].class);
        
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }
}
```

### Executar Testes
```bash
# Todos os testes
./mvnw test

# Testes específicos
./mvnw test -Dtest=ClienteServiceTest

# Com coverage
./mvnw test jacoco:report
```

## 🚀 Deploy

### Profile de Produção
```properties
# application-prod.properties
spring.profiles.active=prod
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DATABASE_USERNAME}
spring.datasource.password=${DATABASE_PASSWORD}

# Desabilitar SQL logs
spring.jpa.show-sql=false
logging.level.org.hibernate.SQL=WARN
```

### Docker
```dockerfile
FROM openjdk:17-jdk-slim
VOLUME /tmp
COPY target/manager-io-backend.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Build para Produção
```bash
# Compilar com profile de produção
./mvnw clean package -Pprod

# Executar JAR
java -jar target/manager-io-backend.jar --spring.profiles.active=prod
```

## 📊 Monitoramento

### Health Check
- GET `/actuator/health` - Status da aplicação
- GET `/actuator/metrics` - Métricas da aplicação
- GET `/actuator/info` - Informações da build

### Logs
```properties
# Configuração de logs
logging.file.name=logs/manager-io.log
logging.pattern.file=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n
logging.level.org.springframework.security=DEBUG
```

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de conexão com banco**: Verificar credenciais e URL
2. **Porta ocupada**: Alterar `server.port` no application.properties
3. **CORS**: Configurar `cors.allowed-origins`

### Debug
```bash
# Executar com debug remoto
./mvnw spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
```

---

## 📞 Suporte

Para dúvidas sobre o backend, consulte:
- Spring Boot Documentation: https://spring.io/projects/spring-boot
- Spring Data JPA: https://spring.io/projects/spring-data-jpa
- Issues do projeto no GitHub
