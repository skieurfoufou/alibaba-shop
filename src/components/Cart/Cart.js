import React, { useState } from "react";
import "./Cart.css";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import CartCheckOut from "./CartCheckout/CartCheckout";
import CartOrder from "./CartOrder/CartOrder";

const Cart = ({ cartItems }) => {
  const [isCartCheckoutOpen, setIsCartCheckoutOpen] = useState(false);
  const [isCartOrderOpen, setIsCartOrderOpen] = useState(false);

  function onCartCheckoutClick() {
    setIsCartCheckoutOpen(!isCartCheckoutOpen);
  }

  function onCartOrderClick() {
    setIsCartOrderOpen(!isCartOrderOpen);
  }

  return (
    <div className="cart-container">
      <CartList cartItems={cartItems} />
      <CartTotal />
      <button className="button-checkout" onClick={onCartCheckoutClick}>
        Checkout
      </button>
      <button className="button-order" onClick={onCartOrderClick}>
        Order
      </button>
      {isCartCheckoutOpen && <CartCheckOut onCancel={onCartCheckoutClick} />}
      {isCartOrderOpen && <CartOrder onCancel={onCartOrderClick} />}
    </div>
  );
};

export default Cart;
