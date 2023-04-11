import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

const UseMemoPage = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

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
    console.log('Computed');
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="wrapper">
      <h1 className="text-success">UseMemo Hook</h1>

      <div className="container bg-body-tertiary p-5 p-smr">
        <li className="mb-2">
          The React <mark>useMemo</mark> Hook returns a memoized value. Think of
          memoization as caching a value so that it does not need to be
          recalculated. The
          <mark>useMemo</mark> Hook only runs when one of its dependencies
          update.{' '}
        </li>
        <div className="container-fluid p-sm-3  bg-body-tertiary">
          <li>
            Consider the following example:
            <br />
            <br />
          </li>
          <div className="d-lg-flex flex-lg-row align-items-center mb-5 mt-5">
            <img
              src="images/usememo1.png"
              width={500}
              className="img-fluid"
              alt="code1"
            />
            <img
              src="images/usememo2.png"
              width={500}
              className="img-fluid"
              alt="code1"
            />
          </div>
          <li>
            In the above code snippets, <code>UseMemo</code> hook is used to
            compute <code>findLongestName</code> function once. The function{' '}
            <code>findLongestName</code> is used to calculate the longest name
            from the list of filtered names from API fetched
          </li>
          <li>
            Once data is fetched by <code>UseEffect</code> hook, useMemo is
            toggled without re-rendering, through memoization.
            <br />
            This is demonstrated by button below: Upon page load console logs
            text <mark>computed</mark>
            which is loaded from function <code>findLongestName</code>. After
            page load, the <code>UseMemo</code> memoirs the function every time{' '}
            <kbd>Toggle</kbd> button is clicked, hence it does not print the
            alert on console.
          </li>
        </div>
      </div>
      <div className="align-items-center d-lg-flex alert alert-primary">
        <strong>Longest Name:</strong> {getLongestName}
        <div className="container p-2">
          {' '}
          <button
            onClick={() => setToggle(!toggle)}
            className="btn btn-success"
          >
            Toggle
          </button>
        </div>
      </div>
      <div>
        {toggle && <p className="alert alert-info">This is a toggled alert</p>}
      </div>
    </div>
  );
};

export default UseMemoPage;
