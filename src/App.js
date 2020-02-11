import React from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars'
import LandingPage from './components/LandingPage/LandingPage'
import Event from './components/Event/Event'
import RSVP from './components/RSVP/RSVP'
import Venue from './components/Venue/Venue'
import Directions from './components/Directions/Directions'
import Accomodation from './components/Accomodation/Accomodation'

function App() {
  return (
    <Scrollbars className="App">

      {/* <div className="menu-bar">
          <div>Venue</div>
          <div>Hotel</div>
          <div>Brunch</div>
          <div>RSVP</div>
        </div> */}


      <LandingPage></LandingPage>
      <Event></Event>
      <RSVP></RSVP>
      <Venue></Venue>
      <Directions></Directions>
      <Accomodation></Accomodation>
    </Scrollbars>
  );
}

export default App;
