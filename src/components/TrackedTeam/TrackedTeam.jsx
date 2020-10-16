import React, {useState, useEffect} from "react";
import trackedGamesService from "../../utils/trackedGamesService";




function TrackedTeam(props) {
  const[TrackedTeam, setTrackedTeam]= useState([])
  let obj = {
    apiID: props.team.strTeam,
    sportType: props.team.league,
    game: false,
  }
  trackedGamesService.index().then(res => props.history)
  return (
    <>
       []

    </>
  );
}
export default TrackedTeam;