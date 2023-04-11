import React, { useRef, useState } from 'react';

/**
 *
 * we are using the useRef hook to target focus on input when button
 * is clicked
 * usecase: used in DOM manipulation e.g clearing form input.
 */

const UseRefpage = () => {
  const inputRef = useRef(null);
  const [name, setName] = useState('Simon');

  const submitData = () => {
    if (!inputRef.current.value) {
      inputRef.current.focus();
      inputRef.current.value = 'Simon';
    }
    setName(inputRef.current.value);
    
  };
  return (
    <div className="wrapper">
      <h1 className="text-success">UseRef Hook</h1>
      <div className="container bg-body-tertiary p-5 p-sm">
        <li className="mb-2">
          The <mark>useRef</mark> Hook allows you to persist values between
          renders. It can be used to store a mutable value that does not cause a
          re-render when updated. <br />
          It can be used to access a DOM element directly.
        </li>
        <div className="container-fluid p-sm-3  bg-body-tertiary">
          <li>
            Consider the following <mark>example</mark>
            containing a form that sets a name upon <kbd>Change Name</kbd> button click action.
          </li>
        </div>
      </div>
      <div className="card border-0 bg-body-tertiary btn-wrapper shadow-sm">
        <h2>{name}</h2>

        <input
          className="form-control"
          placeholder="Enter a name"
          type="text"
          ref={inputRef}
        />
        <button onClick={submitData} className="btn btn-outline-primary">
          Change Name
        </button>
      </div>
    </div>
  );
};

export default UseRefpage;
