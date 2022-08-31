import React from "react";
import "./CartOrder.css";

function CartOrder({ onCancel }) {
  return (
    <>
      <div className="drop-shadow" onClick={onCancel}></div>
      <div className="div-CartOrder"></div>
    </>
  );
}

export default CartOrder;
