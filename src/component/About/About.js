import React from 'react'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import './About.css'
import image from './image.jpg'
function About() {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h1>About Me</h1>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img    src={image} alt='no image'/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>
            <article className='about_card'>
            <FiUsers className='about_icon'/>

              <h5>Clients</h5>
              <small>Begginer</small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>Beginner</small>
            </article>
          </div>
          <p>
         
              I am Prabha Jaiswal , I would love to collaborate on projects of React . I am React  Front-end Developer and I am familiar with using tools like firebase for storing Database and also have skills of making projects of Redux.
            
          I have make projects using Firebase, React, Redux Toolkit like i have made my own  portfolio website , and i have made messenger-clone and code Editor .
           I have make projects of React and i have make aprojects usking redux toolkit to show functionality and featues of adding basket and removing and comparing it prices of items and adding functionality of increasing and decresing price using redux toolkit.
       
           
           
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
