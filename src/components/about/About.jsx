import React from 'react';
import './about.css';
import me from '../../assets/me.jpg';
import  {FaAward}  from "react-icons/fa";
import  {FiUsers } from 'react-icons/fi';
import  {VscFolderLibrary } from 'react-icons/vsc';

function About() {
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
            <div className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Recent graduate</small>
            </div>

            <div className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>no one</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </div>
          </div>

          <p>
             I'm a Frontend Developer specialized in React.js. 
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