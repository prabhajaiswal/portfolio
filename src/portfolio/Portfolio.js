import React from 'react'
import './Portfolio.css'
function Portfolio() {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio-container">
            <article  className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='' alt=''  />
            </div>
            <h3>Messenger-clone</h3>
            <a href='https://github.com/prabhajaiswal/Messenger.git' className='btn' target='blank'>Github</a>
            <a href='' className='btn btn-primary' target='blank'>Live Demo</a>
            </article>
            <article  className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='' alt=''  />
            </div>
            <h3>Cryptocurrency</h3>
            <a href='https://github.com/prabhajaiswal/Cryptocurrency.git' className='btn' target='blank'>Github</a>
            <a href='' className='btn btn-primary' target='blank'>Live Demo</a>
            </article>
            <article  className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='' alt=''  />
            </div>
            <h3>shopping-cart</h3>
            <a href='https://github.com/prabhajaiswal/shopping-cart.git' className='btn' target='blank'>Github</a>
            <a href='' className='btn btn-primary' target='blank'>Live Demo</a>
            </article>
            <article  className='portfolio_item'>
            <div className="portfolio_item-image">
                <img src='' alt=''  />
            </div>
            <h3>Spotify-clone</h3>
            <a href='https://github.com/prabhajaiswal/spotify-clone.git' className='btn' target='blank'>Github</a>
            <a href='' className='btn btn-primary' target='blank'>Live Demo</a>
            </article>
           
        </div>
    </section>
  )
}

export default Portfolio
//https://github.com/prabhajaiswal/portfolio.git