import React, {useState} from 'react';
import memesData from "../memesData";

const Meme = () => {
  // const [memeImage, setMemeImage] = useState("https://picsum.photos/200");
  const [allMemeImages, setAllMemeImages] = useState(memesData);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://picsum.photos/200"
  })
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

  const handleChange = (e) => {
    const {name, type, checked, value} = e.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  return ( 
    <main>
      <div className="form">
        <input 
          name='topText'
          className='form--input' 
          type="text"
          placeholder='Shut up' aria-label=''
          onChange={handleChange}
          value={meme.topText}
        />
        <input 
          className='form--input' 
          name='bottomText'
          type="text"
          placeholder='and take my money' aria-label=''
          onChange={handleChange} 
          value={meme.bottomText}
        />
        <button 
          onClick={getMemeImage} 
          className="form--button">Get a new meme image  🖼
        </button>
      </div>
      <div className="meme">
        <img className='meme--image' src={meme.randomImage} alt=""/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;