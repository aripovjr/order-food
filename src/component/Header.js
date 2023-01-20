import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ShowCart from "./ShowCart";

function Header(props) {
  const [clickButton, setClickButton] = useState(false);
  var { amount } = props;

  const showCart = () => {
    setClickButton(true);
  };

  return (
    <>
      {clickButton && <ShowCart />}
      <div className="navigation">
        <h1>React Meals</h1>
        <button onClick={showCart} className="header-button">
          <FaShoppingCart style={{ marginRight: "10px" }} />
          Your Cart
          {amount === "" ? (
            <span className="amount-in-header">0</span>
          ) : (
            <span className="amount-in-header">{(amount = amount + 0)}</span>
          )}
        </button>
      </div>
    </>
  );
}

export default Header;
