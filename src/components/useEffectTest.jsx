import React, {useEffect, useState} from 'react';

const UseEffectTest = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(0);

  console.log("Rendered");

  useEffect(() => {
    console.log("effect ran")
  }, [count]);
  
  return (
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}

export default UseEffectTest;