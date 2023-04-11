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
        <li className="mb-2">
          The signature is identical to <mark>`useEffect`</mark>, but it fires
          synchronously after all DOM mutations. Use this to read layout from
          the DOM and synchronously re-render. Updates scheduled inside
          <mark>`useLayoutEffect`</mark> will be flushed synchronously, before
          the browser has a chance to paint.
        </li>
        <div className="card btn-wrapper border-0 shadow-sm bg-body-tertiary">
          <li>
            Consider the following <mark>example</mark>:<br />
            <br />
            The following example loads a value of an input from UseLayoutEffect
            hook code:
          </li>
          <div className="d-flex flex-row">
            <img src="images/code1.png" alt="code1" />
            <img src="images/code2.png" alt="code1" />
          </div>
          <li>
            In the above code snippets, default value <mark>"Hello"</mark> is
            loaded on the input. When page is loaded, the{' '}
            <mark>useLayoutEffect</mark> loads first before any other hook hence
            displaying <mark>"Hello"</mark> on console log before <mark>"Simon"</mark> is
            rendered by <mark>UseEffect</mark>.
          </li>
        </div>
      </div>
      <div className="card border-0 bg-body-tertiary btn-wrapper shadow-sm">
        <input ref={labelRef} value="Hello" className="form-control" />
      </div>
    </div>
  );
};

export default UseLayoutEffectPage;
