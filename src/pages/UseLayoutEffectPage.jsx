import React, { useEffect, useLayoutEffect, useRef } from 'react';

/**
 * useLayoutEffect is rendered
 */

const UseLayoutEffectPage = () => {
  const labelRef = useRef(null);

  useLayoutEffect(() => {
    console.log(labelRef.current.value);
  }, []);

  useEffect(() => {
    labelRef.current.value = 'Simon';
  }, []);

  return (
    <div className="wrapper">
      <h1 className="text-success">UseLayoutEffect Hook</h1>

      <div className="card btn-wrapper">
        <p>
          The signature is identical to <mark>`useEffect`</mark>, but it fires
          synchronously after all DOM mutations. Use this to read layout from
          the DOM and synchronously re-render. Updates scheduled inside
          <mark>`useLayoutEffect`</mark> will be flushed synchronously, before
          the browser has a chance to paint.
        </p>
      </div>
      <div className="card btn-wrapper">
        <input ref={labelRef} value="Hello" className="text-info" />
      </div>
    </div>
  );
};

export default UseLayoutEffectPage;
