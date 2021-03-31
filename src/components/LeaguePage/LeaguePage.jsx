import React, {useState, useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import GamesList from '../GamesList/GamesList';
import NavBar from '../NavBar/NavBar';
import TeamsList from '../TeamsList/TeamsList';
import './LeaguePage.css'

const LeaguePage = (props) => {

    let { league } = useParams();
    const[events, setEvents]= useState(true)
    const[teams, setTeams]= useState(true)
    const[loading, setLoading]= useState(false)
    useEffect(()=>{
        sportsService.leagueDetail(league).then(res =>{
            setTeams(res)
            console.log("FUCK", setTeams)
            sportsService.leagueEvents(league).then(res => {
                console.log(res)
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
            
            <div className ='league-title'>
                <h1 className="some-titles text-center">
                    {league}
                </h1>
            </div>
                <h3 className="some-titles text-center">Games</h3>  
            <ListGroup horizontal className='ListGroup'>
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
            
            </ListGroup>
                <h3 className="some-titles text-center">Teams</h3>
            <ListGroup horizontal className="ListGroup">
                {teams.teams && teams.teams.map((team) => (
                    <ListGroupItem className= "ListGroupItem " variant="flush">
                        <TeamsList
                            team= {team}
                            history = {props.history}
                            handleClick = {props.handleClick}
                            />
                    </ListGroupItem>
                    
                    ))} 
                </ListGroup>
            </>
            
            ))
        }


export default LeaguePage;