import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to="/">ReactHooks&trade;</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <NavLink className="nav-link" to="/usestate">
            UseState
          </NavLink>
          <NavLink className="nav-link" to="/useeffect">
            UseEffect
          </NavLink>
          <NavLink className="nav-link" to="/usereducer">
            UseReducer
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
