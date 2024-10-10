import React from 'react'
import './footer.css'
import logo_big from "../Assets/logo_big.png"


const footer = () => {
  return (
    <div className='footer'>
        <div className="footer1">
            <img src={logo_big} alt="" />
            <h1>SHOPPER</h1>
        </div>
        <div className="footer2">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footer3">
        <i class="ri-instagram-line"></i>
        <i class="ri-pinterest-line"></i>
        <i class="ri-whatsapp-line"></i>
        </div>
        <div className="footer4">
            <div className="line">
                <div className="line1"></div>
            </div>
            <p>copyright @ 2024. All Right Reserved. Created By Muhammad Ibrahim</p>
        </div>
    </div>
  )
}

export default footer