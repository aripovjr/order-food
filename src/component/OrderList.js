import React from "react";
import "../App.css";

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

function OrderList() {
  return (
    <div className="list-of-orders">
      {InitialOrders.map((order) => (
        <div className="order-holder" key={order.id}>
          <div className="order">
            <h1 className="order-name">{order.name}</h1>
            <p className="order-description">{order.description}</p>
            <p className="order-price">${order.price}</p>
          </div>
          <div className="add-order">
            <p className="order-amount">
              Amount: <span> 1</span>
            </p>
            <button className="add-order-button">+ Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
