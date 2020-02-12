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
      <Accomodation></Accomodation>
      <Picnic></Picnic>
      <Registry></Registry>
      <Directions></Directions>
    </Scrollbars>
  );
}

export default App;
