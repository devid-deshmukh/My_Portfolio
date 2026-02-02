import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "EVO 2 Varient_analysis",
      description: "A comprehensive genomic variant analysis platform built on Binance Smart Chain",
      tech: ["React", "Nodejs", "MongoDB","Solidity","Python"],
      image: "src/assets/image.png",
      github: "#",
      website: "https://evo2-variant-analysis-bnb.vercel.app/"
    },
    {
      title: "Codeware-ycce",
      description: "Official  website for ycce.",
      tech: ["React.js", "Tailwind", "Gsap","Vercel"],
      image: "/src/assets/Mainhero.png",
      github: "#",
      website: "https://codeware.ycce.edu/"
    }
    // Just add more objects here for more projects
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-pills">
                {project.tech.map((t, i) => (
                  <span key={i} className="pill">{t}</span>
                ))}
              </div>
              <div className="card-links">
                <a href={project.github}>Github link</a>
                <a href={project.website}>Website link</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;