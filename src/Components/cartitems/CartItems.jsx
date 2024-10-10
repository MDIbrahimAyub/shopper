import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const { all_product, cartItems, removeFromCart , getTotalCartAmount } = useContext(ShopContext);
    return (
        <div className='cartitem'>
            <div className="cart-item-format-main">
                <p>Products</p>
                <p>Tittle</p>
                <p>Price</p>
                <p>Qantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitem-forat cart-item-format-main">
                            <img className='cart-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='remove-img' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            <hr />
                        </div>
                    </div>
                }
                return null;
            })}

            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>CART TOTAL</h1>
                    <div className="cartitem-tatalitem">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <div className="cartitem-tatalitem">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className="cartitem-tatalitem">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button>PROCCED TO CHECKOUT</button>
                </div>
                <div className="cart-item-promrcode">
                    <p>If you have a Prome Code , Enter it here</p>
                    <div className="cartitem-prormcode">
                        <input type="text" name="" id="promo Code" placeholder='Prome Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems