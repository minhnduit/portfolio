import React from 'react';
import "./Portfolio.css"
import petPrjDatas from '../../gameProjectData.js';


const GamesPortfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Others pet projects</h2>

      <div className="container portfolio_container">
        {
          petPrjDatas.map(({ id, image, title, github, demo, video }) => {
            return (
              <article key={id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                  {video && <a href={video} className='btn btn-primary' rel="noreferrer" target='_blank'>Watch Video</a>}
                </div>
              </article>)
          })
        }
      </div>
    </section>
  )
}

export default GamesPortfolio;