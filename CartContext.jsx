// CartContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Sync cart items from localStorage and update count
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart); // Sync the cart items state
  }, []);

  // Function to update the cart in localStorage and state
  const updateCart = (newItem) => {
    let updatedCart = [...cartItems, newItem].filter(
      (item, index, self) =>
        index === self.findIndex((m) => m.title === item.title)
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // Update state with new cart
  };

  // Function to remove item from cart
  const removeFromCart = (title) => {
    const updatedCart = cartItems.filter(item => item.title !== title);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
