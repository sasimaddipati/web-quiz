import React, { useState } from "react";
import './Joinzone.css';

function Joinzone() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome to the class, ${name}!`);
  };

  return (
    <div className="joinclass-container">
      <h1 className="joinclass-heading">Join the Class</h1>
      <form className="joinclass-form" onSubmit={handleSubmit}>
        <label className="joinclass-label">
          Enter Your Zone Code:
          <input 
            className="joinclass-input" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <button className="joinclass-button" type="submit">Join</button>
      </form>
    </div>
  );
}

export default Joinzone;
