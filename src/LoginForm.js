import React, { useState } from 'react';

const LoginForm = ({ onLogin, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    // Add authentication logic here (e.g., call an API)
    // For demonstration purposes, assume successful login if username and password are correct
    if (username === 'yourUsername' && password === 'yourPassword') {
      onLogin(username);
    } else {
      setError('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    if (!username) {
      setError('Please enter your username.');
      return;
    }

    // Add your forgot password logic here (e.g., send a password reset email)
    onForgotPassword(username);
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <span> | </span>
      <button onClick={handleForgotPassword}>Forgot Password?</button>
    </div>
  );
};

export default LoginForm;
