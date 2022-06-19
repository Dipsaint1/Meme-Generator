import React, {useEffect, useState} from 'react';

// Clean up
const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [show, setShow] = useState(true);

  const toggleShow = () => {
    setShow(prev => !prev);
  }
  
  useEffect(() => {
    function watchWidth(){
      setWindowWidth(prev => window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);
    
    // Clean up the code to avoid memory leak
    return function(){
      window.addEventListener("resize", watchWidth);
    }
  }, []);

  return (
    <>
      <button onClick={toggleShow}>Toggle Window Tracker</button>
      <div className="container">
        {show ? <h2>Window width: {windowWidth}px</h2> : null }
      </div>
    </>
    
  );
}

export default WindowTracker;