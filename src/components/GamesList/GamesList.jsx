import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import trackedGamesService from '../../utils/trackedGamesService'
import { Button } from 'react-bootstrap';

const GamesList = (props) => {
  const handleClick = () => {
    let obj = {
      apiID: props.event.strEvent,
      sportType: props.event.league,
      game: true,
      dateEvent: props.event.dateEvent,
      strEvent: props.event.strEvent,
      intHomeScore: props.event.intHomeScore,
      intAwayScore: props.event.intAwayScore,
    }
    trackedGamesService.create(obj).then(res => props.history.push('/'));
  }
  return (
    <>
    <Button
    variant="primary" 
    onClick={handleClick}>
        {props.event.strEvent} - {props.event.dateEvent}
    </Button>
    </>
  );
}
export default GamesList;