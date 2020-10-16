import React from "react";
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import TrackedGamesService from '../../utils/trackedGamesService'


function TrackedGame(props) {
  return (
    <>
      <h4>
        {props.team.strTeam}
      </h4>
    </>
  );
}
export default TrackedGame;