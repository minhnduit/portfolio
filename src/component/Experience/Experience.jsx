import React from 'react';
import "./Experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skills I Have</h5>
        <h2>My Skills</h2>

        <div className="container experience_container">
          <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">

           <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>HTML</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>CSS</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>Javascript</h4>
              <small className='text-light'>Basic</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>Boostrap</h4>
              <small className='text-light'>Basic</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>React JS</h4>
              <small className='text-light'>Basic</small></div>
            </article>

          
          </div>
          </div>

          {/* backend */}
          <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>SQL Sever</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>MySQL</h4>
              <small className='text-light'>Basic</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>Node JS</h4>
              <small className='text-light'>Basic</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>MongoDB</h4>
              <small className='text-light'>Basic</small></div>
            </article>

            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_detail-icon' />
              <div><h4>Java</h4>
              <small className='text-light'>Basic</small></div>
            </article>

          
          </div>
          </div>
        </div>

    </section>

  )
}

export default Experience