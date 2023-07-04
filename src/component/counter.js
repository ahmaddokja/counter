import React from "react";
import "./style.css";

const Counter = ({ valueOfCount, increase, decrease }) => {
  return (
    <div className="cont">
      <span>{valueOfCount}</span>
      <button className="incBtn" onClick={increase}>
        <span>+</span>
      </button>
      <button className="decBtn" onClick={decrease}>
        <span>-</span>
      </button>
    </div>
  );
};

export default Counter;
