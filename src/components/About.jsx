import React from 'react';
import '../CSS/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column - Creative Design */}
        <div className="design-column">
          <div className="profile-frame">
            <img 
              src="/profile.jpg" 
              alt="Salkiran Potnuru"
              className="profile-img"
            />
            <div className="tech-bubbles">
              <span className="bubble react">React</span>
              <span className="bubble node">Node</span>
              <span className="bubble python">Python</span>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="content-column">
          <h1 className="main-heading">
            Hello, I'm <span className="name-highlight">Salkiran Potnuru</span>
          </h1>
          
          <h2 className="sub-heading">
            Building Digital Solutions That Make an Impact
          </h2>

          <div className="about-card">
            <p className="intro-text">
              As a passionate Full-Stack Developer specializing in the MERN stack, 
              I combine my technical education with hands-on project experience to 
              create efficient, user-centric applications. My journey in tech is 
              driven by curiosity and a commitment to continuous learning.
            </p>

            <div className="education-highlight">
              <div className="degree-icon">🎓</div>
              <div>
                <h3>B.Tech in Information Technology</h3>
                <p>GMR Institute of Technology | CGPA: 7.5</p>
              </div>
            </div>

            
              <a href="#contact" className="cta-button">
                Let's Connect
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
     
    </section>
  );
};

export default About;