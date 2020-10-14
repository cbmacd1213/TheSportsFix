import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonList from '../../components/ButtonList/ButtonList';
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
      <ButtonList/>
      <TrackedGamesList/>
      <TrackedTeamList/>
     
      <footer>
    
      </footer>
    </div>
  );

};

export default HomePage;