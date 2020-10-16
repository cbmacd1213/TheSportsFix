import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import trackedGamesService from '../../utils/trackedGamesService'


const GamesList = (props) => {
  const handleClick = () => {
    let obj = {
      apiID: props.event.strEvent,
      sportType: props.event.league,
      game: true,
      dateEvent: props.event.dateEvent,
      strEvent: props.event.strEvent
    }
    trackedGamesService.create(obj).then(res => props.history.push('/'));
  }
  return (
    <>
    <button 
    onClick={handleClick}>
        {props.event.strEvent} - {props.event.dateEvent}
    </button>
    </>
  );
}
export default GamesList;