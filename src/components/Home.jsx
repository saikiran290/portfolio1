import React from 'react';
import '../CSS/Home.css';
import { Github, Linkedin, Facebook, Mail, ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Animated Background Elements */}
      <div className="bg-effects">
        <div className="bg-circle purple"></div>
        <div className="bg-circle pink delay-1"></div>
        <div className="bg-circle blue delay-2"></div>
      </div>

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

          <div className="cta-buttons">
            <button onClick={() => scrollToSection('projects')} className="btn primary-btn">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn secondary-btn">
              Get In Touch
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/saikiran290" target="_blank" rel="noopener noreferrer">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/saikiran-potnuru-aa9894257/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077105961035" target="_blank" rel="noopener noreferrer">
              <Facebook />
            </a>
            <a href="mailto:saipotnuru257@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <button onClick={() => scrollToSection('about')}>
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Home;
