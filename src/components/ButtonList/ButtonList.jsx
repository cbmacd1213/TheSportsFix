import React from 'react';
import NFLButton from '../NFLButton/NFLButton';
import NBAButton from '../NBAButton/NBAButton';
import NHLButton from '../NHLButton/NHLButton';
import MLBButton from '../MLBButton/MLBButton';
import './ButtonList.css';


const ButtonList = (props) => (
  <div className='ButtonList'>
    <NFLButton/>
    <NBAButton/>
    <NHLButton/>
    <MLBButton/>
  </div>
);

export default ButtonList;