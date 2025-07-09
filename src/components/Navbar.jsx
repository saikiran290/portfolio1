import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="modern-navbar">
      <div className="modern-navbar-container"> 
<div className="modern-logo">Portfolio </div>
        <ul className="modern-nav-links"> 
          <li><Link to="/" className="modern-nav-link">Home</Link></li> 
          <li><Link to="/about" className="modern-nav-link">About</Link></li>
          <li><Link to="/experience" className="modern-nav-link">Experience</Link></li>
          <li><Link to="/projects" className="modern-nav-link">Projects</Link></li>
          <li><Link to="/skills" className="modern-nav-link">Skills</Link></li>
          <li><Link to="/contact" className="modern-nav-link">Contact</Link></li>
        </ul>
      </div>

      

    </nav>

 
  );
};

export default Navbar;