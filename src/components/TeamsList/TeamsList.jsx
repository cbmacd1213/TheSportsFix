import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'


const TeamsList = (props) => {
  return (
    <>
        <button>
            {props.team.strTeam}
        </button>
    </>
  );
}
export default TeamsList;