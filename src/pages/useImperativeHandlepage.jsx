import React, { useRef } from 'react';
import ChildButton from '../components/ChildButton';

/**
 * useLayoutEffect is rendered
 */

const UseImperativeHandlePage = () => {
    const buttonRef = useRef(null);

  return (
    <div className="wrapper">
      <h1 className="text-success">UseImperativeHandle Hook</h1>

      <div className="card btn-wrapper">
        <p>
        <mark>useImperativeHandle</mark> is a React Hook that lets you customize 
        the handle exposed as a ref.<br/>
       <strong>UseCase: Altering state of a child component.</strong> 
        </p>
      </div>
      <div className="card btn-wrapper">
       <button onClick={()=>{buttonRef.current.alterToggle()}} className='btn btn-outline-info'>Button from Parent</button>
       <ChildButton ref={buttonRef}/>
      </div>
    </div>
  );
};

export default UseImperativeHandlePage;
