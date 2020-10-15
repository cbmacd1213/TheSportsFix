import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import trackedGamesService from '../../utils/trackedGamesService'
import sportsService from '../../utils/sportsService'
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
      <TrackedGamesList/>
      <TrackedTeamList
        team={props.team}
        history={props.history}
      />
     
      <footer>
    
      </footer>
    </div>
  );

};

export default HomePage;