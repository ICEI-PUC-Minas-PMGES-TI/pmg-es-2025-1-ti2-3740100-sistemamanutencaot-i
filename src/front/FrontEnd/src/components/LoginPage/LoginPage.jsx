import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import ImagemTecnico from "../../assets/images/logintecnico.png";
import ImagemGerente from "../../assets/images/logingerente.png";
import Logo from "./ManagerIO.png";

const LoginPage = () => {
    const navigate = useNavigate();
    const [isTechnician, setIsTechnician] = useState(true);
    const [isSwitching, setIsSwitching] = useState(false);
    
    const handleRoleChange = (role) => {
        setIsSwitching(true);
        setTimeout(() => {
            setIsTechnician(role === 'technician');
            setIsSwitching(false);
        }, 500);
    };

    const handleRegisterClick = () => {
        if (isTechnician) {
            //navigate("/cadastro-tecnico");
        } else {
            navigate("/cadastro-loja");
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
            : "http://localhost:8080/lojas/login-loja";
        
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
                    localStorage.setItem("tipoUsuario", "tecnico");
                    localStorage.setItem("tecnico", JSON.stringify(userData));
                    localStorage.setItem("id_tecnico", userData.id);
                    navigate("/home-tecnico");
                } else {
                    localStorage.setItem("tipoUsuario", "gerente");
                    localStorage.setItem("loja", JSON.stringify(userData));
                    localStorage.setItem("id_loja", userData.id);
                    localStorage.setItem("id_gerente", userData.id); // Adicionado para compatibilidade com Configuracoes.jsx
                    navigate("/home-gerente");
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
            {/* Círculos com animação */}
            <div 
                className={`${styles.circle} ${styles['circle-top']}`} 
                style={{ 
                    transform: isTechnician 
                        ? 'translate(-50%, -50%)' 
                        : 'translate(50%, -50%)' 
                }}
            ></div>
            <div 
                className={`${styles.circle} ${styles['circle-bottom']}`} 
                style={{ 
                    transform: isTechnician 
                        ? 'translate(50%, 50%)' 
                        : 'translate(-50%, 50%)' 
                }}
            ></div>
            
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
                    
                    {/* Container com animação de troca */}
                    <div className={`${styles['form-container']} ${!isTechnician ? styles['inverted'] : ''}`}>
                        {/* Formulário de login com animação */}
                        <form 
                            autoComplete="off" 
                            className={`${styles['login-form']} ${isSwitching ? styles.switching : ''}`} 
                            onSubmit={handleSubmit}
                        >
                            <h3 className={styles['form-title']}>Login</h3>
                            
                            <div className={styles['input-group']}>
                                <label className={styles['input-label']} htmlFor="email">Email</label>
                                <input 
                                    className={styles['input-field']} 
                                    id="email" 
                                    name="email"
                                    placeholder="username@gmail.com" 
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                            <div className={styles['input-group']}>
                                <label className={styles['input-label']} htmlFor="password">Senha</label>
                                <div className={styles['password-container']}>
                                    <input 
                                        className={styles['input-field']} 
                                        id="password" 
                                        name="senha"
                                        placeholder="Password" 
                                        type="password"
                                        value={formData.senha}
                                        onChange={handleChange}
                                        required
                                    />
                                    <i className={`fas fa-eye-slash ${styles['password-icon']}`}></i>
                                </div>
                            </div>
                            
                            <a className={styles['forgot-password']} href="#">Esqueceu a senha?</a>
                            
                            <button className={styles['submit-button']} type="submit">
                                Entrar
                            </button>
                            
                            {isTechnician ? (
                                <p className={styles['register-text']}>
                                    Ainda não tem uma conta? <strong className={styles['register-link']}>Peça para seu gerente te registrar.</strong>
                                </p>
                            ) : (
                                <div className={styles['register-text']}>
                                    <div>Ainda não tem uma conta?</div>
                                    <strong onClick={handleRegisterClick} className={styles['register-link']}>
                                        Registre-se de graça
                                    </strong>
                                </div>
                            )}

                        </form>
                        
                        {/* Container da imagem com animação e cor de fundo condicional */}
                        <div className={`${styles['image-container']} ${!isTechnician ? styles['manager-mode'] : ''} ${isSwitching ? styles.switching : ''}`}>
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