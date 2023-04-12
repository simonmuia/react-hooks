import React, { useCallback, useState } from 'react';
import ChildComponent from '../components/ChildComponent';

const UseCallbackPage = () => {
  const [data, setData] = useState('This is the initial data state');
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    () => {
      return data;
    },
    [data]
  );

  return (
    <div className="wrapper">
      <h1 className="text-success">UseCallback Hook</h1>

      <div className="container bg-body-tertiary p-5 p-smr">
        <li className="mb-2">
          <code>useCallback </code>is a React Hook that lets you cache a
          function definition between re-renders.
        </li>
        <div className="container-fluid p-sm-3  bg-body-tertiary">
          <li>
            Consider the following example:
            <br />
            <br />
          </li>
          <div className="d-lg-flex flex-lg-column align-items-center mb-5 mt-5">
            Parent Component
            <img
              src="images/usecallback1.png"
              width={500}
              className="img-fluid"
              alt="code1"
            />
            <img
              src="images/usecallback3.png"
              width={500}
              className="img-fluid"
              alt="code1"
            />
            <br />
            <br />
            Child Component 👇
            <img
              src="images/usecallback2.png"
              width={500}
              className="img-fluid"
              alt="code1"
            />
          </div>
          <li>
            In the above code snippets, <code>UseCallback</code> hook is used to
            cache the <code>returnComment</code> function. Therefore{' '}
            <code>UseEffect</code> does not render the function everytime Toggle
            button is clicked.
            From the console log, child Component function is called only once when page loads
          </li>
        </div>
      </div>
      <div className="align-items-center d-lg-flex alert alert-primary">
        <ChildComponent returnComment={returnComment} />

        <div className="container p-2">
          {' '}
          <button
            onClick={() => {setToggle(!toggle); setData('This is a toggled state')}}
            className="btn btn-success"
          >
            Toggle
          </button>
          <button onClick={()=> {setData('This is the initial data state'); setToggle(false)}} className='btn btn-danger mx-2'>Reset</button>
        </div>
      </div>
      <div>
        {toggle && <p className="alert alert-info">This is a toggled alert</p>}
      </div>
    </div>
  );
};

export default UseCallbackPage;
