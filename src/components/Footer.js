import React from 'react'
import "./FooterStyles.css"

import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";


const footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='leftpart'>

<div className='social'>
                <div className='phone'>
                    <p>
                      <a href="tel:+917738131649"><FaPhoneAlt style={{color:"#fff", marginRight: "1rem"}}/>+91 7738131649</a>
                    </p>
                </div>

                <div className='email'>
                    <p>
                      <a href="mailto:ivangkurian@gmail.com"><FaEnvelope style={{color:"#fff", marginRight: "1rem" }}/> ivangkurian@gmail.com</a>
                    </p>
                </div>
</div>
                </div>

                <div className='rightpart'>
                <div className='social'>

                   {/*   <a href="https://github.com/IvanGeorgeKurian">
                        <FaGithub style={{color: "#fff"}}/>
                    </a> */}  
                <div className='location'>

                    <div>
                        <p><FaMapMarkerAlt style={{color:"#fff", marginRight: "1rem"}}/>Mumbai</p>
                    </div>
                </div>

                    <p>  
                      <a href="https://www.linkedin.com/in/ivan-george-kurian/"><FaLinkedinIn style={{color: "#fff"}}/>LinkedIn</a>  
                    </p>                
                   

                </div>

            </div>

        </div>


    </div>
  )
}

export default footer