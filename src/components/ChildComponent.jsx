import React, { useEffect } from 'react';

const ChildComponent = ({ returnComment }) => {
  useEffect(() => {
    console.log('Function was called');
  }, [returnComment]);

  return <div>{returnComment()}</div>;
};

export default ChildComponent;
