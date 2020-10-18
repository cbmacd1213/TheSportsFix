import React from "react";
import {useParams} from 'react-router-dom'
import sportsService from '../../utils/sportsService'
import TrackedGamesService from '../../utils/trackedGamesService'
import { Card, CardGroup, Accordion, Button } from 'react-bootstrap'


function TrackedTeam(props) {
  return (
    <>
      
    <Card horizontal className ='tracked shadow-lg p-3 mb-5 bg-white rounded' style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.team.strTeamLogo} width='200px' />
      <Card.Body>
          <Card.Title>
            {props.team.strTeam}
          </Card.Title>
      <Card.Text>
      <a href={props.team.strWebsite} rel="noopener noreferrer" target="_blank">{props.team.strWebsite}
      </a><br />
      {props.team.strDescriptionEN}
      </Card.Text>
    </Card.Body>
      

      
    </Card>
         
    </>
  );
}
export default TrackedTeam;


{/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}