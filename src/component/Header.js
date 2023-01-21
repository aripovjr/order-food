import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../store/cart-context";
import ShowCart from "./ShowCart";

function Header(props) {
  const [clickButton, setClickButton] = useState(false);
  var { amount } = props;

  const showCart = () => {
    setClickButton(true);
  };

  const closeCart = () => {
    setClickButton(false);
  };

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);
  console.log(numberOfCartItems);
  return (
    <>
      {clickButton && <ShowCart onConfirm={closeCart} />}
      <div className="navigation">
        <h1>React Meals</h1>
        <button onClick={showCart} className="header-button">
          <FaShoppingCart style={{ marginRight: "10px" }} />
          Your Cart
          <span className="amount-in-header">{numberOfCartItems}</span>
        </button>
      </div>
    </>
  );
}

export default Header;
