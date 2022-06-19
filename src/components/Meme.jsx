import React, {useState, useEffect} from 'react';
// import memesData from "../memesData";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://picsum.photos/200"
  })
  const getMemeImage = (e) => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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

  // useEffect(function(){
  //   fetch("https://api.imgflip.com/get_memes")
  //   .then(res => res.json())
  //   .then(data => setAllMemes(data.data.memes))
  //   .catch((err) => {
  //     return err;
  //   });
  //   }, []);


  useEffect(() => {
    async function getMemes(){
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    }

    getMemes();

    }, []);

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