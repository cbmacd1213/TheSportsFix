import React from "react";
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import TrackedGamesService from '../../utils/trackedGamesService'


function TrackedGame(props) {
  return (
    <>
    <div>
      <h4>
        {props.game.strEvent} - {props.game.dateEvent}
      </h4>
      <h5>

      {props.game.intHomeScore} - {props.game.intAwayScore}
      </h5>
    </div>
    </>
  );
}
export default TrackedGame;