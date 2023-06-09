import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className='navbar-brand' to="/">ReactHooks&trade;</Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={()=>setToggle(!toggle)}
        
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div  className={toggle ? `collapse navbar-collapse` : 'd-none'} id="navbarSupportedContent">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/usestate">
            UseState
          </NavLink>
          <NavLink className="nav-link" to="/useeffect">
            UseEffect
          </NavLink>
          <NavLink className="nav-link" to="/usereducer">
            UseReducer
          </NavLink>
          <NavLink className="nav-link" to="/useref">
            UseRef
          </NavLink>
          <NavLink className="nav-link" to="/uselayouteffect">
            UseLayoutEffect
          </NavLink>
          <NavLink className="nav-link" to="/useimperativehandle">
            UseImperativeHandle
          </NavLink>
          <NavLink className="nav-link" to="/usecontext">
            UseContext
          </NavLink>
          <NavLink className="nav-link" to="/usememo">
            UseMemo
          </NavLink>
          <NavLink className="nav-link" to="/usecallback">
            UseCallback
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
