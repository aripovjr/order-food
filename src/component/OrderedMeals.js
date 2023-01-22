import React, { useContext } from "react";
import CartContext from "../store/cart-context";

function OrderedMeals(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div className="ordered-meals">
      <div className="ordered-meal-info">
        <h1 className="ordered-meal">{props.name}</h1>
        <p className="ordered-meal-price">{price}</p>
        <p className="ordered-amount">x {props.amount}</p>
      </div>
      <div className="button-container">
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </div>
  );
}

export default OrderedMeals;
