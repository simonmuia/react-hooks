import React, { useContext } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AppContext } from '../../pages/useContextPage';

const Login = () => {
	// derive state of login prop
	const {setUsername} = useContext(AppContext);
  return (
    <div className="input-group mb-3">
      <span className="input-group-text">
        <BsPersonCircle />
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
        aria-label="First Name"
        aria-describedby="basic-addon1"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
};

export default Login;
