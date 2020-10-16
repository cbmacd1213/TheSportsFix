import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import GamesList from '../GamesList/GamesList';
import NavBar from '../NavBar/NavBar';
import TeamsList from '../TeamsList/TeamsList';

const LeaguePage = (props) => {

    let { league } = useParams();
    const[events, setEvents]= useState(null)
    const[teams, setTeams]= useState(null)
    const[loading, setLoading]= useState(true)
    useEffect(()=>{
        sportsService.leagueDetail(league).then(res =>{
            setTeams(res)
            sportsService.leagueEvents(league).then(res => {
                setEvents(res)
                setLoading(false)
            })
        })
    }, [league])
    return (

        loading ? (
            <>
           <div> loading </div> 
           </>
        ):(
            <>
            <NavBar/>
            <div>
                <h2>
                    {league}
                </h2>
            </div>
                <h3>Games</h3>  
            <ul className='GamesList'>
                {events.events && events.events.map((event) => (
                    <> 
                    <li>  
                        <GamesList 
                            event = {event}
                            history = {props.history}
                            />
                    </li>
                </>
            ))
            
        }
            
            </ul>
                <h3>Teams</h3>
            <ul className='TeamsList'>
                {teams.teams && teams.teams.map((team) => (
                    <>   
                    <li>
                        <TeamsList
                            team= {team}
                            history = {props.history}
                            handleClick = {props.handleClick}
                            />
                    </li>
                    </>
                    ))} 
                </ul>
            </>
            
            ))
        }


export default LeaguePage;