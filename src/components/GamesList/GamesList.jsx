import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'


const GamesList = (props) => {
  return (
    <>
        {props.event.strEvent} - {props.event.dateEvent}
    </>
  );
}
export default GamesList;