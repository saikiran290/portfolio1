import React from 'react';
import "../CSS/Skills.css"

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {/* Technical Skills */}
        <div className="skill-category">
          <h3 className="skill-heading">Technical Skills</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>HTML5 & CSS3</li>
            <li>MERN Stack</li>
            <li>DBMS</li>
          </ul>
        </div>

        {/* Tools & Platforms */}
        <div className="skill-category">
          <h3 className="skill-heading">Tools & Platforms</h3>
          <ul className="skill-list">
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>ServiceNow</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skill-category">
          <h3 className="skill-heading">Soft Skills</h3>
          <ul className="skill-list">
            <li>Team Collaboration</li>
            <li>Problem Solving</li>
            <li>Adaptability</li>
            <li>Clear Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
