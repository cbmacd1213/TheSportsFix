import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;
    

  return (
    <div className='NavBar'>
      <>
      <div>
      <NavLink exact to='/leagues/NFL'>NFL</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/NHL'>NHL</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/NBA'>NBA</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/MLB'>MLB</NavLink>
      </div>
      {nav}
      </>
    </div>
  );
};

export default NavBar;