import "./Product.css";
import ProductContext from "../../../contexts/ProductContext";
import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { onAddProduct } = useContext(ProductContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/productPage/${product.id}`}>
          <img alt="product" src={product.image} />
        </Link>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <h4>{product.price} $</h4>
      </div>
      <button className="product-button" onClick={() => onAddProduct(product)}>
        Add to CART
      </button>
    </div>
  );
}
