import React from 'react';
import './App.css';
import { Scrollbars } from 'react-custom-scrollbars'
import LandingPage from './components/LandingPage/LandingPage'
import Venue from './components/Venue/Venue'

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
      <Venue></Venue>
    </Scrollbars>
  );
}

export default App;
