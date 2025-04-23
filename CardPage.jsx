import React, { useState, useEffect } from 'react';
import './CardPage.css';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const CardPage = () => {
  const { cartItems, removeFromCart, } = useCart();
  const [quantities, setQuantities] = useState({});
 // const navigate = useNavigate();

  // Set initial quantities from localStorage or default
  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach(item => {
      initialQuantities[item.title] = item.qty || 1;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  // Increase quantity
  const handleIncrement = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: prev[title] + 1,
    }));
  };

  // Decrease quantity
  const handleDecrement = (title) => {
    setQuantities((prev) => ({
      ...prev,
      [title]: Math.max(prev[title] - 1, 1),
    }));
  };


  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const qty = quantities[item.title] || 1;
      return total + parseFloat(item.price) * qty;
    }, 0);
  };

  return (
    <div className="card-page-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.title}>
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price per item: ₹ {item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => handleDecrement(item.title)}>-</button>
                  <span>{quantities[item.title]}</span>
                  <button onClick={() => handleIncrement(item.title)}>+</button>
                </div>

                <p>
                  Subtotal: ₹ {parseFloat(item.price) * (quantities[item.title] || 1)}
                </p>
                <button onClick={() => removeFromCart(item.title)} className="remove-btn">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-summary">
            <h3>Total Price: ₹ {getTotalPrice().toFixed(2)}</h3>
            <Link to = "/OrderSuccess">
            <button className="pay-button" >Pay Now</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardPage;
