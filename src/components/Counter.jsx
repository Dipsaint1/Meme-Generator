import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  } 

  // const decrement = () => {
  //   setCount(prevCount => prevCount - 1);
  // } 

  return ( 
    <div className="counter">
      <button onClick={increment} className="counter--minus">+</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button onClick={() => setCount(count - 1)} className="counter--minus">-</button>
    </div>
    
   );
}
 
export default Counter;