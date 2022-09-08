import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import CartContext from "../../contexts/CartContext";
// import products from "../../data/products";

function Home({ onRemoveProduct, cartItems }) {
  const [initProductsList, setInitProductsList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      setInitProductsList(data);
      setFilteredProducts(data);
    }
    fetchProducts();
  }, []);

  function filterProducts(e) {
    if (e.target.value === "all") {
      setFilteredProducts(initProductsList);
    } else {
      const newProducts = initProductsList.filter(
        (value) => value.category === e.target.value
      );
      setFilteredProducts(newProducts);
    }
  }

  function sortedProducts(e) {
    if (e.target.value === "low-to-high") {
      const newProducts = initProductsList.sort((a, b) =>
        a.price !== b.price ? (a.price < b.price ? -1 : 1) : 0
      );
      setFilteredProducts(newProducts);
    }
    if (e.target.value === "high-to-low") {
      const newProducts = initProductsList.sort((a, b) =>
        a.price !== b.price ? (a.price > b.price ? -1 : 1) : 0
      );
      setFilteredProducts(newProducts);
    }
    if (e.target.value === "a-z") {
      const newProducts = initProductsList.sort((a, b) =>
        a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
      );
      setFilteredProducts(newProducts);
    }
    if (e.target.value === "z-a") {
      const newProducts = initProductsList.sort((a, b) =>
        a.title !== b.title ? (a.title > b.title ? -1 : 1) : 0
      );
      setFilteredProducts(newProducts);
    }
    if (e.target.value === "rating") {
      const newProducts = initProductsList.sort((a, b) =>
        a.rating.rate !== b.rating.rate
          ? a.rating.rate > b.rating.rate
            ? -1
            : 1
          : 0
      );
      setFilteredProducts(newProducts);
    }
  }

  function onCartClick() {
    if (isCartOpen) {
      setIsCartOpen(false);
    } else {
      setIsCartOpen(true);
    }
  }

  function calculateTotalCartQuantity() {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  function calculateTotalCartPrice() {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  }
  return (
    <>
      <Header
        products={initProductsList}
        onChangeFilter={filterProducts}
        onChangeSorter={sortedProducts}
        onCartClick={onCartClick}
        itemsCounter={calculateTotalCartQuantity()}
      />
      <div className="products-cart">
        <Products products={filteredProducts} />
        <CartContext.Provider
          value={{ calculateTotalCartPrice, onRemoveProduct }}
        >
          {isCartOpen && <Cart cartItems={cartItems} />}{" "}
        </CartContext.Provider>
      </div>
    </>
  );
}

export default Home;
