import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductCard = ({ image, title, description, quantity, price }) => {
  const [isCard, setIsCard] = useState(false);
  const { updateCart } = useCart();

  function handleCard() {
    if (!isCard) {
      updateCart({ image, title, description, quantity, price });
      setIsCard(true);
      alert(`${title} added to cart!`);
    }
  }

  return (
    <div className="product-card">
      <Link to={`/ProductItem/${encodeURIComponent(image)}/${encodeURIComponent(title)}/${encodeURIComponent(description)}/${encodeURIComponent(quantity)}/${encodeURIComponent(price)}`}>
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
          <h3 className="product-title">{title}</h3>
          <p className="product-description">{description}</p>
          <p className="product-quantity">{quantity}</p>
          <p className="product-price">₹ {price}</p>
        </div>
      </Link>
      <button className="add-button" onClick={handleCard}>
        ADD
      </button>
    </div>
  );
};

export default ProductCard;
