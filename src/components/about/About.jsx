import React from 'react';
import './about.css';
import me from '../../assets/me.jpg';
import  {FaAward}  from "react-icons/fa";
import  {FiUsers } from 'react-icons/fi';
import  {VscFolderLibrary } from 'react-icons/vsc';

function About() {

  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about" id="about">
      <div className="top_section">
        <h5>About Me </h5>
        <h2>Get To Know</h2>
      </div>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me} alt="me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            
            {/* Experience -> يوديك للمهارات */}
            <div 
              className="about_card" 
              onClick={() => scrollToSection('skills')}
              style={{cursor: 'pointer'}}
              title="Go to Skills"
            >
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Recent graduate</small>
            </div>

            {/* Clients -> يوديك للتواصل */}
            <div 
              className="about_card"
              onClick={() => scrollToSection('contact')}
              style={{cursor: 'pointer'}}
              title="Go to Contact"
            >
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>no one</small>
            </div>

            {/* Projects -> يوديك للمشاريع */}
            <div 
              className="about_card"
              onClick={() => scrollToSection('projects')}
              style={{cursor: 'pointer'}}
              title="Go to projects"
            >
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </div>

          </div>

          <p>
             I'm a Frontend Developer specialized in React.js
             I build fast, responsive, and beautiful user interfaces with clean code. 
             Passionate about turning designs into interactive web experiences.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;