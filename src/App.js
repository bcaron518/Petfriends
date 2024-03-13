// App.js
import React from 'react';
import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import AdoptionProcess from './components/AdoptionProcess';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PetList from './components/PetList';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="navbar">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/pets" className="nav-item">Pets</Link>
          <Link to="/adoption-process" className="nav-item">Adoption Process</Link>
          <Link to="/login" className="nav-item">Login</Link>
          <Link to="/signUp" className="nav-item">SignUp</Link>
        </div>
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetList />} />
            <Route path="/adoption-process" element={<AdoptionProcess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
