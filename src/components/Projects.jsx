import React from "react";
import "../CSS/Projects.css";

// Import image for spam classifier project
import spamImg from "../assets/spam-classifier.png";
import snow from "../assets/snow.jpg";


const projects = [
  {
    title: "Spam Email Classifier & Summarizer",
    tech: "MERN Stack, Hugging Face, Naive Bayes",
    description:
      "Built a full-stack app with a React frontend and Node.js backend to classify spam emails using Naive Bayes and summarize content using Hugging Face NLP models.",
    github: "https://github.com/saikiran290/mini_project.git",
    image: spamImg,
  },
  {
    title: "Streamlining Ticket Assignment (ServiceNow)",
    tech: "ServiceNow, ACLs, Workflows",
    description:
      "Automated ticket routing and assignment using ServiceNow's access control rules and roles to improve support efficiency and reduce resolution time.",
    github: "https://github.com/saikiran290/Streamlining-Ticket.git",
    image: snow,
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <p className="project-description">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Code ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
