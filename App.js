import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import ItemPage from "./ItemPage";
import CardPage from "./CardPage";
import { CartProvider } from "./CartContext";
import OrderSuccess from "./OrderSuccess";
import Login from "./Login";
import Register from "./Register";
import Navbar from "./NavBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
      <Navbar user={user} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={<HomePage searchQuery={searchQuery} />}
        />
        <Route path="/ProductPage/:categoryName/:categoryId" element={<ProductPage />} />
        <Route path="/ProductItem/:image/:title/:description/:quantity/:price" element={<ItemPage />} />
        <Route path="/CardPage" element={<CardPage />} />
        <Route path="/OrderSuccess" element={<OrderSuccess />} />
        <Route path="/User/Login" element={<Login setUser={setUser} />} />
        <Route path="/User/Register" element={<Register />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
