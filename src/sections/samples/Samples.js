import ReactPlayer from 'react-player'
import React, { Component } from 'react'
import Divider from 'material-ui/Divider'

// Styles
import './Samples.css'

class Samples extends Component {
    render(){
        return(
            <div>
                <div className='picture-container'>
                
                </div>

                <div className='sample-container'>
                    <p className='sample-text'>Sample Work</p>
                </div>

                <div className='sample-work-container'>

                    <div className='sample-work-area'>
                        <ReactPlayer className='player' url='https://soundcloud.com/ovosound1/4pm-in-calabasas-explicit' height='200px'/>

                        <ReactPlayer className='player' url='https://www.youtube.com/watch?v=NV-3s2wwC8c'/>
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
                            <i className="fab fa-twitter fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.w3schools.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i className="fab fa-instagram fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>
                </div>

            </div>
        )
    }
}

export default Samples