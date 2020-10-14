import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'

const LeaguePage = (props) => {

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
            
        })
         
    }, [league])
    return (
        loading ? (
            <>
           <div> loading </div> 
           </>
        ):(
            <>
            <div>HELLO WORLD</div>
            <div>{league}</div>
            <div>{events.events[0].strEvent}</div>
            </>

        )
    )

}


export default LeaguePage;