import React from 'react';
import "./Portfolio.css"
import datas from '../../portfolioData.js';


const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

    
      {
        datas.map(({id, image, title, github, demo}) => {
          return(
      <article key={id} className='portfolio_item'>
      <div className="portfolio_item-image">
        <img src={image} alt={title} />
      </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
        <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
        <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
        </div>
    </article> )
    })
    }

    
      </div>
    </section>
  )
}

export default portfolio;