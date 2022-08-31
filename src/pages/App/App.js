import Home from "../Home/Home";
import ProductPage from "../ProductPage/ProductPage";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductContext from "../../contexts/ProductContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function onAddProduct(product) {
    const newCartItems = [...cartItems];
    const foundItem = newCartItems.find((el) => el.id === product.id);
    if (foundItem) {
      foundItem.quantity++;
      setCartItems(newCartItems);
    } else {
      const cartItem = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: 1,
      };
      setCartItems([...cartItems, cartItem]);
    }
  }

  function onRemoveProduct(product) {
    let newCartItems = [...cartItems];

    const foundItem = newCartItems.find((el) => el.id === product.id);

    if (foundItem.quantity > 1) {
      foundItem.quantity--;
      setCartItems(newCartItems);
    } else {
      setCartItems(newCartItems.filter((el) => el.id !== foundItem.id));
    }
  }

  return (
    <ProductContext.Provider value={{ onAddProduct }}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home onRemoveProduct={onRemoveProduct} cartItems={cartItems} />
            }
          />
          <Route exact path="/productPage/:id" element={<ProductPage />} />
        </Routes>
      </Router>
    </ProductContext.Provider>
  );
}
export default App;
