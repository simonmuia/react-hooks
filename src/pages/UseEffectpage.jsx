import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UseEffectpage = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data[0].email);
        console.log('API was called');
      });
  }, []);

  return (
    <div className="wrapper">
      <h2>UseEffect</h2>
      <div className="section">
        <h4>Hello {data}</h4>
      </div>
    </div>
  );
};

export default UseEffectpage;
