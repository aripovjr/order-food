import "./App.css";
import Header from "./component/Header";
import OrderList from "./component/OrderList";
import IntroDescription from "./component/IntroDescription";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

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

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header Orders={InitialOrders} />
        <IntroDescription />
        <OrderList Orders={InitialOrders} />
      </div>
    </CartProvider>
  );
}

export default App;
