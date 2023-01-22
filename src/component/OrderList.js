import React from "react";
import "../App.css";
import MealItem from "./MealItem";
import OrderHolder from "./OrderHolder";

function OrderList(props) {
  return (
    <div className="list-of-orders">
      {props.Orders.map((order) => (
        <MealItem
          id={order.id}
          key={order.id}
          name={order.name}
          description={order.description}
          price={order.price}
        />
      ))}
    </div>
  );
}

export default OrderList;
