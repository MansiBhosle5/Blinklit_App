import React from 'react';
import './ProductItem.css';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';

const ProductItem = () => {
  const { image, title, description, quantity, price } = useParams();
  const { updateCart } = useCart();

  function handleAddToCart() {
    updateCart({
      image: decodeURIComponent(image),
      title: decodeURIComponent(title),
      description: decodeURIComponent(description),
      quantity: decodeURIComponent(quantity),
      price: decodeURIComponent(price),
    });
    alert(`${decodeURIComponent(title)} added to cart!`);
  }

  return (
    <div className="product-detail-wrapper">
      <div className="product-detail-card">
        <div className="product-image-section">
          <img
            src={decodeURIComponent(image)}
            alt={decodeURIComponent(title)}
            className="zoom-image"
          />
        </div>
        <div className="product-info-section">
          <h2 className="product-title">{decodeURIComponent(title)}</h2>
          <p className="product-description">{decodeURIComponent(description)}</p>
          <p className="product-quantity">Quantity: {decodeURIComponent(quantity)}</p>
          <p className="product-price"> ₹ {decodeURIComponent(price)}</p>
          <button className="add-to-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
