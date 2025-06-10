import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Adicione este import
import styles from './LoginPage.module.css';
import ImagemTecnico from "../../assets/images/logintecnico.png";
import ImagemGerente from "../../assets/images/logingerente.png";
import Logo from "./ManagerIO.png";

const LoginPage = () => {
    const navigate = useNavigate(); // Hook para navegação
    const [isTechnician, setIsTechnician] = useState(true);
    
    const handleRoleChange = (role) => {
        setIsTechnician(role === 'technician');
    };

    const handleRegisterClick = () => {
        if (isTechnician) {
            navigate("/cadastro-tecnico"); // rota do cadastro técnico
        } else {
            navigate("/cadastro-loja");    // rota do cadastro loja/gerente
        }
    };
    
    const [formData, setFormData] = useState({
        email: "",
        senha: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Determina o endpoint com base no tipo de usuário
        const endpoint = isTechnician 
            ? "http://localhost:8080/tecnicos/login-tecnico" 
            : "http://localhost:8080/lojas/login-loja"; // Ajuste conforme seu endpoint
        
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const userData = await response.json();
                alert("Login realizado com sucesso!");
                
                // Armazena os dados de acordo com o tipo de usuário
                if (isTechnician) {
                    localStorage.setItem("tecnico", JSON.stringify(userData));
                    localStorage.setItem("id_tecnico", userData.id);
                    navigate("/home-tecnico");
                } else {
                    localStorage.setItem("loja", JSON.stringify(userData)); // Ou "gerente" se preferir
                    localStorage.setItem("id_loja", userData.id);
                    navigate("/home-gerente"); // Ajuste conforme sua rota
                }
            } else {
                const msg = await response.text();
                alert("Erro ao fazer login: " + msg);
            }
        } catch (error) {
            console.error("Erro ao realizar login:", error);
            alert("Erro de rede ou no servidor.");
        }
    };

    return (
        <div className={styles['login-container']}>
            {/* Círculos com posições invertidas quando gerente */}
            <div className={`${styles.circle} ${isTechnician ? styles['circle-top-left'] : styles['circle-top-right']}`}></div>
            <div className={`${styles.circle} ${isTechnician ? styles['circle-bottom-right'] : styles['circle-bottom-left']}`}></div>
            
            <div className={styles['content-wrapper']}>
                <div className={styles['logo-container']}>
                    <img src={Logo} alt="Logo" className={styles['feature-image']} />
                </div>

                <div className={styles['main-content']}>
                    <h2 className={styles['login-title']}>Logar como:</h2>
                    <div className={styles['role-buttons']}>
                        <button 
                            className={`${styles['role-button']} ${isTechnician ? styles.technician : ''}`}
                            onClick={() => handleRoleChange('technician')}
                        >
                            Técnico
                        </button>
                        <button 
                            className={`${styles['role-button']} ${!isTechnician ? styles.technician : ''}`}
                            onClick={() => handleRoleChange('manager')}
                        >
                            Gerente
                        </button>
                    </div>
                    
                    {/* Container com direção invertida quando gerente */}
                    <div className={`${styles['form-container']} ${!isTechnician ? styles['inverted'] : ''}`}>
                        {/* Formulário de login (sempre o mesmo) */}
                        <form autoComplete="off" className={styles['login-form']} onSubmit={handleSubmit}>
                            <h3 className={styles['form-title']}>Login</h3>
                            
                            <div className={styles['input-group']}>
                                <label className={styles['input-label']} htmlFor="email">Email</label>
                                <input 
                                    className={styles['input-field']} 
                                    id="email" 
                                    name="email" // Adicione name para o handleChange
                                    placeholder="username@gmail.com" 
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className={styles['input-group']}>
                                <label className={styles['input-label']} htmlFor="password">Password</label>
                                <div className={styles['password-container']}>
                                    <input 
                                        className={styles['input-field']} 
                                        id="password" 
                                        name="senha" // Adicione name para o handleChange
                                        placeholder="Password" 
                                        type="password"
                                        value={formData.senha}
                                        onChange={handleChange}
                                        required
                                    />
                                    <i className={`fas fa-eye-slash ${styles['password-icon']}`}></i>
                                </div>
                            </div>
                            
                            <a className={styles['forgot-password']} href="#">Forgot Password?</a>
                            
                            <button className={styles['submit-button']} type="submit">
                                Sign in
                            </button>
                            
                            <p className={styles['register-text']}>
                                Don't have an account yet?
                                <strong onClick={handleRegisterClick} className={styles['register-link']}> Register for free</strong>
                            </p>
                        </form>
                        
                        {/* Container da imagem - imagem muda conforme o perfil */}
                        <div className={styles['image-container']}>
                            <img 
                                src={isTechnician ? ImagemTecnico : ImagemGerente} 
                                alt={isTechnician ? "Imagem representando técnico" : "Imagem representando gerente"} 
                                className={styles['feature-image']} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;