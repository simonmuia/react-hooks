import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
	<div className='navbar'>
		<NavLink className='navlink' to='/usestate'>UseState</NavLink>
		<NavLink className='navlink' to='/useeffect'>UseEffect</NavLink>
		<NavLink className='navlink' to='/usereducer'>UseReducer</NavLink>
	</div>
  )
}

export default Navbar