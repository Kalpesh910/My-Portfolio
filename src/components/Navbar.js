import "./NavbarStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const hanleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={hanleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    )
}

export default Navbar;