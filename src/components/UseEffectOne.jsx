import React, { useState, useEffect } from "react";

// example of componentDidMount & componentDidUpdate using useEffect
function UseEffectOne() {
  let [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const remove = () => (count > 0 ? setCount(count - 1) : (count = count));
  useEffect(
    () => {
        //side effect works here like APIs calls
      document.title = `count is ${count}`;
      console.log("useEffect triggered");
    }, //no dependencies array is provided
  );
  console.log("component rendered");
  return (
    <>
      <div>
        <button onClick={() => remove()}>-</button>
        <h1>{`current count is ${count}`}</h1>
        <button onClick={() => add()}>+</button>
      </div>
    </>
  );
}
export default UseEffectOne;
