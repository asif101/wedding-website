import React from 'react'
import './Directions.css'

export default class Directions extends React.Component {

    render() {
        return (
            <div className='Directions'>
                <h2>Directions</h2>
                <div className='section'>
                    <div className='text-box'>
                        <h3>Flying</h3>
                        <p>IAD (Dulles) - 1hr from hotel/country club (Front Royal, VA), 30 min from DC</p>
                        <p>DCA (Reagan) - 1hr 20min from hotel/country club, 10 min from DC</p>
                        <p>BWI (Baltimore) - 2hrs from hotel/country club, 45min-1hr from DC</p>
                    </div>
                    <div className='text-box'>
                        <h3>Driving</h3>
                        <p>From DC and Points East:</p>
                        <ul>
                            <li>Follow I-66 West to Exit 6 and turn right on Route 522 North</li>
                            <li>Follow Route 522 North to Fairgrounds Rd (traffic light) and turn right</li>
                            <li>Follow Fairgrounds Rd approx. four and a quarter miles to Bowling View Rd and turn left (you will pass Bowling Green Rd)</li>
                            <li>Following Bowling View Rd approx. one mile to South Clubhouse on right</li>
                        </ul>

                        <p>From Points South:</p>
                        <ul>
                            <li>Follow I-81 North to I-66 East</li>
                            <li>Follow I-66 East to Exit 6 and turn left on Route 522 North</li>
                            <li>Follow Route 522 North to Fairgrounds Rd (traffic light) and turn right</li>
                            <li>Follow Fairgrounds Rd approx. four and a quarter miles to Bowling View Rd and turn left (you will pass Bowling Green Rd)</li>
                            <li>Following Bowling View Rd approx. one mile to South Clubhouse on right</li>
                        </ul>

                        <p>From Points North:</p>
                        <ul>
                            <li>Follow I-81 South to I-66 East</li>
                            <li>Follow I-66 East to Exit 6 and turn left on Route 522 North</li>
                            <li>Follow Route 522 North to Fairgrounds Rd (traffic light) and turn right</li>
                            <li>Follow Fairgrounds Rd approx. four and a quarter miles to Bowling View Rd and turn left (you will pass Bowling Green Rd)</li>
                            <li>Following Bowling View Rd approx. one mile to South Clubhouse on right</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}