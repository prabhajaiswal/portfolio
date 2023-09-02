
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {RiMessengerLine} from 'react-icons/md';
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3r6m9fq', 'template_sg5n1gj', form.current, 'fw2yST_K2CRLeDDht')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id='contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact-container">
  <div className="contact_options">
    <article className='contact_option'>
      <MdOutlineEmail  className='contact_option-icon'/>
      <h4>Email</h4>
      <h5>prabhajaiswal231@gmail.com</h5>
      <a href='prabhajaiswal231@gmail.com' target='blank'>Send a message</a>
    </article>
    <article className='contact_option'>
    <BsLinkedin className='contact_option-icon'/>
      <h4>Linkeden</h4>
      <h5>prabhajaiswal231@gmail.com</h5>
      <a href=''  target='blank'>Send a message</a>
    </article>
   
  </div>
  <form action=''ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Full Name' required />
    <input type='email' name='email' placeholder='Your Email' required />
   <textarea name='message' rows="7" placeholder='You Message' required/>
   <button type='submit' className='btn btn-primary'>Send Message</button>
  </form>
    </div>
   </section>
  )
}

export default Contact
