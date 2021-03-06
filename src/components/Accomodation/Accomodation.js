import React from 'react'
import './Accomodation.css'

export default class Accomodation extends React.Component {

    render() {
        return (
            <div className='Accomodation'>
                <div className='section'>
                    <div className='photo-box'>
                        <img src='./assets/images/hampton-inn.jpg' alt="logo" />
                    </div>
                    <div className='text-box'>
                        <h2>Accomodation</h2>
                        <p>
                            We have a room block at the Hampton Inn Front Royal for Friday and Saturday nights - just call and ask for the McMahon/Rahman wedding (Group code: RMW)
                        </p>
                        <p>
                            Rooms with one king bed or two queen beds are available at $124 per night
                        </p>
                        <p>
                            We have reserved a conference room at the hotel that is open for people to hang out in throughout the weekend
                        </p>
                        <ul>
                            <li>HAMPTON INN</li>
                            <li> 9800 Winchester Road, Front Royal VA 22630</li>
                            <li>P: (540) 635-1882</li>
                        </ul>
                        {/* <p><a target="_blank" rel="noopener noreferrer" href='https://group.hamptoninn.com/tpu97f'>Click here to book a room in our room block</a></p> */}
                    </div>

                </div>
                <div className='hr' style={{ marginTop: '10vh' }} />
            </div>
        )
    }
}