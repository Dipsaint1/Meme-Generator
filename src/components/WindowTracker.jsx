import React, {useEffect, useState} from 'react';

// Clean up
const WindowTracker = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", function(){
  //     setWindowWidth(prev => window.innerWidth);
  //   }); 
  // }, []);

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
    <div className="container">
      <h2>Window width: {windowWidth}px</h2>
    </div>
  );
}

export default WindowTracker;