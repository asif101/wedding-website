import React from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars'
import LandingPage from './components/LandingPage/LandingPage'
import Event from './components/Event/Event'
import RSVP from './components/RSVP/RSVP'
import Venue from './components/Venue/Venue'
import Directions from './components/Directions/Directions'
import Accomodation from './components/Accomodation/Accomodation'
import Picnic from './components/Picnic/Picnic'
import Registry from './components/Registry/Registry'

function App() {
  return (
    <Scrollbars className="App">


      <LandingPage></LandingPage>
      <Event></Event>
      <RSVP></RSVP>
      <Venue></Venue>
      <Accomodation></Accomodation>
      <Picnic></Picnic>
      <Registry></Registry>
      <Directions></Directions>

      <div className='end-banner'>
        <div className='hr'/>
        <img src='./assets/images/badge.png' className="end-badge" alt="logo" />
      </div>

    </Scrollbars>
  );
}

export default App