import React from "react";
import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";


function Services() {
  return (
    <section id='services'>
      <div className="top_section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>

      <div className="container container_services">
        <article className='card'>
          <MdDesignServices className='icon' />
          <h3>Web Design</h3>
          <p className='text-light'>
          
           I design modern, clean, and responsive website layouts that match your brand. 
            Focus on user experience and visual appeal using Figma and Tailwind CSS.

          </p>
        </article>

        <article className='card'> 
          <IoIosRocket className='icon' />
          <h3>Web Development</h3> 
          <p className='text-light'>
           I develop fast and interactive websites using React.js and JavaScript. 
           Clean code, responsive design, and SEO optimized to make your site work perfectly on all devices.
          </p>
        </article>

        <article className='card'>
          <FaCode className='icon' />
          <h3>UI/UX Design</h3> 
          <p className='text-light'>
             I create user-friendly interfaces with smooth interactions. 
              From wireframes to final UI components in React, I ensure your users have the best experience.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Services;