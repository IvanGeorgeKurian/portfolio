import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import Stack2 from "../assets/Stack2.png"


const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I ?</h1>
            <p>I'm Ivan George, a Computer Engineering graduate with a passion for building practical and meaningful tech solutions. I’ve worked on projects like a live company website for InfraX Data Solutions and a fake news detection system using machine learning. I’m currently deepening my React skills and actively looking for job opportunities. Outside of code, I love <Link to="/MyCats" className="paragraph-link">my cats</Link>, enjoy running to clear my head, and spend way too much time perfecting my work desk setup. I’m driven by curiosity, clean design, and the joy of learning something new every day.</p>
            <Link to="/Contact">
            <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">

                <div className="img-stack bottom">
                    <img src={Stack2} className="img" alt="true"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent