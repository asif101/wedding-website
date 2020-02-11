import React from 'react'
import './Accomodation.css'

export default class Accomodation extends React.Component {

    render() {
        return (
            <div className='Accomodation'>
                <div className='section'>
                    <div className='text-box'>
                        <h2>Accomodation</h2>
                        <p>
                            We have a room block at the Hampton Inn Front Royal for Friday and Saturday nights - just use the link below or call and ask for the McMahon/Rahman wedding (Group code: RMW)
                        </p>
                        <ul>
                            <li>HAMPTON INN</li>
                            <li> 9800 Winchester Road, Front Royal VA 22630</li>
                            <li>P: (540) 635-1882</li>
                            <li>Booking Link: <a href='http://group.hamptoninn.com/McMahonRahmanEvent'>http://group.hamptoninn.com/McMahonRahmanEvent</a></li>
                        </ul>
                    </div>
                    <div className='photo-box'>
                        <img src='./assets/images/hampton-inn.jpg' alt="logo" />
                    </div>
                </div>
                <div className='hr' style={{ marginTop: '10vh' }} />
            </div>
        )
    }
}