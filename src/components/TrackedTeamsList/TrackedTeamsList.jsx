import React from "react";
import TrackedTeam from "../TrackedTeam/TrackedTeam";
import './TrackedTeamsList.css'



function TrackedTeamList(props) {
  return (
    <>
        <div className="tracked-teams-box">
        <TrackedTeam/>
        <TrackedTeam/>
        <TrackedTeam/>
        <TrackedTeam/>
        </div>
    </>
  );
}
export default TrackedTeamList;