import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trackedGamesService from '../../utils/trackedGamesService'
import sportsService from '../../utils/sportsService'
import NavBar from '../../components/NavBar/NavBar';
import TrackedGamesList from '../../components/TrackedGamesList/TrackedGamesList';
import TrackedTeamList from '../../components/TrackedTeamsList/TrackedTeamsList';


const HomePage = (props) => {
    const[trackedGames, setTrackedGames]= useState(null)
    useEffect(()=>{
      trackedGamesService.index().then(res =>{
          setTrackedGames(res)
        })
    }, [])
  return (
    <div className="HomePage">
      
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <TrackedGamesList/>
      <TrackedTeamList
        team={props.team}
        handleClick={props.handleClick}
        history={props.history}
      />
     
      <footer>
    
      </footer>
    </div>
  )

  }

export default HomePage;