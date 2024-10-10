import React from 'react'
import './Hero.css'
import hero_img from "../Assets/hero_image.png"
import hand_icon from "../Assets/hand_icon.png"

const Hero = () => {
  return (
    <div className="hero">
        <div className="hero1">
            <div className="h-t">
                <p>New Arrivals Only</p>
                <h1>new <img src={hand_icon} alt="" /> <br /> collection <br /> for everyone</h1>
                <button>New Collection &#x2192;</button>
            </div>
        </div>
        <div className="hero1">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero