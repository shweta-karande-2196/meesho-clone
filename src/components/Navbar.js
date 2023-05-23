import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

const Navbar = (props) => {
  const [islogged, setislogged] = useState(localStorage.getItem("islogged"));
  const cartItems = props.cartItems;
  const handleLogOut = () => {
    if (window.confirm("Are You Sure to LogOut ?")) {
      localStorage.setItem("islogged", false);
      setislogged(false);
      console.log(islogged);
    }
  };
  console.log(islogged);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4" to="/">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_5UWgZiXmiUoqBP276CBm9KsxUcupAG2boIlZpGau&s" />
          </NavLink>
          <div className="inputDiv">
            <img
              className="SearchImg"
              src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
            />
            <input
              id="input"
              placeholder="Try Saree, Kurti or Search by Product Code"
            />
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {islogged ? (
                <button onClick={handleLogOut} className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>
                  Log out
                </button>
              ) : (
                <NavLink to="/login" className="btn btn-outline-dark">
                  <i className="fa fa-sign-in me-1"></i>
                  Login
                </NavLink>
              )}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Cart ({cartItems.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
