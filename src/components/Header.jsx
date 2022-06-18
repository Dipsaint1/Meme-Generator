import React from 'react';
import troll from "../images/troll.png";

const Header = () => {
  return ( 
    <header className="header">
      <img className="header--image" src={troll} alt="" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}

export default Header;