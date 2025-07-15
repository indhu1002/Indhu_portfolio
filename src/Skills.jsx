import React from 'react';
import './App.css';
import { FaTools } from 'react-icons/fa';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Python',
  'Firebase',
  'Responsive Web Design',
];

const Skills = () => {
  return (
    <section className="skills section-animate-zoom" id="skills">
      <div className="section-icon"><FaTools size={36} /></div>
      <h2 className="fade-in">Skills</h2>
      <div className="skills-list fade-in">
        {skills.map((skill, idx) => (
          <div className="skill-card hover-animate" key={idx}>{skill}</div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 