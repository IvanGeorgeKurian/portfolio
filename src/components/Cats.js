import React from 'react'
import "./WorkCardStyles.css" 
import CatCard from "./CatCard"
import CatCardData from "./CatCardData"


const Cats = () => {
  return (
    <div className='work-container'>
       
       <div className='project-heading'>
        <h1>✨ My Cats ✨</h1>
        <p>( Thanks for exploring my portfolio and for caring enough to find this secret spot.❤️ )</p>
       </div>

        
        <div className='project-container'>
            {CatCardData.map((val, ind) => {
                return(
                    <CatCard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text}/>
                )
            })}
        </div>
    </div>
  )
}

export default Cats