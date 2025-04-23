import { useParams } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";
import ProductList from "./ProductList";




const ProductPage = () => {
  const { categoryName, categoryId } = useParams();
  const [cardCount, setCardCount] = useState(0);

  return (
    <>
   
      <ProductList
        categoryName={categoryName}
        categoryId={categoryId}
        setCardCount={setCardCount}
        cardCount={cardCount}
      />
    </>
  );
};

//<NavBar cardCount={cardCount} />


export default ProductPage;
