import React from 'react'
import "./About.css";
import ME from '../../assets/me-about1.png'
import { FaAward } from 'react-icons/fa'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { FiUser } from 'react-icons/fi'
import Experience from "../Experience/Experience.jsx";
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiUser className='about__icon' />
              <h5>Experience</h5>
              <small>Junior</small>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>English skills</h5>
              <small>TOEIC 970</small>
            </article>

            <a href="#portfolio">
              <article className='about__card'>
                <AiOutlineFolderOpen className='about__icon' />
                <h5>Project</h5>
                <small>10+</small>
              </article>
            </a>
          </div>
          <p>I'm a hard-working Software Engineer. I describe
            myself as a passionate developer who can quickly adapt
            to new working environment and have good team-work
            skills
          </p>


        </div>
      </div>
    </section>
  )
}

export default About