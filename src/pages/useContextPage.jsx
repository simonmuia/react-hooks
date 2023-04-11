import React, { useState, createContext } from 'react';

import Login from '../components/login/Login';
import User from '../components/login/User';

export const AppContext = createContext(null);

const UseContextPage = () => {
  const [username, setUsername] = useState('');

  return (
    <AppContext.Provider value={{username, setUsername}}>
      <div className="wrapper">
        <h1 className="text-success">UseContext Hook</h1>

        <div className="card btn-wrapper">
          <p>
            <mark>UseContext</mark> is a React Hook that lets you read and
            subscribe to context from your component.
            <br/> <hr/>
            <strong>Use Case: Replaces passing props between components</strong>
          </p>
        </div>
        <div className="card btn-wrapper">
          <Login />
          <User />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default UseContextPage;
