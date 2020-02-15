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
                        <p>
                            **Shuttles will be available to take guests from IAD directly to the hotel.
                            Depending on preference and demand, there is a 4 person car for $100 or
                            spots on a 12 seat van for $20 per person. If interested in a shuttle please
                            contact Linda at 540-773-4660 who will be scheduling pick-up times based on
                            everyone’s arrival time. Depending on demand, there will likely be morning,
                            afternoon and evening bus times.**
                        </p>
                        <p>Linda has also offered to coordinate pick-ups from BWI or DCA if needed. Prices TBD based on need.</p>
                        <p>There is also megabus line that connects the DC area (including IAD) to Front Royal</p>
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