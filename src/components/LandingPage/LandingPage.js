import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
    
        return (
            <div className="landing-page">
            <div style={{ backgroundImage: 'url(./assets/images/garden-filter-light.jpg)' }} className='main-image' alt="logo">
              <div className="overlay">
                <span className='helper'></span>
                <img src='./assets/images/badge.png' className="badge" alt="logo" />
              </div>
            </div>
            <div className='title-box'>
              <div className='left-wreath' style={{ backgroundImage: 'url(./assets/images/left-wreath.png)' }}></div>
              <p>We're getting married!</p>
              <div className='right-wreath' style={{ backgroundImage: 'url(./assets/images/left-wreath.png)' }}></div>
            </div>
          </div>
        )
}