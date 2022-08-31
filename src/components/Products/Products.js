import Product from "./Product/Product";
import "./Products.css";
import React from "react";

export default function Products({ products }) {
  return (
    <section className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}
