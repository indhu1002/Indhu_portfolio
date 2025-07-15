import React from 'react';
import './App.css';
import { FaProjectDiagram } from 'react-icons/fa';

const projects = [
  {
    title: 'Student Result Management',
    tech: 'React + Firebase',
    github: 'https://github.com/indhu1002/student-result-management', // Replace with actual link
    live: 'https://student-result-management-smoky.vercel.app/',   // Replace with actual link
  },
  {
    title: 'Addition Game',
    tech: 'JavaScript',
    github: 'https://github.com/indhu1002/addition_game', // Replace with actual link
    live: 'https://addition-game-kappa.vercel.app/',   // Replace with actual link
  },
  {
    title: 'To-Do List App',
    tech: 'HTML, CSS, JS',
    github: 'https://github.com/indhu1002/Todo-List-Application', // Replace with actual link
    live: 'https://todo-list-application-4q2u.vercel.app/',   // Replace with actual link
  },
];

const Projects = () => {
  return (
    <section className="projects section-animate-bounce" id="projects">
      <div className="section-icon"><FaProjectDiagram size={36} /></div>
      <h2 className="fade-in">Projects</h2>
      <div className="projects-list fade-in">
        {projects.map((proj, idx) => (
          <div className="project-card hover-animate" key={idx}>
            <h3>{proj.title}</h3>
            <p>{proj.tech}</p>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 