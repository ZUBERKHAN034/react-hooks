import React, { useState } from "react";

function UseState() {
  let [count, setCount] = useState(0);
  const add = () => setCount(count + 1);
  const remove = () => count > 0 ? setCount(count - 1) : count = count;
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

export default UseState;
