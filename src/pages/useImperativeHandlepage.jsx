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
        <li className="mb-2">
          <mark>useImperativeHandle</mark> is a React Hook that lets you
          customize the handle exposed as a ref.
          <br />
          <strong>UseCase: Altering state of a child component.</strong>
        </li>
        <div className="card btn-wrapper border-0 shadow-sm bg-body-tertiary">
          <li>
            Consider the following <mark>example</mark>:<br />
            <br />
            The following example loads a value of an input from UseLayoutEffect
            hook code:
          </li>
          <div className="d-flex flex-column">
            Parent Page:
            <img src="images/code4.png" alt="code1" />
            <br />
            <br />
            ChildButton Page:
            <img src="images/code3.png" alt="code1" />
          </div>
          <li>
            In the above code snippets:
            <ol>
              <li>
                Initial state of the child button is called throught{' '}
                <code>useState</code> hook.
              </li>
              <li>
                Child component is loaded to parent component and set a
                reference with <code>useRef</code> hook.
              </li>
              <li>
                <code>alterToggle()</code> function is called from the child
                component through <code>useImperativeHandle</code> hook. This
                reference is passed similarly to <mark>props</mark>.
              </li>

              <li>
                <code>alterToggle()</code> function passes the state to the
                parent component from the child component throught help of{' '}
                <code>forwardRef</code> Hook.
              </li>
            </ol>
          </li>
          <li>When the parent button is clicked as from below toggle form, the toggle text display is activated.</li>
        </div>
      </div>
      <div className="card btn-wrapper bg-body-tertiary border-0 shadow-sm">
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
          className="btn btn-outline-primary"
        >
          Button from Parent
        </button>
        <ChildButton ref={buttonRef} />
      </div>
    </div>
  );
};

export default UseImperativeHandlePage;
