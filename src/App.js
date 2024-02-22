import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ForgotPasswordForm from './ForgotPasswordForm';
import AboutPage from './AboutPage';
import './App.css'; // Import the App.css file

const Home = () => (
  <div className="app-container">
    <h2>Home Page</h2>
    {/* Add your home page content */}
  </div>
);

const App = () => {
  const handleLogin = (username) => {
    alert(`Logged in as ${username}`);
  };

  const handleSignUp = (username, password) => {
    alert(`Signed up as ${username} with password ${password}`);
  };

  const handleForgotPassword = (username) => {
    alert(`Forgot password for ${username}`);
    // Add your forgot password logic here (e.g., send recovery email)
  };

  const handleResetPassword = (username) => {
    alert(`Reset password for ${username}`);
    // Add your password reset logic here
  };

  return (
    <Router>
      <div className="app-container">
        <h1>Pet Friends (Adopt a pet)</h1>
        <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> | <Link to="/forgot-password">Forgot Password</Link> | <Link to="/about">About</Link>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm onLogin={handleLogin} onForgotPassword={handleForgotPassword} />} />
          <Route path="/signup" element={<SignUpForm onSignUp={handleSignUp} />} />
          <Route path="/forgot-password" element={<ForgotPasswordForm onResetPassword={handleResetPassword} />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;