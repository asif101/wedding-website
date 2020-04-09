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

      <div className='urgent-message'>
      Due to the recent developments involving COVID-19 and the daily changes in recommendations and regulations on large events, we have decided to postpone our wedding to an unknown date. We do not have a new date confirmed at this time, but we will let you all know once we have a better idea. We feel this is the best way to celebrate with as many of you as possible while keeping everyone safe. Stay safe and we will be in touch!
      </div>


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