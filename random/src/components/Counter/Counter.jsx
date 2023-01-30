import React from "react";
import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + 1);
  };
  const decrease = () => {
    setCount((count) => count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const isDisabled = count <= 0 ? true : false;

  return (
    <div>
      <button onClick={decrease} disabled={isDisabled}>
        -1
      </button>
      <span>{count}</span>
      <button onClick={increase}>+1</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
