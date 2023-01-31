import React,{useEffect,useState} from 'react';

// example of componentDidMount & componentDidUpdate using useEffect by state change
function UseEffectThree() {
  let [count, setCount] = useState(0);
  let [text,setText] = useState('');
  const add = () => setCount(count + 1);
  const remove = () => (count > 0 ? setCount(count - 1) : (count = count));
  useEffect(
    () => {
        //side effect works here like APIs calls
      document.title = `count is ${count}`;
      console.log("useEffect triggered");
    }, [count]
  );
  console.log("component rendered");
  return (
    <>
      <div>
        <button onClick={() => remove()}>-</button>
        <h1>{`current count is ${count}`}</h1>
        <button onClick={() => add()}>+</button>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
    </>
  );
}

export default UseEffectThree;