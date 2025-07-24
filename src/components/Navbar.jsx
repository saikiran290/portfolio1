import React, { useState } from 'react';
import '../CSS/Navbar.css'; // ✅ Ensure this has correct styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after click (on mobile)
    }
  };

  return (
    <nav className="modern-navbar">
      <div className="modern-navbar-container">
        <div className="modern-logo">Saikiran</div>

        {/* Hamburger Icon */}
        <div
          className="toggle-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`modern-nav-links ${menuOpen ? 'active' : ''}`}>
          <li><button onClick={() => scrollToSection('home')} className="modern-nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="modern-nav-link">About</button></li>
          <li><button onClick={() => scrollToSection('experience')} className="modern-nav-link">Experience</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="modern-nav-link">Projects</button></li>
          <li><button onClick={() => scrollToSection('skills')} className="modern-nav-link">Skills</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="modern-nav-link">Contact</button></li>
          
          {/* ✅ Resume Button - opens in new tab */}
          <li>
            <a
              href="/sai-resume.pdf" // ✅ Correct path (from public folder)
              target="_blank"
              rel="noopener noreferrer"
              className="modern-nav-link resume-button"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
