import React from "react";
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import TrackedGamesService from '../../utils/trackedGamesService'


function TrackedTeam(props) {
  return (
    <>
    <div className='team-div'>
      <h4>
        {props.team.strTeam}
      </h4>
      <img src={props.team.strTeamLogo} width='200px' ></img>
    </div>
    </>
  );
}
export default TrackedTeam;