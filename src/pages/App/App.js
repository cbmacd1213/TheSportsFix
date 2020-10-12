import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import { getAllSports, getAllNFLTeams, getAllNHLTeams, getAllNBATeams, getAllMLBTeams } from '../../services/sports-api';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      sports: [],
      nflTeams: [],
      nhlTeams: [],
      nbaTeams: [],
      mlbTeams: [],
    };
  }

  async componentDidMount(){
    const sports = await getAllSports()
    const nflTeams = await getAllNFLTeams()
    const nhlTeams = await getAllNHLTeams()
    const nbaTeams = await getAllNBATeams()
    const mlbTeams = await getAllMLBTeams()
    console.log(sports.sports);
    console.log(nflTeams.teams);
    console.log(nhlTeams.teams);
    console.log(nbaTeams.teams);
    console.log(mlbTeams.teams);
    this.setState({
      sports: sports.sports[5].strSport,
      nflTeams: nflTeams.teams.strTeam,
      nhlTeams: nhlTeams.teams,
      nbaTeams: nbaTeams.teams,
      nbaTeams: mlbTeams.teams,
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
        <NavBar 
        user={this.state.user} 
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/' render={() =>
           <div>{this.state.nflTeams}</div> 
           
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
