import React from 'react';
import Head from './Head';
import Social from './social';
import './Header.css'
import me from './me.webp'
import Typical from 'react-typical'
function Header() {
  return (
    <div>
        <header>
    <div className="cointainer header-cointainer">
      <h5>Hello I'm </h5>
      <h1>Prabha Jaiswal</h1>
      <Typical loop={Infinity} steps ={["Enthusiant developer  ",1000 ,"front-end developer",2000,"Content Writer",3000]}/>
      <h5 className="text-light">Front-end Developer</h5>
      <Head />
      <Social />
      
      <div className="me">
        <img src={me}alt='no image' />
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
    </div>
   </header>
    </div>
  )
}

export default Header
