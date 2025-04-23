import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = ({ categoryName, categoryId, setCardCount, cardCount }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch(`http://localhost:5000/Blinkit/category/item/${categoryId}`);
      const data = await response.json();
      console.log("Fetched data:", data);
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log("Fetch error:", error);
      setItems([]); // fallback to empty array
    }
  };

  useEffect(() => {
    if (categoryId) {
      fetchItems();
    }
  }, [categoryId]);
 

  return (
    <>
      <h1 className="list-title">{categoryName}</h1> {/* Display category name */}
      <div className="ProductList-container">
        {items.map((item) => (
          <ProductCard
            key={item._id}
            title={item.title}
            image={item.image}
            description={item.description}
            quantity={item.quantity}
            price={item.price}
            setCardCount={setCardCount}
            cardCount={cardCount}
          />
        ))}
      </div>
    </>
  );
};


export default ProductList;
