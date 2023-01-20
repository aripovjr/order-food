import React from "react";
import "../App.css";
import OrderHolder from "./OrderHolder";

function OrderList(props) {
  console.log(props);
  const gotAmountFromChild = (enteredAmount) => {
    props.gotAmountFromList(enteredAmount);
  };
  return (
    <div className="list-of-orders">
      {props.Orders.map((order) => (
        <OrderHolder
          onGetAmount={gotAmountFromChild}
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
