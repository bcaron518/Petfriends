import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/pets" className="nav-item">Pets</Link>
      <Link to="/adoption-process" className="nav-item">Adoption Process</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Link to="/SignUp" className="nav-item nav-item">SignUp</Link>
    </div>
  );
};
export default Navbar;