import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import GamesList from '../GamesList/GamesList';
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
            console.log('Fuckin sports');
        })
         
        console.log('shit', league[0]);
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
                {events.events && events.events.map((event) => (
                    <>   
                    <li>
                      <button>
                        <GamesList 
                            event = {event}
                        /> 
                      </button>
                    </li>
            
                </>
            ))
            
        }
            
            </ul>
            <ul>
                {teams.teams && teams.teams.map((team) => (
                    <>   
                    <li>
                        <TeamsList
                            team= {team}
                        />
                    </li>
                    
                    </>
                    ))}
                    
                </ul>
            </>
            
            ))
        }


export default LeaguePage;