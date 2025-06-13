import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, useEffect } from 'react'; // Import useEffect

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); // Toggles the menu open/close

    const [color, setColor] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll animation
        });
    };

    // Function to handle link clicks: close menu and scroll to top
    const handleLinkClick = () => {
        setClick(false); // Close the hamburger menu
        scrollToTop();   // Scroll to the top of the page
    };

    

    // Effect to add/remove scroll event listener for header color change
    useEffect(() => {
        const changeHeaderColor = () => {
            if (window.scrollY >= 100) {
                setColor(true);
            } else {
                setColor(false);
            }
        };

        window.addEventListener("scroll", changeHeaderColor);

        return () => {
            window.removeEventListener("scroll", changeHeaderColor);
        };
    }, []); 

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/" onClick={handleLinkClick}> {/* Apply handleLinkClick to logo */}
                <h1>Portfolio.</h1>
            </Link>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li> <Link to="/" onClick={handleLinkClick}>Home</Link> </li>
                <li> <Link to="/Project" onClick={handleLinkClick}>Projects</Link> </li>
                <li> <Link to="/About" onClick={handleLinkClick}>About</Link> </li>
                <li> <a href="/IvanGeorgeResume_2025.pdf" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>Resume</a> </li>
                <li> <Link to="/Contact" onClick={handleLinkClick}>Contact</Link> </li>
            </ul>

            <div className="hamburger" onClick={handleClick}>
                {click ? (
                    <FaTimes size={30} style={{ color: "#fff" }} />
                ) : (
                    <FaBars size={30} style={{ color: "#fff" }} />
                )}
            </div>
        </div>
    );
};

export default Navbar;