import React, { useState } from 'react';
import './usestatepage.css';

const UseStatepage = () => {
  const [inputValue, setInputValue] = useState('Simon');
  return (
    <div className='wrapper'>
      <h2>UseState</h2>

      <div className='inputForm'>
        <input type="text" placeholder="Enter something" />
        {inputValue}
      </div>
    </div>
  );
};

export default UseStatepage;
