import React, { useState } from 'react';

const UseStatepage = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputHandler = (event) =>{
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  return (
    <div className='wrapper'>
      <h2>UseState</h2>

      <div className='row g-3'>
        <div className="col">
        <input type="text" className='form-control' placeholder="Enter something"  onChange={changeInputHandler} />
        </div>
       
       {inputValue ? <div> You typed: {inputValue}</div> : <em>___</em>}
      </div>
    </div>
  );
};

export default UseStatepage;
