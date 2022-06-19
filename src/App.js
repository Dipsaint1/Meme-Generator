import React from 'react';
import './App.css';
import Header from "./components/Header";
import Meme from "./components/Meme";
// import WindowTracker from "./components/WindowTracker";

const App = () => {

  return (
      <>
        
        <Header />
        <Meme/>
        {/* {<WindowTracker/>} */}
      </>
  )
}

export default App;