import React, { useContext } from "react";
import ProductContext from "../../../contexts/ProductContext";
import CartContext from "../../../contexts/CartContext";
import "./CartItem.css";

const CartItem = ({ item }) => {
  const { onAddProduct } = useContext(ProductContext);
  const { onRemoveProduct } = useContext(CartContext);

  return (
    <div className="CartItem-card">
      <img alt="product" src={item.image} className="CartItem-image" />

      <div>{item.title}</div>
      <div className="CartItem-side">
        <div className="CartItem-counter">
          <div
            className="CartItem-counter-button"
            onClick={() => onRemoveProduct(item)}
          >
            {" "}
            -{" "}
          </div>
          <div className="CartItem-counter-price">{item.price}</div>
          <div
            className="CartItem-counter-button"
            onClick={() => onAddProduct(item)}
          >
            {" "}
            +{" "}
          </div>
        </div>
        <div>QTY: {item.quantity}</div>
      </div>
    </div>
  );
};

export default CartItem;
