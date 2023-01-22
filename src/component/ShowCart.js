import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import OrderedMeals from "./OrderedMeals";

function ShowCart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <div className="body-for-cart">
      <div className="cart">
        <div className="meal-container">
          {cartCtx.items.map((item) => (
            <OrderedMeals
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={cartItemAddHandler.bind(null, item.id)}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
            />
          ))}
        </div>
        <div className="cart-footer">
          <div className="text">
            <p>Total Amount</p>
            <p>{totalAmount}</p>
          </div>
          <div className="button-container-in-cart">
            <button onClick={props.onConfirm}>Close</button>
            {hasItems && <button>Order</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
