import React from 'react'
import './style.css'
import hero1 from '../../Assets/hero.png'
const Hero = () => {
  return (
    <div className="container">
        <div class="banner rows">
        <div class="col-2 heros">
          <img src={hero1} class="hero-img" alt="" width="100%" />
        </div>
        <div class="col-2">
          <h1>Get to <span>Read</span></h1>
          <h3><span>Favourite</span> your</h3>
          <h3>Books <span>with joy</span></h3>
          <div class="btn">
            <button type="button" class="primary-btn">Explore</button>
            {/* <button type="button">Watch Videos</button> */}
          </div>
          <div class="social-icons">
            <img src="/img/twitter-icon.png" alt="" />
            <img src="/img/instagram-icon.png" alt="" />
            <img src="/img/snapchat-icon.png" alt="" />
            <img src="/img/facebook-icon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero