import React from 'react'
import './Venue.css'

export default function Venue() {
    return (
        <div className='Venue'>

            <div className='section'>
                <div className='text-box'>
                    <h2>Venue Details</h2>
                    <p>
                        The ceremony will take place in the south ballroom and outdoor arbor of the Bowling Green Country Club in Front Royal, VA
                    </p>
                    <p>Dinner will be buffet style</p>
                    <p>The ceremony will begin at 4pm</p>
                </div>
                <div className='photo-box'>
                    {/* <img src='./assets/images/bowling green.jpg' alt="logo" /> */}
                    <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2607.8230641321206!2d-78.1215080819613!3d38.98697880646857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b5c33730f9d19b%3A0x1e21d55fd8a9e519!2sBowling%20Green%20South%20course!5e0!3m2!1sen!2sus!4v1581289244190!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
                </div>
            </div>
            <div className='hr' style={{ marginTop: '10vh' }} />

        </div>
    )
} 