import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'

const LeaguePage = (props) => {

    let { league } = useParams();
    const[details, setDetails]= useState(null)
    const[events, setEvents]= useState(null)
    useEffect(()=>{
        sportsService.leagueDetail(league).then(res => setDetails(res))
        sportsService.leagueEvents(league).then(res => setEvents(res))
    }, [league, events])
    return (
        <>
        <div>HELLO WORLD</div>
        <div>{league}</div>
        <div>{league.events}</div>
        </>
    )

}


export default LeaguePage;