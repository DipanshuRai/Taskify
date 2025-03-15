import React from 'react';
import './Navbar.css';
import Button from './ui/Button.jsx';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="title">
            Taskify
        </div>
        <div className="nav-btn">
            <div className="button">Login</div>
            <div className="button">Logout</div>
            <div className="button">Sign Up</div>
        </div>
    </div>
  )
}

export default Navbar
