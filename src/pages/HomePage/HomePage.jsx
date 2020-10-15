import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import ButtonList from '../../components/ButtonList/ButtonList';
import NavBar from '../../components/NavBar/NavBar';
import TrackedGamesList from '../../components/TrackedGamesList/TrackedGamesList';
import TrackedTeamList from '../../components/TrackedTeamsList/TrackedTeamsList';


const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
    
      <NavLink exact to='/leagues/NFL'>NFL</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/NHL'>NHL</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/NBA'>NBA</NavLink>
      &nbsp;&nbsp;&nbsp;
      <NavLink exact to='/leagues/MLB'>MLB</NavLink>
      <TrackedGamesList/>
      <TrackedTeamList/>
     
      <footer>
    
      </footer>
    </div>
  );

};

export default HomePage;