import React, { useState, forwardRef, useImperativeHandle } from 'react';

const ChildButton = forwardRef ((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(
    ref, () => ({
      alterToggle() {
        setToggle(!toggle);
      }
    })
  )
  return (
    <>
    <button
      className="btn btn-success"
      onClick={()=>setToggle(!toggle)}
    >
      Button from a child
    </button>
    {toggle && <span className='alert alert-primary'>Toggle</span>}
    </>
    
  );
});

export default ChildButton;
