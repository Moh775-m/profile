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
              <small>2+ Years</small>
            </div>

            <div className="about_card">
              <FiUsers className='about_icon' />
              <h5>Clients</h5>
              <small>20+ Worldwide</small>
            </div>

            <div className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </div>
          </div>

          <p>
            Here you can write about yourself...
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;