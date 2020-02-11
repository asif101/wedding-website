import React from 'react'
import './RSVP.css'

export default class RSVP extends React.Component {

    render() {
        return (
            <div className='RSVP'>
                <h2>RSVP</h2>
                <p>Please RSVP by March 18th at:</p>
                <a href='http://rahmanmcmahon.rsvpify.com'> http://rahmanmcmahon.rsvpify.com</a>
                <div className='hr' style={{marginTop: '10vh'}}></div>
            </div>
        )
    }
}