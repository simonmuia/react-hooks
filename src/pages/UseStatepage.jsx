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

      <div className='inputForm'>
        <input type="text" placeholder="Enter something"  onChange={changeInputHandler} />
       {inputValue ? <div> You typed: {inputValue}</div> : <em>___</em>}
      </div>
    </div>
  );
};

export default UseStatepage;
