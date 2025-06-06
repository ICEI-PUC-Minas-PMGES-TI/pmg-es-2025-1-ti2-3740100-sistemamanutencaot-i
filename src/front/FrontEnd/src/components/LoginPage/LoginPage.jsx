import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      {/* Large circles behind */}
      <div className="circle circle-top-left"></div>
      <div className="circle circle-bottom-right"></div>
      
      <div className="content-wrapper">
        {/* Logo top left */}
        <div className="logo-container">
          <img 
            alt="Blue abstract network logo icon" 
            className="logo-image" 
            src="https://storage.googleapis.com/a1aa/image/5966ccf2-9e51-46fe-3191-5276226d938d.jpg" 
          />
          <span className="logo-text">MANAGER.IO</span>
        </div>

        <div className="main-content">
          <h2 className="login-title">Logar como:</h2>
          <div className="role-buttons">
            <button className="role-button technician">Tecnico</button>
            <button className="role-button manager">Gerente</button>
          </div>
          
          <div className="form-container">
            {/* Left login form */}
            <form autoComplete="off" className="login-form">
              <h3 className="form-title">Login</h3>
              <div className="input-group">
                <label className="input-label" htmlFor="email">Email</label>
                <input 
                  className="input-field" 
                  id="email" 
                  placeholder="username@gmail.com" 
                  type="email"
                />
              </div>
              <div className="input-group">
                <label className="input-label" htmlFor="password">Password</label>
                <div className="password-container">
                  <input 
                    className="input-field" 
                    id="password" 
                    placeholder="Password" 
                    type="password"
                  />
                  <i className="fas fa-eye-slash password-icon"></i>
                </div>
              </div>
              <a className="forgot-password" href="#">Forgot Password?</a>
              <button className="submit-button" type="submit">Sign in</button>
              <p className="continue-with">or continue with</p>
              <div className="social-buttons">
                <button aria-label="Continue with Google" className="social-button">
                  <img 
                    alt="Google G logo icon" 
                    className="social-icon"
                    src="https://storage.googleapis.com/a1aa/image/8b10a6bc-da3b-42e7-74f4-8a5aa0db02c9.jpg" 
                  />
                </button>
                <button aria-label="Continue with GitHub" className="social-button">
                  <img 
                    alt="GitHub GH logo icon" 
                    className="social-icon"
                    src="https://storage.googleapis.com/a1aa/image/fef17f2f-3cc3-4291-e320-c24e8f2c46c6.jpg" 
                  />
                </button>
                <button aria-label="Continue with Facebook" className="social-button">
                  <img 
                    alt="Facebook F logo icon" 
                    className="social-icon"
                    src="https://storage.googleapis.com/a1aa/image/706a14c1-c959-4703-3a2f-fd84d838dba7.jpg" 
                  />
                </button>
              </div>
              <p className="register-text">
                Don't have an account yet?
                <strong className="register-link"> Register for free</strong>
              </p>
            </form>
            
            {/* Right image container */}
            <div className="image-container">
              <img 
                alt="Illustration of a man in blue shirt pointing at a large mobile phone" 
                className="feature-image"
                src="https://storage.googleapis.com/a1aa/image/95a9975b-6a57-43de-1fa6-aab0e0059c7d.jpg" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;