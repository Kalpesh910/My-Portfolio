import "./FooterStyles.css";
import React from 'react';
import {SiCodechef, SiLeetcode, SiGeeksforgeeks} from "react-icons/si";
import {FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub, } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                  <p> Pachora, Maharashtra, India.</p>
                </div>
                <div className="phone">
                  <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                  <p>+91 9579685367</p>

                </div>
                <div className="email">
                  <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                  <p>kalpeshksomwanshi910@gmail.com</p>
                </div>
            </div>
            <div className="right">
              <p>Profile Link</p>
              <div className="social"> 
                <FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <SiLeetcode size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <SiGeeksforgeeks size={20} style={{color:"#fff", marginRight: "2rem"}}/>
                <SiCodechef size={20} style={{color:"#fff", marginRight: "2rem"}}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer