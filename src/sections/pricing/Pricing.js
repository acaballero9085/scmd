import Divider from 'material-ui/Divider'
import React, { Component } from 'react'

// Styles
import './Pricing.css'

class Bio extends Component {
    render(){
        return(
            <div>
                <div className='picture-container'>

                </div>

                <div className='pricing-container'>
                    <p className='pricing-text'>Pricing</p>
                </div>

                <div className='pricing-list-container'>

                    <h2 style={{width: '80%'}}>These prices function for Marching Band, Indoor Winds, Indoor 
                        Percussion, Concert Percussion, and Winterguard. We offer a 
                        variety of options and packages to fit any program with any need!
                        </h2>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Battery Arrangements</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$750 - $1250</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Front Ensemble<br/> Arrangements</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$750 - $1250</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Percussion Arrangements (Includes Battery & Front Ensemble)</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$1250 - $2000</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Wind Arrangements</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$1000 - $2000</span>
                        </div>
                    </div>
                    
                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Full Band Arrangements (Includes Winds, Battery, and Front Ensemble)</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$2000 - $3500</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Drill Design</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$1000 - $2500</span>
                        </div>
                    </div>
                    
                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Entire Show <br/>(Includes Winds, Battery, Front Ensemble, and Drill Design)</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$3000 - $5500</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Choreography <br/>(Horn & Battery)</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$500 - $1000 <br/>+ transportation <br/>(If applicable)</span>
                        </div>
                    </div>
                    
                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Sound Design</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$250 - $500</span>
                        </div>
                    </div>
                    
                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Winter Guard Sound Design</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$200-$300</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Flag Design Fee</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$100 <br/>(per flag)</span>
                        </div>
                    </div>
                    
                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Visual Consultations</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$50 per video <br/>or<br/> $250 for the season</span>
                        </div>
                    </div>

                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Winter Guard Staging</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$500-$1500</span>
                        </div>
                    </div>
                    
                    <div className='price-card'>
                        <div className='text-container'>
                            <h3 className='price-font'>Choreography</h3>
                        </div>

                        <div className='price-container'>
                            <span className='price'>$200 <br/>per movement</span>
                        </div>
                    </div>

                </div>

                <Divider/>

                <div className='social-media-links-container'>
                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i className="fab fa-facebook-f fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i class="fab fa-twitter fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i class="fab fa-instagram fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Bio