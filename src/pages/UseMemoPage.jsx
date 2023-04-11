import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

  return (
    <div className="wrapper">
      <h1 className="text-success">UseMemo Hook</h1>

      <div className="card btn-wrapper">
        <p>
          The React <mark>useMemo</mark> Hook returns a memoized value. Think of
          memoization as caching a value so that it does not need to be
          recalculated. The
          <mark>useMemo</mark> Hook only runs when one of its dependencies
          update.
          <br />
          <hr />
          <li>
            <em>
              Consider an example below that fetche API data of blog comments
              filtered to fetch the longest name among users
            </em>
          </li>
        </p>
      </div>
      <div className="card btn-wrapper">
        <h3>Longest Name:</h3>
        {findLongestName(data)}
      </div>
    </div>
  );
};

export default UseMemoPage;
