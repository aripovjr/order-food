import React, { useContext, useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../store/cart-context";
import ShowCart from "./ShowCart";

function Header(props) {
  const [clickButton, setClickButton] = useState(false);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const showCart = () => {
    setClickButton(true);
  };

  const closeCart = () => {
    setClickButton(false);
  };

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

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
