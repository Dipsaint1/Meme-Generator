import React, {useState} from 'react';
import './App.css';
// import Header from "./components/Header";
// import Meme from "./components/Meme";
import WindowTracker from "./components/WindowTracker";

const App = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(prev => !prev);
  }
  
  return (
      <>
        <button onClick={toggleShow}>Toggle Window Tracker</button>
        {/* <Header /> */}
        {/* <Meme/> */}
        {show ? <WindowTracker/> : null}
      </>
  )
}

export default App;