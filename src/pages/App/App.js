import React, { Component, useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import HomePage from '../HomePage/HomePage'
import sportsService from '../../utils/sportsService';
import trackedGamesService from '../../utils/trackedGamesService';




// function App() {
//   const [log, setLog] = useState([]);
//   const [handleLogout, handleSignupOrLogin] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     trackedGamesService.index().then(res => setLog(res.reverse()));
//     sportsService.index().then(res => setLog(res.reverse()));
//   }, []);





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
    const sports = await sportsService.leagueDetail()
    const trackedgames = await trackedGamesService.index()
    console.log("BALL", trackedGamesService, trackedgames);
    console.log("SACK", sportsService, sports);
    this.setState({
      sports:sports,
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


  // useState(() => {
  //   handleLogout.logout({user:null})
  // })

  // handleLogout = () => {
  //   userService.logout();
  //   useState({user: null})
  // }

  // handleSignupOrLogin = () => {
  //   useState({user: userService.getUser()})
  // }


  
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
