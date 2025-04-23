import React from 'react'
import Navbar from './NavBar'
import ProductItem from './ProductItem'
import { useState } from 'react'

const ItemPage = () => {

  const[cardCount,setCardCount] = useState(0);
  
    return (
      <>

      <ProductItem  setCardCount={setCardCount} cardCount={cardCount} />
      </>
    )
}

export default ItemPage
//<Navbar  cardCount={cardCount}/>