import React, { useState } from 'react';
import './signup.css';
import signalIcon from '../../Mobile Signal.svg?url';
import wifiIcon from '../../Wifi.svg?url';
import batteryIcon from '../../_StatusBar-battery.svg?url';

// Image assets - using local assets
const imgSignUpVersion9 = '/Onboarding Bg.png';
const imgEyeOff = '/eye-off.svg';

// Local image assets
const logoImage = '/airman_maverick.png';
const googleImage = '/google.png';
const appleImage = '/apple.png';
const eyeOpenIcon = '/eye-open.svg';

type LoginProps = {
  onLogin?: () => void;
  onSignUp?: () => void;
  onNavigateToLogin?: () => void;
};

const Login = ({ onLogin, onSignUp, onNavigateToLogin }: LoginProps = {}) => {
  const [email, setEmail] = useState('nathank18uiux@gmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');

  return (
    <div className="login-container">
      {/* Background Image */}
      <img src={imgSignUpVersion9} alt="" className="login-background-image" />

      {/* Status Bar */}
      <div className="login-status-bar">
        <span className="login-status-bar-time">9:41</span>
        <div className="login-status-bar-right">
          <img src={signalIcon} alt="Signal" className="login-status-bar-icon login-status-bar-icon-white" />
          <img src={wifiIcon} alt="WiFi" className="login-status-bar-icon login-status-bar-icon-white" />
          <img src={batteryIcon} alt="Battery" className="login-status-bar-battery login-status-bar-icon-white" />
        </div>
      </div>

      {/* Headline Section */}
      <div className="login-headline-section">
        <div className="login-logo-container">
          <img src={logoImage} alt="Airman Maverick Logo" className="login-logo-icon" />
        </div>
        <div className="login-headline-text-container">
          <h1 className="login-headline-title">Get Started now</h1>
          <p className="login-headline-subtitle">Create an account to explore about our app</p>
        </div>
      </div>

      {/* Content Card */}
      <div className="login-content-card">
        {/* Tabbing */}
        <div className="login-tabbing-container">
          <div className="login-tabbing-inner">
            <button
              className={`login-tab ${activeTab === 'login' ? 'login-tab--active' : ''}`}
              onClick={() => {
                if (onNavigateToLogin) {
                  onNavigateToLogin();
                } else {
                  setActiveTab('login');
                }
              }}
            >
              <span className={`login-tab-text ${activeTab === 'login' ? 'login-tab-text--active' : ''}`}>
                Log In
              </span>
            </button>
            <button
              className={`login-tab ${activeTab === 'signup' ? 'login-tab--active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              <span className={`login-tab-text ${activeTab === 'signup' ? 'login-tab-text--active' : ''}`}>
                Sign up
              </span>
            </button>
          </div>
        </div>

        {/* Field Section */}
        <div className="login-field-section">
          {/* Email Input */}
          <div className="login-input-field-container">
            <label className="login-input-label">Email</label>
            <div className="login-input-area">
              <input
                type="email"
                className="login-input-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Id"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="login-input-field-container">
            <label className="login-input-label">Set Password</label>
            <div className="login-input-area">
              <input
                type={showPassword ? 'text' : 'password'}
                className="login-input-text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <button
                className="login-eye-icon-container"
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <img 
                  src={showPassword ? eyeOpenIcon : imgEyeOff} 
                  alt={showPassword ? 'Hide password' : 'Show password'} 
                  className="login-eye-icon" 
                />
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="login-link-container">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
              <label className="login-remember-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="login-checkbox-input"
                  aria-label="Remember me"
                />
                <span className="login-remember-text">Remember me</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="login-buttons-section">
          {/* Sign Up Button */}
          <button className="login-button" onClick={onLogin} type="button">
            <span className="login-button-text">Sign Up</span>
          </button>

          {/* Or Divider */}
          <div className="login-or-container">
            <div className="login-or-line"></div>
            <span className="login-or-text">Or</span>
            <div className="login-or-line"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="login-social-buttons-container">
            {/* Google Button */}
            <button className="login-social-button" type="button">
              <div className="login-google-icon-container">
                <img src={googleImage} alt="Google Logo" className="login-google-icon" />
              </div>
              <span className="login-social-button-text">Continue with Google</span>
            </button>

            {/* Apple Button */}
            <button className="login-social-button" type="button">
              <div className="login-apple-icon-container">
                <img src={appleImage} alt="Apple Logo" className="login-apple-icon" />
              </div>
              <span className="login-social-button-text">Continue with Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



