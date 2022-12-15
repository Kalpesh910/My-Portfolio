import "./FooterStyles.css";
import React from 'react';
import {SiCodechef, SiLeetcode, SiGeeksforgeeks} from "react-icons/si";
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, } from "react-icons/fa";
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
                <a href="https://github.com/Kalpesh910"><FaGithub size={20} style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://www.linkedin.com/in/kalpesh-somwanshi-b24a1a217/"><FaLinkedin size={20} style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://leetcode.com/Kalpesh_910/"><SiLeetcode size={20} style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://auth.geeksforgeeks.org/user/kalpesh910/practice/"><SiGeeksforgeeks size={20} style={{color:"#fff", marginRight: "2rem"}}/></a>
                <a href="https://www.codechef.com/users/kalpesh_910"><SiCodechef size={20} style={{color:"#fff", marginRight: "2rem"}}/></a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer