import React from 'react';
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

function HomeSocials() {
  return (
    <div className='home_socials'>
      <a href= "https://www.linkedin.com/in/mohsen-al-mashjari-982411431?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Moh775-m" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
        <FaDribbble />
      </a>
    </div>
    
  );
}

export default HomeSocials;