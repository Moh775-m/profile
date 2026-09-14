import React from "react";
import me from '../../assets/me.jpg'
import './home.css'
import CV from '../../assets/CV.pdf'
import Socials from './Socials'


function Home() {
  return (
    <div className="home">
      <div className="container home_container">

        
        <div className="home_content">
          <h4>Hello I'm</h4>
          <h1>Mohsen Al.mashjari</h1>
          <h4 className="text-light">Frontend Developer</h4>

          <div className="btns">
            <a href={CV} className="btn" download>
              Download CV
            </a>

            <a href="#" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>

        
        <div className="home_right">
          <div className="me">
            <img src={me} alt="Mohsen Al.mashjari" />
          </div>

          <Socials />
        </div>

      </div>
    </div>
  );
}

export default Home;