import React, { useState } from 'react';

const FormSample = () => {

  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLoginSuccessFul, setIsLoginSuccessFul] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    joinedNewsLetter: false
  });

  const handleChange = (e) => {
    const {name, type, checked, value} = e.target;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const {password, confirmPassword} = formData;
    if(password !== confirmPassword){
      setIsLoginFailed(prev => !prev); 
      setTimeout(() => {
        setIsLoginFailed(prev => !prev);  
      }, 1000);
      return;
    };

    setTimeout(() => {
      setIsLoginSuccessFul(prev => !prev);  
    }, 1000);
    setIsLoginSuccessFul(prev => !prev);  

  }

  return (
    <div className="form-sample form-container">
      { isLoginFailed ?  <div className="loginMessage">Error</div> : null }
      { isLoginSuccessFul ?  <div className="loginMessage">Welcome { formData.name }</div> : null }
      <form className="form-sample" onSubmit={handleSubmit}>
      <inpu
        className='form--input' 
          type="text" 
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className='form--input'
          type="email" 
          name="email"
          placeholder="Email"
          onChange={handleChange}
          // value={formData.email}
        />
        <input
          className='form--input'
          type="password" 
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className='form--input'
          type="password" 
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        
        <input 
          type="checkbox" 
          name="joinedNewsLetter"
          onChange={handleChange}
          id="joinedNewsLetter"
          checked={formData.joinedNewsLetter}
        />
        <label htmlFor="joinedNewsLetter">I want to joinedNewsLetter the newsletter</label>

        <button className='form--submit'>Submit</button>
      </form>
    </div>
  );
}

export default FormSample;


