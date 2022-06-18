import React, { useState } from 'react';

const Forms = () => {
  const [formData, setFormData] = useState({ 
    firstName : "", 
    lastName : "",
    email: "",
    comments: "",
    isFriendly: false,
    employment: ""
  });

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    return setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  console.log(formData.employment);

  return (
    <form className="form-sample">
      <input 
        type="text" 
        placeholder='First Name' 
        name="firstName"
        onChange={handleChange}
        checked={formData}
        value={formData.firstName}
      />
      <input 
        type="text" 
        placeholder='Last Name' 
        name="lastName"
        onChange={handleChange} 
        value={formData.lastName}
      />
      <input 
        type="email" 
        placeholder='Email' 
        name="email"
        onChange={handleChange} 
        value={formData.email}
      />
      <textarea
        type="textarea"
        placeholder='Comments'
        name='comments'
        value={formData.comments}
        onChange={handleChange} 
      />

      <div>
        <input 
          type="checkbox"
          id='isFriendly'
          name="isFriendly"
          onChange={handleChange}

        />
        <label htmlFor="isFriendly">Are you friendly?</label>
      </div>
      
      <fieldset>
        <legend>Current Employment Status</legend>
        <div>
          <input
            type="radio"
            name="employment"
            id="unemployed"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            onChange={handleChange}
          />
          <label>Unemployed</label>
        </div>
        <div>
          <input
            type="radio"
            name="employment"
            id="part-time"
            value="part-time"
            checked={formData.employment === "part-time"}
            onChange={handleChange}
          />
          <label>Part Time</label>
        </div>
        <div>
          <input
            type="radio"
            name="employment"
            id="full-time"
            value="full-time"
            checked={formData.employment === "full-time"}
            onChange={handleChange}
          />
          <label>Full Time</label>
        </div>
      </fieldset>
      

      
    </form>
  );
}

export default Forms; 