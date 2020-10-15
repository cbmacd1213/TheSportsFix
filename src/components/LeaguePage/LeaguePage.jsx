import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import GamesList from '../GamesList/GamesList';

const LeaguePage = (props) => {

    let { league } = useParams();
    const[details, setDetails]= useState(null)
    const[events, setEvents]= useState(null)
    const[teams, setTeams]= useState(null)
    const[loading, setLoading]= useState(true)
    useEffect(()=>{
        sportsService.leagueDetail(league).then(res =>{
            setDetails(res)
            sportsService.leagueEvents(league).then(res => {
                setEvents(res)
                setLoading(false)
            })
            console.log('Fuckin sports', league.teams);
        })
         
    }, [league])
    return (
        loading ? (
            <>
           <div> loading </div> 
           </>
        ):(
            <>
            <div>{league}</div>
            <ul>
                {events.events.map((events) => (
                <>   
                    <li>
                       <button>Track</button> {events.strEvent}
                    </li>
            
                </>
            ))}
            
            </ul>
            {/* <ul>
                {teams.team.map((teams) => (
                <>   
                    <li>
                       <button>Track</button> {teams.strEvent}
                    </li>
            
                </>
            ))}
            
            </ul> */}
            </>
            
        )
    )

}


export default LeaguePage;