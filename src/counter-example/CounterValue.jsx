import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
    const state = useSelector((state) => state)
    const {countValue} = state

  return (
    <div>
        <p>Counter value is {countValue}</p>
    </div>
  )
};

export default CounterValue;
