import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ForgotPasswordPage.module.css';
import Logo from "./ManagerIO.png";

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [isTechnician, setIsTechnician] = useState(true);
    const [isSwitching, setIsSwitching] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    
    const [formData, setFormData] = useState({
        email: '',
        newPassword: '',
        confirmPassword: ''
    });
    
    const handleRoleChange = (role) => {
        setIsSwitching(true);
        setTimeout(() => {
            setIsTechnician(role === 'technician');
            setIsSwitching(false);
        }, 500);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação básica
        if (formData.newPassword !== formData.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }
        
        if (formData.newPassword.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }
        
        // Simular processamento
        setTimeout(() => {
            setIsSuccess(true);
            // Aqui você faria a chamada API para atualizar a senha
            // Ex: axios.post('/api/reset-password', formData)
        }, 1000);
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
                    <h2 className={styles['login-title']}>Redefinir senha como:</h2>
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
                    
                    <div className={styles['form-container']}>
                        {isSuccess ? (
                            <div className={`${styles['login-form']} ${styles['success-container']}`}>
                                <div className={styles['success-icon']}>
                                    <i className="fas fa-check-circle"></i>
                                </div>
                                <h3 className={styles['form-title']}>Senha redefinida!</h3>
                                <p className={styles['success-text']}>
                                    Sua senha foi redefinida com sucesso.
                                </p>
                                <button 
                                    className={styles['submit-button']}
                                    onClick={() => navigate('/login')}
                                >
                                    Voltar para o login
                                </button>
                            </div>
                        ) : (
                            <form 
                                autoComplete="off" 
                                className={`${styles['login-form']} ${isSwitching ? styles.switching : ''}`} 
                                onSubmit={handleSubmit}
                            >
                                <h3 className={styles['form-title']}>Redefinir senha</h3>
                                
                                <div className={styles['input-group']}>
                                    <label className={styles['input-label']} htmlFor="email">
                                        {isTechnician ? "E-mail do técnico" : "E-mail do gerente"}
                                    </label>
                                    <input 
                                        className={styles['input-field']} 
                                        id="email" 
                                        name="email"
                                        placeholder="seu.email@exemplo.com" 
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                
                                <div className={styles['input-group']}>
                                    <label className={styles['input-label']} htmlFor="newPassword">
                                        Nova senha
                                    </label>
                                    <div className={styles['password-container']}>
                                        <input 
                                            className={styles['input-field']} 
                                            id="newPassword" 
                                            name="newPassword"
                                            placeholder="Digite sua nova senha" 
                                            type={passwordVisible ? "text" : "password"}
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <i 
                                            className={`fas ${passwordVisible ? "fa-eye" : "fa-eye-slash"} ${styles['password-icon']}`} 
                                            onClick={togglePasswordVisibility}
                                        ></i>
                                    </div>
                                </div>
                                
                                <div className={styles['input-group']}>
                                    <label className={styles['input-label']} htmlFor="confirmPassword">
                                        Confirmar nova senha
                                    </label>
                                    <div className={styles['password-container']}>
                                        <input 
                                            className={styles['input-field']} 
                                            id="confirmPassword" 
                                            name="confirmPassword"
                                            placeholder="Confirme sua nova senha" 
                                            type={confirmPasswordVisible ? "text" : "password"}
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <i 
                                            className={`fas ${confirmPasswordVisible ? "fa-eye" : "fa-eye-slash"} ${styles['password-icon']}`} 
                                            onClick={toggleConfirmPasswordVisibility}
                                        ></i>
                                    </div>
                                </div>
                                
                                <button className={styles['submit-button']} type="submit">
                                    Redefinir senha
                                </button>
                                
                                <div className={styles['back-to-login']}>
                                    <button 
                                        type="button"
                                        className={styles['back-button']}
                                        onClick={() => navigate('/login')}
                                    >
                                        Voltar para o login
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;