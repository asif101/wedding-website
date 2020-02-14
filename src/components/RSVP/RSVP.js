import React from 'react'
import './RSVP.css'

export default class RSVP extends React.Component {

    render() {
        return (
            <div className='RSVP'>
                <h2>RSVP</h2>
                <p>Please RSVP by March 18th</p>
                <a target="_blank" href='https://forms.gle/m7EkDeX7VNdxtpxHA'> Click here to RSVP</a>
                <div className='hr' style={{marginTop: '10vh'}}></div>
            </div>
        )
    }
}