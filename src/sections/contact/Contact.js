import React, { Component } from 'react'
import Divider from 'material-ui/Divider'

// Styles
import './Contact.css'
import image1 from '../assets/image1.jpeg'

class Contact extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    handleName = (event, newValue) => {
        this.setState({name: newValue})
    }

    handleEmail = (event, newValue) => {
        this.setState({email: newValue})
    }

    handlePhone = (event, newValue) => {
        this.setState({phone: newValue})
    }

    handleMessage = (event, newValue) => {
        this.setState({message: newValue})
    }

    render(){
        return(
            <div>

                <div className='picture-container'>
                    <img className='image-pic' src={image1}/>
                </div>

                <div className='contact-us-container'>
                    <p className='contact-us-text'>Contact Us</p>
                </div>

                <div className='form-container'>

                    <p className='message-text'>Want to get in touch? Fill out the form below to send us a message and we will get back to you as soon as possible!</p>

                    <form className='form' action={`https://formspree.io/${process.env.REACT_APP_CONTACT_EMAIL}`} method="POST">

                        <input placeholder="Name" className='text-field' type="text" name="Name"/>

                        <input placeholder="Email" className='text-field' type="email" name="Email"/>

                        <input placeholder="Phone" className='text-field' type="text" name="Phone"/>

                        <input placeholder="Message" className='text-field' type="text" name="Message"/>

                        <input className='submit-button' type="submit" value="SEND"/>
                        <input type="hidden" name="_next" value="scmd/contact" />
                    </form>

                </div>

                <Divider/>

                <div className='social-media-links-container'>
                    <a href="https://www.google.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i className="fab fa-facebook-f fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.google.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i className="fab fa-twitter fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>

                    <a href="https://www.google.com" target='_blank' rel="noopener noreferrer">
                        <div className='icon-container'>
                            <i className="fab fa-instagram fa-2x" style={{color: '#fff'}}></i>
                        </div>
                    </a>
                </div>
                
            </div>
        )
    }
}

export default Contact