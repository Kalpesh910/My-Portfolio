import "./HeroimgStyles.css";
import introimg from "../assets/background-img4.jpg";
import myimg from "../assets/my-img2.png";
import React from 'react';

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
            
        </div>
    </div>
  )
}

export default HeroImg;