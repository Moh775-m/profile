import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser';
 

const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "mohsen77544.a@gmail.com",
    link: "mailto:mohsen77544.a@gmail.com",
  },
  {
    id:2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "محسن المشجري ",
    link: "https://m.me/محسن المشجري ",
  },
  {
    id:3,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "775443254",
    link: "https://api.whatsapp.com/send?phone=775443254",
  }
]


function Contact() {
    const form = useRef();
    
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_uw4eccd',
      'template_g4vf2o4',
      form.current,
      {
        publicKey: 'TKhT-2jG0jZzdr3aA',
      }
    )
    .then(
      (result) => {
        console.log("SUCCESS:", result.status, result.text);
        alert("تم إرسال الرسالة بنجاح");
      },
      (error) => {
        console.log("FAILED:", error);
        alert("حدث خطأ: " + error.text);
      }
    );
    e.target.reset()
};
  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container contact_container">
        <div className="contact_options">
             {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className='contact_option'>
              <div className="icon">{icon}</div>
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target='_blank' rel='noreferrer'>Send Message</a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Full Name' name='name' required />
          <input type="email" placeholder='Your Email' name='email' required />
          <textarea rows="10" name="user-message"  placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;