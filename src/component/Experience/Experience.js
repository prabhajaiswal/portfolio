import React from 'react'
import './Experience.css'
function Experience() {
  return (
   <section id='experience' className='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience_container">
        <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <h4>CSS</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <h4>Javascript</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <h4>Redux</h4>
                    <small className='text-light'>Experienced</small>
                </article>
              
                <article className='experience_details'>
                    <h4>React</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                   
                </div>
        </div>
        <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
                <article className='experience_details'>
                    <h4>Node.js</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <h4>MongoDB</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_details'>
                    <h4>Firebase</h4>
                    <small className='text-light'>Experienced</small>
                </article>
            
                <article className='experience_details'>
                    <h4>Express.js</h4>
                    <small className='text-light'>Experienced</small>
                </article>
                   
                </div>
        </div>
 
    
    </div>

   </section>
  )
}

export default Experience
