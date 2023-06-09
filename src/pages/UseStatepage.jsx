import React, { useState } from 'react';

const UseStatepage = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputHandler = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div className="wrapper">
      <h1 className="text-success">UseState Hook</h1>
      <div className="container bg-body-tertiary p-5 p-sm">
        <li className='mb-2'>
          <mark>`useState`</mark> is a Hook that lets you add React state to
          function components.
          
        </li>
        <div className="container-fluid p-sm-3  bg-body-tertiary">
            <li>
              Consider the following <mark>example</mark> that Displays information as typed
              on a text input
            </li>
          </div>
      </div>
      <div className="card border-0 bg-body-tertiary p-5 shadow-sm">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter something"
            onChange={changeInputHandler}
          />
        </div>

        {inputValue ? <div className='alert alert-primary container-md'> You typed: {inputValue}</div> : <em>___</em>}
      </div>
    </div>
  );
};

export default UseStatepage;
