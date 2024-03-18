// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="login-container">
      <h1>Log In</h1>
      <form>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} />

        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} />

        <button type="button" onClick={handleLogin}>LOG IN</button>

        <p>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>

        <p>or log in with</p>
        <div className="social-login">
          <button type="button">Facebook</button>
          <button type="button">Google</button>
        </div>

        <p>
          Need an account? <Link to="/SignUp">Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
