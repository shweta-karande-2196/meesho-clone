import "./App.css";

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("Adding to cart:", item);
    const existingProduct = cartItems.find((p) => p.id === item.id);
    if (existingProduct) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        )
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, qty: 1 }]);
    }
  };

  const handleRemoveFromCart = (item) => {
    console.log("Removing from cart:", item);
    const existingProduct = cartItems.find((p) => p.id === item.id);
    if (existingProduct.qty === 1) {
      // Remove the entire product from the cart
      const newCartItems = cartItems.filter((p) => p.id !== item.id);
      setCartItems(newCartItems);
    } else {
      // Update the quantity of the existing product
      setCartItems((prevCartItems) =>
        prevCartItems.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty - 1 } : p
        )
      );
    }
  };

  console.log("Cart items:", cartItems);

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
