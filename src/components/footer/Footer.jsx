import React from "react";
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>MOHSEN</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li> 
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com/محسن المشجري" target='_blank' rel='noreferrer'> <FaFacebookF /></a>
        <a href="https://instagram.com/mr5l7" target='_blank' rel='noreferrer'> <FaInstagram /></a>
        <a href="https://twitter.com" target='_blank' rel='noreferrer'> <FaXTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; <a href="#">MOHSEN</a> All rights reserved</small> 
      </div>
    </footer>
  );
}

export default Footer;