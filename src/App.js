import "./App.css";
import Header from "./component/Header";
import OrderList from "./component/OrderList";
import IntroDescription from "./component/IntroDescription";
import { useState } from "react";

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
  const [addAmount, setAddAmount] = useState("");
  const amountFromHolder = (enteredAmount) => {
    setAddAmount(enteredAmount);
  };

  return (
    <div className="App">
      <Header Orders={InitialOrders} amount={addAmount} />
      <IntroDescription />
      <OrderList Orders={InitialOrders} gotAmountFromList={amountFromHolder} />
    </div>
  );
}

export default App;
