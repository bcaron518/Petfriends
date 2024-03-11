// SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'United States',
    zipCode: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log('Signing up with:', formData);
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className='form'>
        <div className='container'>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter Your First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Your Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="zipCode">ZIP Code:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                placeholder="Enter Your ZIP Code"
                value={formData.zipCode}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                />
                Yes, I agree to receiving email and other marketing communications from Petfinder and Purina and its brands. I certify that I am over 18 years old and I have read and agree with the Notice at Collection, Privacy Policy, and Terms and Conditions.
              </label>
            </div>

            <div className="form-group">
              <button type="button" onClick={handleSignUp}>SIGN UP</button>
            </div>

            <p>Already have an account? <Link to="/login">Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
