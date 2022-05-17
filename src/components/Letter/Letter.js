import React from 'react'
import './style.css'
import image from '../../Assets/logo.png'
const Letter = () => {
  return (
   <div className="container row">
   <div className="slide title">
     <h1>
       STAY WITH <span style={{ color: "#670F3B" }}>US</span>
     </h1>
   </div>
   Subscribe to our newsletter now and stay up-to-date with new collection
   <div class="newLetter silder">
        <div class="col heros">
          <img src={image} class="hero-img" alt="" width="100%" />
        </div>
        <div class="col input">
          <h1>Your Email</h1>
          <input type="text" placeholder='Your Email' />
        </div>
      </div>
 </div>
  )
}

export default Letter