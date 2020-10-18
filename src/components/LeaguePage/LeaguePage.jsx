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
            
            <div className ='league-title'>
                <h2>
                    {league}
                </h2>
            </div>
                <h3>Games</h3>  
            <ul className='ListGroup'>
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
            <ListGroup horizontal variant="flush" className="ListGroup">
                {teams.teams && teams.teams.map((team) => (
                    <>   
                    <ListGroupItem variant="flush">
                        <TeamsList
                            team= {team}
                            history = {props.history}
                            handleClick = {props.handleClick}
                            />
                    </ListGroupItem>
                    </>
                    ))} 
                </ListGroup>
            </>
            
            ))
        }


export default LeaguePage;