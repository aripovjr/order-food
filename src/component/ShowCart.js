import React from "react";
import OrderedMeals from "./OrderedMeals";

function ShowCart(props) {
  console.log(props.name);
  return (
    <div className="body-for-cart">
      <div className="cart">
        <OrderedMeals />
      </div>
    </div>
  );
}

export default ShowCart;
