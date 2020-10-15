import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'


const GamesList = (props) => {
    let { league } = useParams();
    const[details, setDetails]= useState(null)
    const[events, setEvents]= useState(null)
    const[loading, setLoading]= useState(true)
    useEffect(()=>{
        sportsService.leagueDetail(league).then(res =>{
            setDetails(res)
            sportsService.leagueEvents(league).then(res => {
                setEvents(res)
                setLoading(false)
            })
            console.log('BRUH', events);
        })
         
    }, [league])
  return (
    <>
        {/* <ul>
            {events.map((events) => (
        <>
          <li>
            {events.events.strEvent}
          </li>
        </>
      ))}
    </ul> */}

    </>
  );
}
export default GamesList;