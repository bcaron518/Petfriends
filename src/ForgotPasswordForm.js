import React, { useState } from 'react';

const ForgotPasswordForm = ({ onResetPassword }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = () => {
    if (!username) {
      setError('Please enter your username.');
      return;
    }

    // Clear any previous errors
    setError('');
    setIsLoading(true);

    // Add your password reset logic here
    onResetPassword(username)
      .then(() => {
        // Reset the form and provide feedback to the user
        setUsername('');
        setIsLoading(false);
        alert('Password reset instructions sent to your email.');
      })
      .catch((error) => {
        // Handle any errors that occur during the password reset process
        setError(error.message);
        setIsLoading(false);
      });
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleResetPassword} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Reset Password'}
      </button>
    </div>
  );
};

export default ForgotPasswordForm;
