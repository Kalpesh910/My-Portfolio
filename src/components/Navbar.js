import "./NavbarStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

// const Navbar = () => {
//     const [activeNav, setActiveNav] = useState('#')
//     return (
//         <nav>
//             <a herf="#" onClick={() => setActiveNav('#')}
//             className={activeNav === '#' ? 'active' : ''}
//             ><h1>Home</h1></a>
//             <a herf = "#project" onClick={() => setActiveNav
//             ('#project')} className={activeNav === '#project' ?
//             'active' : ''} ><h1>Projects</h1></a>
//         </nav>
//     )
// }

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