import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className='register'>
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </div>
    :
    <div className='register'>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;
    

  return (
    <div className='NavBar'>
      <>
        <h1 className='h1-title'>THE SPORTS FIX</h1>
      <div>
        <NavLink exact to='/' className='NavBar-Sports-link'>HOME</NavLink>
      </div>
      &nbsp;&nbsp;&nbsp;
      <div>
      <NavLink exact to='/leagues/NFL' className='NavBar-Sports-link'>NFL</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/NHL' className='NavBar-Sports-link'>NHL</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/NBA' className='NavBar-Sports-link'>NBA</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/MLB' className='NavBar-Sports-link'>MLB</NavLink>
      </div>
      {nav}
      </>
    </div>
  );
};

export default NavBar;