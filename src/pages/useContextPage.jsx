import React, { useState, createContext } from 'react';

import Login from '../components/login/Login';
import User from '../components/login/User';

export const AppContext = createContext(null);

const UseContextPage = () => {
  const [username, setUsername] = useState(' ');

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <div className="wrapper">
        <h1 className="text-success">UseContext Hook</h1>

        <div className="card btn-wrapper">
          <li className="mb-2">
            <mark>UseContext</mark> is a React Hook that lets you read and
            subscribe to context from your component.
            <br /> <hr />
            <strong>Use Case: Replaces passing props between components</strong>
          </li>
          <div className="card btn-wrapper border-0 shadow-sm bg-body-tertiary">
            <li>
              Consider the following <mark>example</mark>:<br />
              <br />
              <li>
                The following example loads user input to a label from an input
                component using <code>useContext</code> hook.
              </li>
            </li>
            <div className="d-flex flex-column">
              Parent Page:
              <img src="images/parent-code5.png" alt="parent" />
              <br />
              <br />
              Login Page:
              <img src="images/logincode.png" alt="login" />
              <br />
              <br />
              User Label Page:
              <img src="images/usercode.png" alt="login" />
            </div>
            <li>
              In the above code snippets:
              <ol>
                <li>
                  <code>createContext</code> hook is imported in parent
                  component. The <code>AppContext</code> is initiated with{' '}
                  <code>createContext</code> function.
                </li>
                <li>
                  Initial state is instantiated using <code>useState</code> hook
                  to handle setting of current username in the{' '}
                  <mark>"User"</mark> component page
                </li>
                <li>
                  Created context provider wraps the respective child components
                  as <code>AppContext.Provider</code> tag with{' '}
                  <code>value</code> of the states to be shared by the child
                  components
                </li>
                <li>
                  Both <mark>Login</mark> and <mark>User</mark> components
                  receive the context through <code>useContext</code> and{' '}
                  <code>AppContext</code> hooks. <code>useContext</code> derives
                  specific states from{' '}
                  <code>AppContext passed from the parent page</code>
                </li>
                <li>
                  <mark>set</mark> prop of the state in parent folder is called
                  on the login input on <code>onChange</code> input action,
                  while <code>username</code> prop is passed to{' '}
                  <code>User</code> component label{' '}
                </li>
              </ol>
            </li>
            <li>
              When the parent button is clicked as from below toggle form, the
              toggle text display is activated.
            </li>
          </div>
        </div>
        <div className="card btn-wrapper border-0 shadow">
          <Login />
          <User />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default UseContextPage;
