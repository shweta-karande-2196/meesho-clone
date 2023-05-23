import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "bootstrap/dist/css/bootstrap.css";

const Loading = () => {
  return (
    <>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    </>
  );
};

const ShowProducts = ({ data, onAddToCart, onRemoveFromCart }) => {
  const [filter, setFilter] = useState(data);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Mens Clothing
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Womens Clothing
        </button>
      </div>
      {filter.map((product) => {
        return (
          <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="250px"
                />
                <div className="card-body">
                  <h4 className="card-title mb-0">
                    {" "}
                    {product.title.substring(0, 12)}{" "}
                  </h4>
                  <p className="card-text lead fw-bold my-3">
                    ₹{product.price}
                  </p>
                  <p className="lead fw-bolder">
                    Rating: {product.rating.rate} <i className="fa fa-star"></i>{" "}
                  </p>
                  <p className="card-text lead">
                    {product.description.substring(0, 40)}
                  </p>

                  <button
                    className="btn btn-outline-dark px-4 py-2"
                    onClick={() => onAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-outline-dark ms-2 px-4 py-2"
                    onClick={() => onRemoveFromCart(product)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const Products = ({ onAddToCart, onRemoveFromCart }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  // const filterProduct = (cat) => {
  //   const updatedList = data.filter((x) => x.category === cat);
  //   setFilter(updatedList);
  // };

  const addProduct = (product) => {
    onAddToCart(product);
  };

  const removeProduct = (product) => {
    onRemoveFromCart(product);
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : (
            <ShowProducts
              data={filter}
              onAddToCart={addProduct}
              onRemoveFromCart={removeProduct}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
