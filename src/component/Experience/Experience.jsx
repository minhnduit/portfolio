import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Game Development and Software Engineering experience</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Javascript</h4>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>Boostrap</h4>
              </div>
            </article>

            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon" />
              <div>
                <h4>React JS</h4>
              </div>
            </article>
            
            
          </div>
        </div>




        
      </div>
    </section>
  );
};

export default Experience;
