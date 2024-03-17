import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
  
      // Redirect to another page after sign-up (for example, back to the home page)
      navigate('/');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <div className='form'>
        <div className='container'>
          <form>
            {/* Your form inputs */}
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

            {/* Last Name */}
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

            {/* Country */}
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Zip Code */}
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

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
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

            {/* Agreement */}
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

            {/* Sign Up Button */}
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
