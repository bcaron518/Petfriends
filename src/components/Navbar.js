import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsSubMenuOpen(false); // Close the submenu after clicking on a menu item
  };

  return (
    <div className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <div className="dropdown">
        <div className="nav-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Pets
          {isSubMenuOpen && (
            <div className="dropdown-content">
              <Link to="/cats" className="dropdown" onClick={handleMenuItemClick}>Cats</Link>
              <Link to="/dogs" className="dropdown" onClick={handleMenuItemClick}>Dogs</Link>
              <Link to="/others" className="dropdown" onClick={handleMenuItemClick}>Others</Link>
            </div>
          )}
        </div>
      </div>
      <Link to="/adoption-process" className="nav-item">Adoption Process</Link>
      <Link to="/login" className="nav-item">Login</Link>
      <Link to="/signUp" className="nav-item">SignUp</Link>
    </div>
  );
};

export default Navbar;