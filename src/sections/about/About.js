import React, { Component } from 'react'
import Divider from 'material-ui/Divider'

// Styles
import './About.css'

class About extends Component {
    render(){
        return(
            <div  style={{width: '80%', float: 'right'}}>
                <div className='picture-container'>
                
                </div>

                <div className='about-container'>
                    <p className='about-text'>About</p>
                </div>

                <div className='about-text-container'>

                    <h1>Here is a header.</h1>

                    <p>Gubergren liberavisse no usu, ad quo nulla postulant assueverit, legere graeci eleifend no 
                        qui. Perfecto postulant qualisque mel ea. Cu ius aperiam accusata. Nam ut tamquam dissentiunt, 
                        ea qui noster pertinacia disputationi. Vitae possim mentitum ad per.
                    </p>

                    <h1>Here is a second header.</h1>

                    <p>Lorem ipsum dolor sit amet, ex erat commodo vocibus usu, ius vivendo deleniti democritum 
                        ex. Mei id detracto verterem tincidunt, ex sonet latine scripta nam. Purto causae tractatos 
                        cu mea, id latine cotidieque omittantur his. Iriure argumentum pro ei. Sale solum veniam an duo.
                    </p>

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

export default About