import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.css";

const Home = ({ onAddToCart, onRemoveFromCart }) => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://i.ytimg.com/vi/7ax81WXhBLc/maxresdefault.jpg"
          className="card-img"
          alt="Background-Image"
          height="600px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            {/* <h5 className="card-title display-3 fw-bolder">
              NEW SEASON ARRIVALS
            </h5> */}
            {/* <p className="card-text lead fs-2">
              SHOP YOUR FAVOURITE ITEMS OR ADD TO CART
            </p> */}
          </div>
        </div>
      </div>
      <Products onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} />
    </div>
  );
};

export default Home;
