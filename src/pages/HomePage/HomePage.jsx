import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import trackedGamesService from '../../utils/trackedGamesService'
import sportsService from '../../utils/sportsService'
import NavBar from '../../components/NavBar/NavBar';
import TrackedGame from '../../components/TrackedGame/TrackedGame';
import TrackedTeam from '../../components/TrackedTeam/TrackedTeam';
import { CardGroup, Card, CardColumns } from 'react-bootstrap';


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
      <div className="container">
      <h1 className="HomePage tracked-title text-center"> Tracked Games </h1>

      <CardColumns>
        {trackedGames.map((game, idx) => (
          
          
          <TrackedGame
          key={idx}
          game={game}
          /> 
          ))}
       
      </CardColumns>
      </div>
      
      <div className="container">
      <h1 className="HomePage tracked-title text-center"> Tracked Teams </h1>
      <CardColumns>
        {trackedTeams.map((team, idx) => (
          
          
          <TrackedTeam
          key={idx}
          team={team}
          />
          
          ))}
       
      </CardColumns>
      </div>
     



     
      <footer>
      </footer>
    </div>
  )
  }

export default HomePage;