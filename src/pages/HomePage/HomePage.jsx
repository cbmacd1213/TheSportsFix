import React from 'react';
import { Link } from 'react-router-dom';
import ButtonList from '../../components/ButtonList/ButtonList';
import NavBar from '../../components/NavBar/NavBar';
import TrackedTeamList from '../../components/TrackedTeamsList/TrackedTeamsList';


const HomePage = (props) => {
  return (
    <div className="HomePage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <ButtonList/>
      <TrackedTeamList/>
     
      <footer>
    
      </footer>
    </div>
  );

};

export default HomePage;