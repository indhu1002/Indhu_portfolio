import React from 'react';
import './App.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Links = () => {
  return (
    <section className="links section-animate-fade" id="links">
      <div className="section-icon">
        <FaLinkedin size={36} />
      </div>
      <h2 className="fade-in">Connect With Me</h2>
      <div className="links-container fade-in">
        <a 
          href="https://www.linkedin.com/in/indhu1002/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-item"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="link-icon" />
          <span className="link-text">LinkedIn</span>
        </a>
        <a 
          href="https://github.com/indhu1002" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link-item"
          aria-label="GitHub Profile"
        >
          <FaGithub className="link-icon" />
          <span className="link-text">GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Links; 