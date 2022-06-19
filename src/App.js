import React, { useState, useEffect } from 'react';
import './App.css';
// import Header from "./components/Header";
// import Meme from "./components/Meme";
// import Forms from "./components/Forms";
// import FormSample from "./components/FormSample";
// import Counter from "./components/Counter";
import UseEffectTest from "./components/useEffectTest";

const App = () => {
  const [starWarsData, setStarWarsData] = useState({});

  console.log("Rendered");
  
  useEffect(function(){
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))
    .catch((err) => {
      return err;
    });
  }, []);

  // useEffects only run after the 'return' function has been placed on the DOM
  return (
      <UseEffectTest />

      // <div>
      //   <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      // </div>
      // <>
      //   {/* <Header /> */}
      //   {/* <Meme/> */}
      //   {/* <Forms /> */}
      //   {/* <Counter/> */}
      //   {/* <FormSample /> */}
      //   <API />
      // </>
  )
}

export default App;