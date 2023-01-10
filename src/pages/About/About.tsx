import React from 'react'
import "./about.css"

const About: React.FC = () => {
  return (
    <div className='about-block'>
      <div className="container">
        <div className="about-inner">
          <div className="about-title">
            About me
          </div>
          <div className="about-info-block">
            <div className="information">
              <div className="title">Name: <div className="value">Nurlan</div></div>
              <div className="title">Surname: <div className="value">Sultanov</div></div>
              <div className="title">Phone: <div className="value">+998 (91) 384-82-64</div></div>
              <div className="title">Age: <div className="value">15</div></div>
              <div className="title">City: <div className="value">Nukus</div></div>
              <div className="title">email: <div className="value">npoctokayfarik@gmail.com</div></div>
              <div className="title">Degree: <div className="value">Junior</div></div>
              <div className="title">Birthday: <div className="value">15 may 2007</div></div>
            </div>
            <div className="skills">
              <div className="skill-title">Skills</div>
              <div className="skills-cart">
                <div className="cart">HTML</div>
                <div className="cart">CSS</div>
                <div className="cart">JavaScript</div>
                <div className="cart">React.js</div>
                <div className="cart">TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
