import React from "react";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import "./CartTotal.css";

function CartTotal() {
  const { calculateTotalCartPrice } = useContext(CartContext);

  return (
    <div className="cartTotal-container">
      <div className="totalPrice-container">
        TOTAL AMOUNT :
        <span className="totalPrice">
          {calculateTotalCartPrice().toFixed(2)} $
        </span>
      </div>
    </div>
  );
}

export default CartTotal;
