import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trackedGamesService from '../../utils/trackedGamesService'
import sportsService from '../../utils/sportsService'
import NavBar from '../../components/NavBar/NavBar';
import TrackedGame from '../../components/TrackedGame/TrackedGame';
import TrackedTeam from '../../components/TrackedTeam/TrackedTeam';



const HomePage = (props) => {
    const[trackedGames, setTrackedGames]= useState([])
    const[trackedTeams, setTrackedTeams]= useState([])
    useEffect(()=>{
      trackedGamesService.index().then(res =>{
          let games = [];
          let teams = [];
          res.forEach(thing => {
            if (thing.game){
              games.push(thing)
            } else {
              teams.push(thing)
            }
          })
          setTrackedGames(games)
          setTrackedTeams(teams)
        })
    }, [props.user])
  return (
    <div className="HomePage">
      
      
      <ul>
        {trackedGames.map((game, idx) => (
          
          <li> 
          <TrackedGame
          key={idx}
          game={game}
          />
          </li>
          ))}
       
      </ul>
      <ul>
        {trackedTeams.map((team, idx) => (
          
          <li> 
          <TrackedTeam
          key={idx}
          team={team}
          />
          </li>
          ))}
       
      </ul>
     
      <footer>
    
      </footer>
    </div>
  )

  }

export default HomePage;