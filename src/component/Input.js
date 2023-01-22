import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label htmlFor={props.input.id} className="order-amount">
        {props.label}
      </label>
      <input ref={ref} {...props.input} />
    </>
  );
});

export default Input;
