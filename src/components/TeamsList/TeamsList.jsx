import { create } from 'object-path'
import React, {useState, useEffect} from 'react'
import { ListGroupItem } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import trackedGamesService from '../../utils/trackedGamesService'


const TeamsList = (props) => {
  const handleClick = () => {
    let obj = {
      apiID: props.team.idTeam,
      sportType: props.team.idLeague,
      game: false,
      strTeam: props.team.strTeam,
      strTeamLogo: props.team.strTeamLogo,
      strDescriptionEN: props.team.strDescriptionEN,
      strWebsite: props.team.strWebsite
    }
    trackedGamesService.create(obj).then(res => props.history.push('/'));
  }
  return (
    
    <>
        <button onClick={handleClick}>
        <img src={props.team.strTeamLogo} width='200px'></img>
        </button>
    </>
    
  );
}
export default TeamsList;