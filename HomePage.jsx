import React, { useEffect, useState } from "react";
import Offer from "./offer";
import CategoryList from "./CategoryList";
import AllProduct from "./AllProduct";
import "./ProductList.css";

const HomePage = ({ searchQuery = "", setCardCount, cardCount }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const res = await fetch("http://localhost:5000/Blinkit/all-items");
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchAllItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item?.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Offer />
      <CategoryList />
      <h2 style={{ padding: "10px 20px" }}>All Products</h2>
      {filteredItems.length > 0 ? (
        <AllProduct
          items={filteredItems}
          setCardCount={setCardCount}
          cardCount={cardCount}
        />
      ) : (
        <p style={{ paddingLeft: "20px" }}>No matching items found.</p>
      )}
    </>
  );
};

export default HomePage;
