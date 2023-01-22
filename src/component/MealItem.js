import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import OrderHolder from "./OrderHolder";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <div className="order-holder">
      <div className="order">
        <h1 className="order-name">{props.name}</h1>
        <p className="order-description">{props.description}</p>
        <p className="order-price">{price}</p>
      </div>
      <OrderHolder onAddToCart={addToCartHandler} />
    </div>
  );
}

export default MealItem;
