import React from "react";
import OrderedMeals from "./OrderedMeals";

function ShowCart(props) {
  return (
    <div className="body-for-cart">
      <div className="cart">
        <OrderedMeals />
        <div className="button-container-in-cart">
          <button onClick={props.onConfirm}>Close</button>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
}

export default ShowCart;
