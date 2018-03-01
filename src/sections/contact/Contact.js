import React, { Component } from 'react'
import Divider from 'material-ui/Divider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

// Styles
import './Contact.css'
import { styles } from './styles'

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

    handleSubmit = () => {
        // const { name, email, phone, message } = this.state

    }

    render(){
        return(
            <div style={{width: '80%', float: 'right'}}>

                <div className='picture-container'>
                    
                </div>

                <div className='contact-us-container'>
                    <p className='contact-us-text'>Contact Us</p>
                </div>

                <div className='form-container'>

                    <p className='message-text'>Want to get in touch? Fill out the form below to send us a message and we will get back to you as soon as possible!</p>

                    <TextField
                        style={styles.textField}
                        hintText="Name"
                        hintStyle={styles.hintStyle}
                        inputStyle={styles.inputStyle}
                        onChange={this.handleName}
                    /><br />
                    <TextField
                        style={styles.textField}
                        hintText="Email Address"
                        hintStyle={styles.hintStyle}
                        inputStyle={styles.inputStyle}
                        onChange={this.handleEmail}
                    /><br />
                    <TextField
                        style={styles.textField}
                        hintText="Phone Number"
                        hintStyle={styles.hintStyle}
                        inputStyle={styles.inputStyle}
                        onChange={this.handlePhone}
                    /><br />
                    <TextField
                        style={styles.textField}
                        multiLine={true}
                        hintText="Message"
                        hintStyle={styles.hintStyle}
                        inputStyle={styles.inputStyle}
                        onChange={this.handleMessage}
                    /><br />
                    <RaisedButton label="Send" primary={true} style={styles.button} onClick={this.handleSubmit} />
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

export default Contact