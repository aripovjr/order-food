import React from "react";

function OrderedMeals() {
  return (
    <div className="ordered-meals">
      <div className="ordered-meal-info">
        <h1 className="ordered-meal">Sushi</h1>
        <p className="ordered-meal-price">$22.90</p>
        <p className="ordered-amount">X 1</p>
      </div>
      <div className="button-container">
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default OrderedMeals;
