import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function Header(props) {
  return (
    <div className="navigation">
      <h1>React Meals</h1>
      <button className="header-button">
        <FaShoppingCart style={{ marginRight: "10px" }} />
        Your Cart
        {props.amount === "" ? (
          <span className="amount-in-header">0</span>
        ) : (
          <span className="amount-in-header">{props.amount}</span>
        )}
      </button>
    </div>
  );
}

export default Header;
