import React from 'react'
import './RSVP.css'

export default class RSVP extends React.Component {

    render() {
        return (
            <div className='RSVP'>
                <h2>RSVP</h2>
                <p>Please RSVP by Feburary 28, 2022</p>
                <a target="_blank" rel="noopener noreferrer" href='https://forms.gle/LFExxEvdNcrHVCY96'> Click here to RSVP</a>
                <div className='hr' style={{marginTop: '10vh'}}></div>
            </div>
        )
    }
}