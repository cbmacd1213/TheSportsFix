import React from "react";
import {useParams} from 'react-router-dom';
import sportsService from '../../utils/sportsService';
import TrackedGamesService from '../../utils/trackedGamesService';
import { Card, CardGroup } from 'react-bootstrap'



function TrackedGame(props) {
  return (
    <>
    

    <Card horizontal className ='tracked shadow p-3 mb-5 bg-white rounded' style={{ width: '18rem' }}>
      <h4>
        {props.game.strEvent} - {props.game.dateEvent}
      </h4>
      <h5>

      {props.game.intHomeScore} - {props.game.intAwayScore}
      </h5>
    </Card>
    
    
    </>
  );
}
export default TrackedGame;