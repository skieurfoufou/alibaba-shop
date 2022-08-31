import CartItem from "../CartItem/CartItem";
import "./CartList.css";
import React from "react";

const CartList = ({ cartItems }) => {
  return (
    <section className="CartList-container">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </section>
  );
};
export default CartList;
