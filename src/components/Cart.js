import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

const EmptyCart = () => {
  return (
    <div className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row">
          <h3>Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  );
};

const CartItem = ({ product, onRemoveFromCart, onAddToCart }) => {
  return (
    <div key={product.id} className="px-4 my-5 bg-light rounded-3 py-5">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="col-md-4">
            <h3>{product.title}</h3>
            <p className="lead fw-bold">
              {product.qty} X ₹{product.price} = ₹{product.qty * product.price}
            </p>
            <button
              className="btn btn-outline-dark me-4"
              onClick={() => onRemoveFromCart(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              className="btn btn-outline-dark"
              onClick={() => onAddToCart(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutButton = ({ product }) => {
  const [productPrice, setProductPrice] = useState(
    `${product.qty * product.price}`
  );
  console.log(productPrice);
  return (
    <div className="container">
      <div className="row">
        <NavLink
          to="/Checkout"
          className="btn btn-outline-dark mb-5 w-25 mx-auto"
          onClick={() => {
            localStorage.setItem("price", productPrice);
          }}
        >
          Proceed to Checkout
        </NavLink>
      </div>
    </div>
  );
};

const Cart = ({ cartItems, onRemoveFromCart, onAddToCart }) => {
  return (
    <div>
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length !== 0 &&
        cartItems.map((product) => (
       <>
          <CartItem
            key={product.id}
            product={product}
            onRemoveFromCart={onRemoveFromCart}
            onAddToCart={onAddToCart}
            />
            {cartItems.length !== 0 && <CheckoutButton product={product} />}
       </>
        ))}
    </div>
  );
};

export default Cart;
