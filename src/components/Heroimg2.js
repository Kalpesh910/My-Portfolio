import './HeroImg2Styles.css';
import React, { Component } from 'react';
import introimg from "../assets/background-img4.jpg";
class Heroimg2 extends Component {

  render() {
    return( 
    <div className="hero-img">
      <div className="mask">
        <img className="intro-img"
          src={introimg} alt="bg-img"
        />
      </div>
      <div className='heading'>
        <h1>{this.props.heading}</h1>

      </div>
    </div>
    );
  };
};

export default Heroimg2