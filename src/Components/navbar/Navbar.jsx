import React, { useContext, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartitem} = useContext(ShopContext)
  return (
    <div className='header'>
        <div className="logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className="nav">
            <ul>
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'black'}} to='/'>SHOP</Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none', color: 'black'}}  to='/mens'>MEN</Link>{menu==="mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none', color: 'black'}}  to='/womens'>WOMEN</Link>{menu==="womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none', color: 'black'}}  to='/kids'>KIDS</Link>{menu==="kids"?<hr />:<></>}</li>   
            </ul>
        </div>
        <div className="btn">
        <Link to='/login'><button>LOGIN</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartitem()}</div>
        </div>
    </div>
  )
}

export default Navbar