import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const AllProduct = ({ items, setCardCount, cardCount }) => {
  return (
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
  );
};

export default AllProduct;
