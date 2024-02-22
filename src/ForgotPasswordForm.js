import React, { useState } from 'react';

const ForgotPasswordForm = ({ onResetPassword }) => {
  const [username, setUsername] = useState('');

  const handleResetPassword = () => {
    // Add your password reset logic here
    onResetPassword(username);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <p>Please provide your username to reset your password.</p>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <button onClick={handleResetPassword}>Reset Password</button>
    </div>
  );
};

export default ForgotPasswordForm;
