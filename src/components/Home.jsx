// src/components/Home.jsx
import React from 'react';
import '../CSS/Home.css';
import { Github, Linkedin, Mail, FileText, Download } from 'lucide-react';

const Home = () => {
  // Scroll to section by ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Effects */}
      <div className="bg-effects">
        <div className="bg-circle purple"></div>
        <div className="bg-circle pink delay-1"></div>
        <div className="bg-circle blue delay-2"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="text-column">
          <h1>
            <span className="hi-text">Hi, I'm</span>
            <span className="name-text"> Saikiran Potnuru</span>
          </h1>
          <p className="title-text">Passionate Web Developer</p>
          <p className="desc-text">
            Aspiring full-stack developer with hands-on experience in MERN stack projects and a strong interest in building scalable and
            user-friendly applications. Looking for an opportunity to innovate and solve real-world problems through efficient code and
            continuous learning.
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn primary-btn">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn secondary-btn">
              Get In Touch
            </button>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <a href="https://github.com/saikiran290" target="_blank" rel="noopener noreferrer" title="GitHub">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/saikiran-potnuru-aa9894257/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin />
            </a>
            <a href="/sai-resume.pdf" target="_blank" rel="noopener noreferrer" title="View Resume">
              <FileText />
            </a>
            <a href="/sai-resume.pdf" download="Saikiran_Potnuru_Resume.pdf" title="Download Resume">
              <Download />
            </a>
            <a href="mailto:saipotnuru257@gmail.com" title="Email">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
