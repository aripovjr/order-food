import React, { useState } from "react";

function OrderHolder(props) {
  const [amountValue, setAmountValue] = useState(0);

  const takeAmountValue = (e) => {
    setAmountValue(e.target.value);
  };

  const addAmount = () => {
    props.onGetAmount(amountValue);
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="order-holder">
      <div className="order">
        <h1 className="order-name">{props.name}</h1>
        <p className="order-description">{props.description}</p>
        <p className="order-price">${props.price}</p>
      </div>
      <form onSubmit={submitHandler} className="add-order">
        <label className="order-amount">Amount:</label>
        <input onChange={takeAmountValue} value={amountValue} type="number" />
        <button onClick={addAmount} className="add-order-button">
          + Add
        </button>
      </form>
    </div>
  );
}

export default OrderHolder;
