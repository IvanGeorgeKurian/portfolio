import "./HeroImgStyles.css";
import React from 'react';
import IntroImg from "../assets/hero_image_1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero"> 
    <div className="mask">
    
    <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>

    <div className="content">
       {/* <p>HIII, I am Ivan.</p>*/}
        <div className="animated-text">
            <h1>I'm a <br/>
            <span></span></h1>
        </div>
      
        <div>

            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn btn-light">Contact</Link>

        </div>
    </div>


    </div>
  )
}

export default HeroImg