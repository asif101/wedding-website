import React from 'react'
import './Picnic.css'

export default class Picnic extends React.Component {

    render() {
        return (
            <div className='Picnic'>
                <div className='section'>
                   
                    <div className='text-box'>
                        <h2>Picnic</h2>
                        <p>For those sticking around, we invite you to join us on Sunday (April 19) for snacks and yard games in Shenandoah National Park.</p>
                        <p>Start time: 11:30am</p>
                        <p>Exact location in the park TBD</p>
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