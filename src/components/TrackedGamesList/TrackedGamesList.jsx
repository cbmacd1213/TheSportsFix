import React from "react";
import TrackedGame from "../TrackedGame/TrackedGame";
import './TrackedGamesList.css'



function TrackedGamesList(props) {
  return (
    <>
        <div className="tracked-games-box">
        <TrackedGame/>
        <TrackedGame/>
        <TrackedGame/>
        <TrackedGame/>
        </div>
    </>
  );
}
export default TrackedGamesList;