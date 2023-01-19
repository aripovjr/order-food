import React from "react";
import "../App.css";
import OrderHolder from "./OrderHolder";

const InitialOrders = [
  {
    id: "1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    name: "Schnitzel",
    description: "A german speciality",
    price: 16.5,
  },
  {
    id: "3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    name: "Green Bowl",
    description: "Health and green...",
    price: 18.99,
  },
];

function OrderList(props) {
  const gotAmountFromChild = (enteredAmount) => {
    props.gotAmountFromList(enteredAmount);
  };
  return (
    <div className="list-of-orders">
      {InitialOrders.map((order) => (
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
