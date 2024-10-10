import React from 'react'
import './offer.css'
import exclusive_image from "../Assets/exclusive_image.png"

const offer = () => {
  return (
    <div className='offer'>
        <div className="offer1">
            <div className="offer2">
                <div className="o-t">
                    <h1>Exclusive <br /> Offers For You</h1>
                    <p>Only on best seller products</p>
                    <button>Check Now</button>
                </div>
            </div>
            <div className="offer2">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default offer