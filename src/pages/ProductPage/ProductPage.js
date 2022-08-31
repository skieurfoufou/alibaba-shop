import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductContext from "../../contexts/ProductContext";
import products from "../../data/products";
import Spinner from "../../components/Spinner/Spinner";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      const foundProduct = products.find((p) => p.id === Number(id));
      setProduct(foundProduct);
    }, 1000);
  }, [id]);

  const { onAddProduct } = useContext(ProductContext);

  const addProductAndRedirect = () => {
    onAddProduct(product);
    navigate("/", { replace: true });
  };

  return (
    <div className="product-page-card">
      {product ? (
        <>
          <div className="product-page-image-info">
            <div className="product-page-image">
              <img alt="product" src={product.image} />
            </div>
            <div className="product-page-info">
              <h3>Category: {product.category}</h3>
              <h1>{product.title}</h1>
              <h3>Description: {product.description}</h3>
              <h3>Rating: {product.rating.rate}</h3>
              <h3>Number of raters: {product.rating.count}</h3>
              <h4>PRICE: {product.price} $</h4>
            </div>
          </div>
          <button
            className="product-page-button"
            onClick={addProductAndRedirect}
          >
            Add to CART
          </button>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
