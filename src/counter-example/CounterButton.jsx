import React from "react";
import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/CounterSlice";

const CounterButton = () => {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(handleIncreaseCountAction())
    }

  return (
    <button onClick={handleClick}>Increase Count</button>
  )
};

export default CounterButton;
