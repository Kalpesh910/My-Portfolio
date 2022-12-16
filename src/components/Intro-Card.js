import "./Intro-Card.css";
// import skill from "./skill"
import React from 'react'

function Intro_Card() {
  return (
    <div className="introcard">
      <h2>
        <span style={{ color: 'white' }}>
          Bio
        </span>
      </h2>
      <hr></hr>
      <div className="aboutme">
      
        I am a passionate programmer with approximately 2 years of coding experience. Moreover, I am
        currently pursuing Bachelors of Technology in Information Technology at Pimpri Chinchwad College
        of Enginering in Pune. I have a good coding experience in domains such as C++, Javascript, Java,
        ReactJs and I am currently exploring Node.js, MongoDB.
      
      </div>     
      <div className="skills">
        ✨ C++ &nbsp; &nbsp; 
        ✨ DSA &nbsp; &nbsp; 
        ✨ MongoDB &nbsp; &nbsp;
        ✨ MySQL &nbsp; &nbsp;
        ✨ React js &nbsp; &nbsp; 
        ✨ Javascript &nbsp; &nbsp; 
      </div>
    </div>
  )
}

export default Intro_Card