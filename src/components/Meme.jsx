import React, {useState} from 'react';
import memesData from "../memesData";

const Meme = () => {
  // const [memeImage, setMemeImage] = useState("https://picsum.photos/200");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://picsum.photos/200"
  })

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  const getMemeImage = (e) => {
    e.preventDefault();
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme =>({
      ...prevMeme,
      randomImage: url
    }));
  }
  
  return ( 
    <main>
      <div className="form">
        <input 
          className='form--input' 
          type="text"
          placeholder='Shut up' aria-label='' 
        />
        <input 
          className='form--input' 
          type="text"
          placeholder='and take my money' aria-label='' 
        />
        <button 
          onClick={getMemeImage} 
          className="form--button">Get a new meme image  🖼
        </button>
      </div>
      <img className='meme--image' src={meme.randomImage} alt=""/>
    </main>
  );
}

export default Meme;