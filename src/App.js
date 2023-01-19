import "./App.css";
import Header from "./component/Header";
import OrderList from "./component/OrderList";
import IntroDescription from "./component/IntroDescription";
import { useState } from "react";

function App() {
  const [addAmount, setAddAmount] = useState("");
  const amountFromHolder = (enteredAmount) => {
    setAddAmount(enteredAmount);
  };

  return (
    <div className="App">
      <Header amount={addAmount} />
      <IntroDescription />
      <OrderList gotAmountFromList={amountFromHolder} />
    </div>
  );
}

export default App;
