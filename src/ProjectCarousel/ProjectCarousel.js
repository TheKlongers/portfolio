// src/components/ProjectCarousel.js

import React from 'react';
import projectsData from '../ProjectCarousel/Projects';
import '../ProjectCarousel/ProjectCarousel.css';


const ProjectCarousel = () => {
  const projects = projectsData;

  return (

    <div> 
      <h2>Projetos</h2> 
    <div className="carousel-container">
      <div className="carousel">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.gif} alt={project.name} />
            <h3>{project.name}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectCarousel;
