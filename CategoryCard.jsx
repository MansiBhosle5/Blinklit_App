import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ image, title, id }) => {
  return (
    <Link to={`/ProductPage/${title}/${id}`}>
      <div className="category-card">
        <img src={image} alt={title} className="category-image" />
        <h3 className="category-title">{title}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;




//  {category.title}
//</Link>
//<Link to={`/ProductPage/${title}`} className="category-link"></Link>