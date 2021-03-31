import React, { Component, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import LeaguePage from '../../components/LeaguePage/LeaguePage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage'
import sportsService from '../../utils/sportsService';
import trackedGamesService from '../../utils/trackedGamesService';
import NavBar from '../../components/NavBar/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      sports: [], 
    };
  }

  async componentDidMount(){
    const sportsDetails = await sportsService.leagueDetail()
    //const sportsEvents = await sportsService.leagueEvents()
    const trackedgames = await trackedGamesService.index()
    this.setState({
      sportsDetails:sportsDetails,
      trackedgames: trackedgames
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
           <HomePage
           user={this.state.user}
           />
           
           
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
          <Route exact path='/leagues/:league' render={({history}) => 
            <LeaguePage
            
            history = {history}
            
            />
          }/>
        </Switch>
      </div>
    );
  }
}

export default App;
