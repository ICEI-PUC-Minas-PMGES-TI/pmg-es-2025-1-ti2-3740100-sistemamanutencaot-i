public class Gerente {
    private int id;
    private String nome;
    private String email;
    private String senha;

    // Construtor Gerente
    public Gerente() {
    }

    // Construtor com parâmetros
    public Gerente(int id, String nome, String email, String senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    // Gett e Set
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    // Método para exibir informações do gerente, @francisco isso tá certo mano eu vi no chat mais não tenho certeza ainda
    @Override
    public String toString() {
        return "Gerente {" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
