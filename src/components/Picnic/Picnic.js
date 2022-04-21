import React from 'react'
import './Picnic.css'

export default class Picnic extends React.Component {

    render() {
        return (
            <div className='Picnic'>
                <div className='section'>

                    <div className='text-box'>
                        <h2>Picnic</h2>
                        <p>For those sticking around, we invite you to join us on Sunday (May 8) for snacks and yard games at Lions Park in Front Royal</p>
                        <p>Start time: 11:30am</p>
                        <ul>
                            <li>Lions Park</li>
                            <li>930 Hometown Way</li>
                            <li>Front Royal, VA 22630</li>
                            <li>Picnic Shelter #5</li>
                        </ul>
                        <p><a target="_blank" rel="noopener noreferrer" href='https://goo.gl/maps/rcekaiCxBxCab81b6'>Google Map Location</a></p>
                    </div>

                    <div className='photo-box'>
                        <img src='./assets/images/ranger.jpg' alt="logo" />
                    </div>

                </div>
                <div className='hr' style={{ marginTop: '10vh' }} />
            </div>
        )
    }
}