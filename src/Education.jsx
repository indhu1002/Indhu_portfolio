import React from 'react';
import './App.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section className="education section-animate-slide" id="education">
      <div className="section-icon"><FaGraduationCap size={36} /></div>
      <h2 className="fade-in">Education</h2>
      <div className="education-list fade-in">
        <div className="edu-item">
          <h3>Sai Rajeswari Institute of Technology</h3>
          <p>B-Tech in Computer Science and Engineering (2022-2026)</p>
          <p>CGPA: 8.0</p>
        </div>
        <div className="edu-item">
          <h3>Deepthi Junior College</h3>
          <p>CGPA: 9.8 (2020-2022)</p>
        </div>
        <div className="edu-item">
          <h3>Aditya High School</h3>
          <p>SSC (Class X), CGPA: 8.9 (2020)</p>
        </div>
      </div>
    </section>
  );
};

export default Education; 