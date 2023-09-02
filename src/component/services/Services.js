import React from 'react';
import {BiCheck} from 'react-icons/bi';
import './Service.css';
function Services() {
  return (
    <section id='services'>
        <h5> What I offer</h5>
        <h2>Services</h2>
        <div className="container services_container">
            <article className='service'>
                <div className="service_head">
                    <h3>Web Development</h3>
                </div>
                <ul className='service-list'>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                  <p>I know skills like HTML , CSS , JAVASCRIPT , REACT , REDUX , FIREBASE , GIT AND GITHUB</p>
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                   <p>I have design projects such that make it responsive .</p>
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > I Have add authentication and add  user-interface.</p>  
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > I am working on react projects and learning MERN stack.</p>  
                    </li>   
                </ul>
            </article>
            <article className='service'>
                <div className="service_head">
                    <h3>Content Writting</h3>
                </div>
                <ul className='service-list'>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p >I am developer but i like to write content too.</p>  
                    </li>
                   
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p >I would love to write content about Tourism and others event too.</p>  
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > I would love to working.</p>  
                    </li>
                </ul>
            </article>



            
            <article className='service'>
                <div className="service_head">
                    <h3>Promt Engennering</h3>
                </div>
                <ul className='service-list'>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>  
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>  
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>  
                    </li>
                    <li>
                     <BiCheck className='service_list-icon'/> 
                     <p > Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>  
                    </li>
                </ul>
            </article>
        </div>

    </section>
  )
}

export default Services
