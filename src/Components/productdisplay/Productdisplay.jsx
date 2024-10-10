import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const productdisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="display-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-star-img">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-old">${product.old_price}</div>
          <div className="productdisplay-new">${product.new_price}</div>
        </div>
        <div className="product-description">
          <p>
            Upgrade your wardrobe with our stylish type of clothing, made from
            high-quality [fabric/material] .
          </p>
        </div>
        <div className="productdisplay-rightsize">
          <h1>Select Size</h1>
        </div>
        <div className="productdisplay-rightsizes">
          <div>S</div>
          <div>M</div>
          <div>L</div>
          <div>X</div>
          <div>XL</div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>
          Women , T shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>
          Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default productdisplay;
