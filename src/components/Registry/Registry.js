import React from 'react'
import './Registry.css'

export default class Registry extends React.Component {

    render() {
        return (
            <div className='Registry'>
                <div className='section'>

                    <div className='photo-box'>
                        <img src='./assets/images/dxb-wedding.jpg' alt="logo" />
                    </div>

                    <div className='text-box'>
                        <h2>Registry</h2>
                        <p>We are registered at Amazon: </p>
                        <a target="_blank" href='https://www.amazon.com/wedding/elizabeth-mcmahon-asif-rahman-front-royal-april-2020/registry/B2RLNFTS4UIZ'>Click here to see our registry</a>
                    </div>

                </div>
                <div className='hr' style={{ marginTop: '10vh' }} />
            </div>
        )
    }
}