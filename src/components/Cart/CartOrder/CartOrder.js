import React from "react";
import "./CartOrder.css";

function CartOrder({ onCancel }) {
  return (
    <>
      <div className="drop-shadow" onClick={onCancel}></div>
      <div className="div-CartOrder">
        <h1>THANKS FOR YOUR ORDER !</h1>
        <h2>We will direct you to the payment page</h2>
      </div>
    </>
  );
}

export default CartOrder;
