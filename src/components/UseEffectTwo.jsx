import React,{useState,useEffect} from 'react'

// example of componentDidMount only
function UseEffectTwo() {
    let [count, setCount] = useState(0);
    const add = () => setCount(count + 1);
    const remove = () => (count > 0 ? setCount(count - 1) : (count = count));
    // useEffect called only when the [] get something init.
    useEffect(
      () => {
        document.title = `count is ${count}`;
        console.log("useEffect triggered");
      }, []
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

export default UseEffectTwo