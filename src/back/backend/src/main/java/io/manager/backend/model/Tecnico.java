import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Tecnico {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int IdTecnico;
    private String nome;
    private String cpf;
    private String cargo;
    private String email;
    private String senha;
    private int loja;

    public Tecnico() {
   }

    public Tecnico(int IdTecnico, String nome, String cpf, String cargo, String email, String senha, int loja)
    {
        this.IdTecnico = IdTecnico;
        this.nome = nome;
        this.cpf = cpf;
        this.cargo = cargo;
        this.email = email;
        this.senha = senha;
        this.loja = loja; 
    }

    // Getters e Setters
    public int getIdTecnico(){
        return IdTecnico;
    }

    public void setIdTecnico(int idTecnico) {
        this.IdTecnico = idTecnico;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
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

    public int getloja() {
        return loja;
    }

    public void setLoja(int loja) {
        this.loja = loja;
    }

    //metodos para exibir os dados do tecnico
    @Override
    public String toString() {
        return "Tecnico{" +
                "IdTecnico=" + IdTecnico +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", Cargo='" + Cargo + '\'' +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", loja=" + loja +
                '}';
    }

}
