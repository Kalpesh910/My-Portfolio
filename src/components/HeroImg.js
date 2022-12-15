import "./HeroimgStyles.css";
import introimg from "../assets/background-img4.jpg";
import myimg from "../assets/my-img3.jpg";
import React from 'react';
import Intro_Card from "./Intro-Card";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" 
                src = {introimg} alt = "bg-img"
            />
        </div>
        <div className="content">
            <img className="my-img" 
                src = {myimg} alt="myimg"
                
            />
            <h1>Kalpesh Somwanshi</h1>
            <p>Event Lead at Codechef PCCOE Chapter | React js Developer | C++ Programmer</p>
            <div className="Intro-Card">
                <Intro_Card/>
            </div>
        </div>
        
    </div>
  )
}

export default HeroImg;