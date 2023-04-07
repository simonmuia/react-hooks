import React from 'react';

/**
 * useLayoutEffect is rendered
 */

const UseLayoutEffectPage = () => {
  return (
    <div className="wrapper">
      <h1 className="text-success">UseLayoutEffect Hook</h1>

      <div className="card btn-wrapper">
        <p>
          The signature is identical to <mark>`useEffect`</mark>, but it fires
          synchronously after all DOM mutations. Use this to read layout from
          the DOM and synchronously re-render. Updates scheduled inside 
          <mark>`useLayoutEffect`</mark> will be flushed synchronously, before the browser has
          a chance to paint.
        </p>
      </div>
      <div className="card btn-wrapper">
        <h2 className="text-info">Hello</h2>
      </div>
    </div>
  );
};

export default UseLayoutEffectPage;
