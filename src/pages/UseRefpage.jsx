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
    }
    setName(inputRef.current.value);
	
  };
  return (
    <div className="wrapper">
      <h1>UseRef Hook</h1>
      <div className="card btn-wrapper">
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
