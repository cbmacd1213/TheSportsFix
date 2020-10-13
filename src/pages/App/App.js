import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage'
import * as sportsAPI from '../../utils/sports-api';
import * as trackedGamesAPI from '../../utils/trackedgames-api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      sports: [],
  
      
    };
    console.log('DANG', this.state)
  }

  async componentDidMount(){
    const sports = await sportsAPI.getAll()
    const trackedgames = await trackedGamesAPI.getAll()
    // const nflTeams = await getAllNFLTeams()
    // const nhlTeams = await getAllNHLTeams()
    // const nbaTeams = await getAllNBATeams()
    // const mlbTeams = await getAllMLBTeams()
    console.log(sportsAPI, sports);
    console.log(trackedGamesAPI, trackedgames);
    // console.log(nflTeams.teams);
    // console.log(nhlTeams.teams);
    // console.log(nbaTeams.teams);
    // console.log(mlbTeams.teams);
    this.setState({
      sports:sports,
      trackedgames: trackedgames
      // nflTeams: nflTeams.teams.strTeam,
      // nhlTeams: nhlTeams.teams,
      // nbaTeams: nbaTeams.teams,
      // mlbTeams: mlbTeams.teams,
  })
  }



  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null})
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()})
  }
  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' render={() =>
           <HomePage/>
           
           
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              
            />
          }/>
          <Route exact path='/login' render={({history}) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
