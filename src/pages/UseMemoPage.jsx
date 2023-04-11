import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

const UseMemoPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        setData(response.data);
      });
  }, []);

  // find the longest name
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = '';

    for (let index = 0; index < comments.length; index++) {
      let currentName = comments[index].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data));

  return (
    <div className="wrapper">
      <h1 className="text-success">UseMemo Hook</h1>

      <div className="container bg-body-tertiary p-5 p-smr">
        <li className="mb-2">
          The React <mark>useMemo</mark> Hook returns a memoized value. Think of
          memoization as caching a value so that it does not need to be
          recalculated. The
          <mark>useMemo</mark> Hook only runs when one of its dependencies
          update.
          <div className="container-fluid p-sm-3  bg-body-tertiary">
            <li>
              Consider the following example:<br />
              <br />
              
            </li>
            <li>Consider an example below that fetches API data of blog comments
              filtered to fetch the longest name among users</li>
            <div className="d-lg-flex mb-5 mt-5">
              <img src="images/code1.png" className="img-fluid" alt="code1" />
              <img src="images/code2.png" className="img-fluid" alt="code1" />
            </div>
            <li>
              In the above code snippets, default value <mark>"Hello"</mark> is
              loaded on the input. When page is loaded, the{' '}
              <mark>useLayoutEffect</mark> loads first before any other hook
              hence displaying <mark>"Hello"</mark> on console log before{' '}
              <mark>"Simon"</mark> is rendered by <mark>UseEffect</mark>.
            </li>
          </div>
          
        </li>
      </div>
      <div className="align-items-center d-lg-flex alert alert-primary">
        <strong>Longest Name:</strong>{' '}
        {findLongestName(data)}
      </div>
    </div>
  );
};

export default UseMemoPage;
