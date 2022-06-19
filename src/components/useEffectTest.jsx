import React, {useEffect, useState} from 'react';

const UseEffectTest = () => {
  const [starWarsData, setStarWarsData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(function(){

    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
    .catch((err) => {
      return err;
    });
  }, [count]);
  
  return (
    <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}

export default UseEffectTest; 