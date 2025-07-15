import React from 'react';
import './App.css';
import { FaBriefcase } from 'react-icons/fa';
import internCert from './assets/cert4.jpg'; // Make sure to add your internship certificate as cert4.jpg

const Internship = () => {
  return (
    <section className="internship section-animate-zoom" id="internship">
      <div className="section-icon"><FaBriefcase size={36} /></div>
      <h2 className="fade-in">Internship</h2>
      <div className="internship-content fade-in">
        <h3>Edu-Versity</h3>
        <p>Full Stack Web Development Intern</p>
        <p>Feb 2025 – Apr 2025</p>
        <ul>
          <li>Completed a 3-month industrial internship focused on Full Stack Web Development.</li>
          <li>Gained hands-on experience in front-end and back-end development tools and technologies.</li>
        </ul>
        <div className="intern-cert-wrapper">
          <a href={internCert} target="_blank" rel="noopener noreferrer" className="cert-link">
            <img src={internCert} alt="Internship Certificate" className="cert-img hover-animate" />
          </a>
          <div className="cert-caption">Internship Certificate</div>
        </div>
      </div>
    </section>
  );
};

export default Internship; 