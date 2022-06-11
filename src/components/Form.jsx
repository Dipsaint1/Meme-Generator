import React from 'react';

const Form = () => {
  return ( 
    <main>
      <form className="form">
        <input clasName='form--input' type="text" placeholder='Shut up' aria-label='' />
        <input clasName='form--input' type="text" placeholder='and take my money' aria-label='' />
        <button className="form--button">Get a new meme image  🖼</button>
      </form>
    </main>
   );
}
 
export default Form;