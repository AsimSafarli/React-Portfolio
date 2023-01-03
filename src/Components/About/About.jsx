import React from 'react'
import "./About.css";
function About() {
  return (
    <div className='mainwork'>
        <div className='work'>
            <div className="aboutme">
                <div className="text">
                <h1 className='about'>About</h1> &nbsp; <h1 className='me'>me</h1>
               
                </div>
                <p className='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more
                </p>
            </div>
        <div className="back">
        <div>
          <img
            className="workicon"
            src="Assets/abouticon.png"
            alt=""
            srcset=""
          />
          <img
            className="rounded float-end banner"
            src="Assets/aboutdoodle.png"
            alt=""
            srcset=""
          />
          <img className='kolge' src="Assets/ellipse 3.png" />
        </div>
      </div>
        </div>
        
    </div>
  )
}

export default About
