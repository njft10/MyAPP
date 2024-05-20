import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assests/star_icon.png";
import star_dull_icon from "../Assests/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_icon} />
          <img src={star_dull_icon} />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-old">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Looking for a comfortable and stylish shirt to wear out or to lounge
          around in? Look no further than the Keep On Smiling Shirt! This trendy
          oversized vintage shirt is made from 100% cotton, which makes it
          comfortable to wear. It is the most versatile piece in my wardrobe.
          Whether you‘re running errands or just want to relax at home, this
          shirt is perfect for any occasion. I can also wear it to the beach
          with shorts, to the mall with jeans, or even to bed! It’s super comfy
          and always makes me feel good when I put it on.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>Women , T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern , Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
