import React, { useState, useEffect } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import Cart from "../../components/Cart/Cart";
import CartContext from "../../contexts/CartContext";
import products from "../../data/products";

function Home({ onRemoveProduct, cartItems }) {
  const [initProductsList, setInitProductsList] = useState(products);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const res = await fetch("https://fakestoreapi.com/products/");
  //     const data = await res.jason();
  //     setInitProductsList(data);
  //     setFilterProducts(data);
  //   }
  //   fetchProducts();
  // }, []);

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
