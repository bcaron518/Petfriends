import React, { useState } from 'react';

const LoginForm = ({ onLogin, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'yourUsername' && password === 'yourPassword') {
      onLogin(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    onForgotPassword(username);
  };

  return (
    <div>
      <h2>Login Form</h2>
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
